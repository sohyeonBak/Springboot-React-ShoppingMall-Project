import React, { CSSProperties } from 'react';

interface ProductColorIProps {
  color : string
}

const ProductColor = ({color} : ProductColorIProps) => {
  
  const colorStyle: CSSProperties = {
    background : color
  }
  return(
    <li style={colorStyle}></li>
  )}

export default ProductColor;