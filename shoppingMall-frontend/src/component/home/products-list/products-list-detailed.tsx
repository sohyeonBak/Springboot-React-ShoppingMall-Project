import React from 'react';
import ListColor from './listcolor';
import { ProductsListIProps } from './products-list';

export interface ListColorIProps {
  color : string
}

const ProductsListDetailed = ({image, title, price, color}: ProductsListIProps) => {
  
  return(
    <div className="list-product">
      <img src={image} />
      <ul className="list-product-info">
        <li>{title}</li>
        <li>{price}</li>
      </ul>
      <ul className="list-product-color">
        {color.map((color, idx)=><ListColor key={idx} color={color}/>)}
      </ul>
    </div>    
  );}

export default ProductsListDetailed;