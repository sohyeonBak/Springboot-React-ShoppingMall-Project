import React from 'react';
import ProductColor from './product-color';
import ProductImage from './product-image';
import ProductSize from './product-size';

export type IProduct = {
  id: number, 
  image: {
    id: number, 
    src:string
  }[],
  title: string,
  price: number,
  color: string[],
  size: string[],
  explanation : string,
  review : { 
    id: number,
    image: string,
    rate: number,
    user: {
      id: number,
      name: string
    },
    comment: string,
    data : string
  }[]
}

export interface MainProductIProps {
  mainProduct: IProduct
}

const ProductZone = ({mainProduct} : MainProductIProps) => {
  
  const explain = mainProduct.explanation.split('.')
  return(
    <div className="detailed-product">
      <div className="product-image-zone">
        <img className="product-image--main" src={mainProduct.image[0].src} alt='' />
        <ul>
          {mainProduct.image.map((image)=> 
            <ProductImage key={image.id} image={image.src}/>
          )}
        </ul>
      </div>
      <div className="product-explain">
        <div className="product-explain--title">
          <h3>{mainProduct.title}</h3>
          <p>{mainProduct.price}</p>
        </div>
        <div className="product-explain--color">
          <h4>색상</h4>
          <ul>
            {mainProduct.color.map((color, idx) => 
              <ProductColor key={idx} color={color}/>
            )}
          </ul>
        </div>
        <div className="product-explain--size">
          <h4>사이즈</h4>
          <ul>
            {mainProduct.size.map((size, idx) => 
              <ProductSize key={idx} size={size}/>
            )}
          </ul>
        </div>
        <div className="product-explain--content">
          <h4>상품설명</h4>
          <div>
            {explain.map((text, idx)=> 
              <p key={idx}>{text}.</p>
            )}
          </div>
        </div>
        <div className="product-explain--button">
          <button>장바구니에 담기</button>
        </div>
      </div>
    </div>  
  )}

export default ProductZone;