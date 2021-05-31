import React from 'react';
import { useSelector } from 'react-redux';

import './Main.styles.scss';

import Card from 'components/Card';
import Layout from 'components/Layout';
import Input from 'components/Inputs';
import Button from 'components/Buttons';
import Panel from 'components/Panel';
import { selectUser } from 'state/user/user.slice';

const Main = () => {
  const selector = useSelector(selectUser);

  const onClickDelete = () => {
    console.log('kek');
  };

  return (
    <>
      <Layout>
        <div className="flex-column normal-gap">

          <div className="flex normal-gap">
            <div className="flex flex-one">
              <Card>
                <div className="new-event-card-container">
                  <div>Create your event!</div>
                  <Input placeholder={'Type event name'} />
                  <Button>Start</Button>
                </div>
              </Card>
            </div>

            <div className="flex flex-two">
              <Card>
                <div className="current-status-card">
                  <div className="accent-title">You are free!</div>
                  <div className="gray-text">Ok, let’s spend money on ice cream and chocolate cake</div>
                </div>
              </Card>
            </div>
          </div>

          <div className="history-container">
            <div className="flex flex-one">
              <Input placeholder={'Search...'} />
            </div>
            <Panel title={'First panel'} value={'1000RUB'} onDelete={onClickDelete} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Main;
