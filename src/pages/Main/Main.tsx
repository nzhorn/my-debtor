import React from 'react';

import Card from 'components/Card';
import Layout from 'components/Layout';
import Input from 'components/Inputs';
import Button from 'components/Buttons';
import Search from 'components/Search';

const Main = () => {
  return (
    <>
      <Layout>
        <Card title="Create a new event!">
          <Input placeholder={'Enter event name'} />
          <Button>Start</Button>
          <Search />
        </Card>
      </Layout>
    </>
  );
};

export default Main;
