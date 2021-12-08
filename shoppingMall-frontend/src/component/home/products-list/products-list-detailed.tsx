import React from 'react';
import { Link } from 'react-router-dom';
import ColorList from './colorlist';

interface ProductListIProps {
  list : {
    id : number,
    image : string,
    title: string,
    price: number,
    color: string[],
    kind: string,
    detailed_kind: string
  }
}

const ProductsListDetailed = ({list} : ProductListIProps) => {
  return(
    <Link to={'/product'}>
      <div className="list-product" >
        <img src={list.image} alt=''/>
        <ul className="list-product-info">
          <li>{list.title}</li>
          <li>{list.price}</li>
        </ul>
        <ul className="list-product-color">
          {list.color.map((color, index)=>
            <ColorList key={index} color={color}/>
          )}
        </ul>
      </div>    
    </Link>
    
  );}

export default ProductsListDetailed;