import React from 'react';
import ProductZone from './product-zone';
import Review from './review';
import '../../../style/scss/product.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

const Product = () => {

  const {mainProduct} = useSelector((state:RootState) =>state.product)

  return (
    <section className="product">
      <ProductZone mainProduct={mainProduct}/>
      <div className="product-review">
        <div className="product-review--title">
          <h3>상품리뷰 {mainProduct.review.length}</h3>
        </div>
        <div className="product-review--con">
        {mainProduct.review.map((review)=> 
          <Review key={review.id} review={review} productTitle={mainProduct.title}/>  
        )}
        </div>
      </div>
    </section>
  );
};

export default Product;