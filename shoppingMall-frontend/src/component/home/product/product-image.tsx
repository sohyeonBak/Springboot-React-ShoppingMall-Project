import React from 'react';

interface ProductImageIProps {
  image : string
}

const ProductImage = ({image} : ProductImageIProps) => {
  
  return(
    <li><img src={image} alt=''/></li>   
  )}

export default ProductImage;