import React from 'react';
import ProductZone from './product-zone';
import Review from './review';
import '../../../style/scss/product.scss'

const Product = () => {
  return (
    <section className="product">
      <ProductZone />
      <Review />
    </section>
  );
};

export default Product;