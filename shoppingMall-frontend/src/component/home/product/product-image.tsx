import React from 'react';

interface ProductImageIProps {
  image : {
    id: number, 
    src: string
  },
  onhandleMainImage : (img: string)=>void
}

const ProductImage = ({image, onhandleMainImage} : ProductImageIProps) => {
  
  return(
    <li><img onClick={()=>onhandleMainImage(image.src)} src={image.src} alt=''/></li>   
  )}

export default ProductImage;