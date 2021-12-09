import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import BasketContent from './basket-content';

const ShoppingBasket = () => {
  const {userCart} = useSelector((state:RootState) => state.product);
  
  return (
    <section className="basket-zone">
      <h2>곰돌님의 장바구니</h2>
      {userCart.map((cart) => 
        <BasketContent key={cart.id} cart={cart} />
      )}
      <div className="basket-conclusion">
        <div className="basket-conclusion--title">
          <h3>주문요약</h3>
        </div>
        <div className="basket-conclusion--content">
          <ul>
            <li>총 상품 금액</li>
            <li>0</li>
          </ul>
          <ul>
            <li>배송비</li>
            <li>0</li>
          </ul>
          <ul>
            <li>할인 금액</li>
            <li>0</li>
          </ul>
          <ul>
            <li>총 결제 금액</li>
            <li>0</li>
          </ul>
        </div>
        <div className="basket-conclusion--button">
          <button>결제하기</button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingBasket;