import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import LogIn from './login';
import KakaoAuth from './oauth/kakaoAuth';
import Signup from './signup';

const Auth = () => {
  const match = useRouteMatch();
  return(
    <div>
      <Switch>
        <Route path={`${match.path}`} exact>
          <LogIn />
        </Route>
        <Route path={`${match.path}/oauth2/code/kakao`} >
          <KakaoAuth />
        </Route>
        <Route path={`${match.path}/join`}>
          <Signup />
        </Route>
      </Switch>
    </div>    
  );}

export default Auth;