import React from 'react';

interface ProductSizeIProps {
  size : string
}

const ProductSize = ({size} : ProductSizeIProps) => {
  
  return(
    <li>{size}</li>    
  )}

export default ProductSize;