import React from 'react';
import { IBasket } from '../basket-product-content';

interface PaymentProductIProps {
  cart: IBasket
}

const PaymentProductContent = ({cart} :PaymentProductIProps) => {
  
  return(
    <div className="payment-content">  
      <div className="payment-content--image">
        <img src={cart.image} alt='' />
      </div>
      <div className="payment-content--subs">
        <div>
          <h3>{cart.title}</h3>
          <p>{cart.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
        <ul>
          <li>색상: {cart.color}</li>
          <li>사이즈: {cart.size}</li>
          <li>수량: {cart.stock}</li>
        </ul>
      </div>
    </div>
  )}

export default PaymentProductContent;