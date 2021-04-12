import React from 'react';
import { useSelector } from 'react-redux';

import Card from 'components/Card';
import Layout from 'components/Layout';
import Input from 'components/Inputs';
import Button from 'components/Buttons';
import Search from 'components/Search';
import { selectUser } from 'state/user/user.slice';

const Main = () => {
  const selector = useSelector(selectUser)

  return (
    <>
      <Layout>
        <Card title="Create a new event!">
          <Input placeholder={'Enter event name'} />
          <Button>Start</Button>
          <Search />
          {selector.user?.email}
        </Card>
      </Layout>
    </>
  );
};

export default Main;
