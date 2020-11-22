import React, {ComponentClass, FunctionComponent, LazyExoticComponent} from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from '../pages/Main';

type RoutesProps = {
  path: string;
  component: FunctionComponent | ComponentClass | LazyExoticComponent<any>;
  exact?: boolean;
};

const routes: RoutesProps[] = [
  {path: '/', component: Main, exact: true},
  {path: '/home', component: Main, exact: true},
]

const Routes = () => (
  <Switch>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
    ))}
  </Switch>
);

export default Routes;
