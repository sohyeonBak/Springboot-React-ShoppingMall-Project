import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router';
import BasketProduct from './basket-product';
import PaymentProduct from './payment/payment-product';

const ShoppingBasket = () => {
  const match = useRouteMatch();
  return(
    <Switch>
      <Route path={`${match.path}`} exact>
        <BasketProduct />
      </Route>
      <Route path={`${match.path}/payment`}>
        <PaymentProduct />
      </Route>
    </Switch>  
  );}

export default ShoppingBasket;