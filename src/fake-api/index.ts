import { createServer, Model, Factory } from 'miragejs';
import { User } from '../models';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend<Partial<User>>({})
    },

    routes() {
      this.namespace = 'api';

      this.get('current-user', (schema) => {
        // @ts-ignore: tslint:disable-next-line
        return schema.users.first();
      });
    },

    seeds(server) {
      server.create('user', { name: 'Test user', email: 'test@test.com' });
    },
  });
}
