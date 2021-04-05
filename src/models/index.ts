export type User = {
  id: number;
  email: string;
  name: string;
}

export type Event = {
  id: number;
  name: string;
  dateStart: string;
  dateEnd: string;
};

export enum Status {
  Idle = 'idle',
  Pending = 'pending',
  Succeeded = 'succeeded',
  Failed = 'failed',
}
