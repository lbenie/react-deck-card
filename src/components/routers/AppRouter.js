

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { GamePage } from '../pages/GamePage';

export const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/game' component={GamePage} exact={true} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  </BrowserRouter>
);
