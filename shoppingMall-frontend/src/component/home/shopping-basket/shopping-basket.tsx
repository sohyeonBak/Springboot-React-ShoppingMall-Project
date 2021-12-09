import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import BasketContent from './basket-content';

const ShoppingBasket = () => {

  const {userCart} = useSelector((state:RootState) => state.product);

  return (
    <section className="basket-zone">
      {userCart.map((cart) => 
        <BasketContent key={cart.id} cart={cart} />
      )}
    </section>
  );
};

export default ShoppingBasket;