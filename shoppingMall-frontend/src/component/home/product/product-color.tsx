import React, { CSSProperties } from 'react';

interface ProductColorIProps {
  color : {
    id: number,
    color: string,
    color_name: string
  }
}

const ProductColor = ({color} : ProductColorIProps) => {
  
  const colorStyle: CSSProperties = {
    background : color.color
  }
  return(
    <li style={colorStyle}></li>
  )}

export default ProductColor;