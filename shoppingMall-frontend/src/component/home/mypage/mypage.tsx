import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import MyInfo from './myinfo';
import MyOrder from './myorder';
import '../../../style/scss/mypage.scss';
import { Link } from 'react-router-dom';

const MyPage = () => {
  const match = useRouteMatch();
  
  return(
    <section className="mypage">
      <div className="mypage-title">
        <h2>마이페이지</h2>
        <ul>
          <li>
            <Link to={'/mypage'}>회원정보</Link>
          </li>
          <li>
          <Link to={'/mypage/order'}>주문/배송</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path={`${match.path}`} exact>
          <MyInfo />
        </Route>
        <Route path={`${match.path}/order`}>
          <MyOrder />
        </Route>
      </Switch>  
    </section>
  );}

export default MyPage;