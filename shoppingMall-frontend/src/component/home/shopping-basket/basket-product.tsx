import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../reducers';
import BasketProductContent from './basket-product-content';

type IMyBasket = {
  id: number,
  title: string,
  image: string,
  price: number,
  size: string,
  stock: number,
  color: string,
}

const BasketProduct = () => {
  const {userCart} = useSelector((state:RootState) => state.product);
  
  return (
    <section className="basket-zone">
      <h2>곰돌님의 장바구니</h2>
      {userCart.map((cart) => 
        <BasketProductContent key={cart.id} cart={cart} />
      )}
      <div className="basket-conclusion">
        <div className="basket-conclusion--title">
          <h3>주문요약</h3>
        </div>
        <div className="basket-conclusion--content">
          <ul>
            <li>총 상품 금액</li>
            <li>{userCart.reduce((a,b)=>a+b.price , 0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</li>
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
            <li>{userCart.reduce((a,b)=>a+b.price , 0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</li>
          </ul>
        </div>
        <div className="basket-conclusion--button">
          <Link to='/mybasket/payment'><span>주문하기</span></Link>
        </div>
      </div>
    </section>
  );
};

export default BasketProduct;