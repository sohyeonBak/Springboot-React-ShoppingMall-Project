import React, { useCallback, useState } from 'react';
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
  stock: number,
  color: {
    id: number,
    color: string,
    color_name: string
  }[],
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
  const [mainImage, setMainImage] = useState(mainProduct.image[0].src);
  const [selectColor, setSelectColor] = useState(mainProduct.color[0].color_name);
  const [selectSize, setSelectSize] = useState(mainProduct.size[0]);
  const [selectStock, setSelectStock] = useState(1);
  const [buyProduct, setbuyProduct] = useState(true);

  const explain = mainProduct.explanation.split('.');
  
  const onhandleMainImage = useCallback((img)=>{
    setMainImage(img)
  },[setMainImage]);

  const onSelectColor = useCallback((e)=>{
    setSelectColor(e.target.value);
  },[setSelectColor])

  const onSelectSize = useCallback((e)=>{
    setSelectSize(e.target.value);
  },[setSelectSize])

  const onSelectStock = useCallback((e)=>{
    setSelectStock(e.target.value);
  },[setSelectStock])

  const onhandleCart = useCallback((e)=>{
    setbuyProduct(false)
  },[setbuyProduct])
  
  return(
    <div className="detailed-product">
      <div className="product-image-zone">
        <img className="product-image--main" src={mainImage} alt='' />
        <ul>
          {mainProduct.image.map((image)=> 
            <ProductImage key={image.id} image={image} onhandleMainImage={onhandleMainImage}/>
          )}
        </ul>
      </div>
      <div className="product-explain">
        <div className="product-explain--title">
          <h3>{mainProduct.title}</h3>
          <p>{mainProduct.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
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
        <div className="product-explain--select">
          {buyProduct ? '' :
            <>
            <div className="product-explain--selectzone">
              <div>
                <p>수량</p>
                {mainProduct.stock > 5 ? (
                  <select onChange={onSelectStock} value={selectStock}>
                    {[1, 2, 3, 4, 5].map((stock, idx) => 
                      <option key={idx} value={stock}>{stock}</option>  
                    )}
                  </select>
                ) : (
                  <select onChange={onSelectStock} value={selectStock}>
                      <option value='1'>1</option>  
                  </select>
                )}
              </div>
              <div>
                <p>색상</p>
                <select onChange={onSelectColor} value={selectColor}>
                  {mainProduct.color.map((color) => 
                    <option key={color.id} value={color.color_name}>{color.color_name}</option>  
                  )}
                </select>
              </div>
              <div>
                <p>사이즈</p>
                <select onChange={onSelectSize} value={selectSize}>
                  {mainProduct.size.map((size,idx) => 
                    <option key={idx} value={size}>{size}</option>  
                  )}
                </select>
              </div>
            </div>
            <div className="product-explain--select-confirm">
              <p>{mainProduct.title}</p>
              <ul>
                <li>수량 : {selectStock}</li>
                <li>색상 : {selectColor}</li>
                <li>사이즈 : {selectSize}</li>
              </ul>
            </div>
            </>
          }
          
          {buyProduct ? <button onClick={onhandleCart}>장바구니에 담기</button> : <button>확인</button>}
        </div>
      </div>
    </div>  
  )}

export default ProductZone;