import React from 'react';

interface BasketIProps {
  cart : {
    id: number,
    title: string,
    price: number,
    stock: number,
    color: string,
  }
}

const BasketContent = ({cart}: BasketIProps) => {
  
  return(
    <div className="basket-content">
      
    </div>  
  );}

export default BasketContent;