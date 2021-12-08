import React from 'react';
import ProductsListDetailed from './products-list-detailed';
import '../../../style/scss/productlist.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';


const ProductsList = () => {

  const {mainProductList} = useSelector((state:RootState) => state.product);

  return (
    <>
      <section className="product-list">
        <div className="product-list-zone">
          <div className="product-list-header">
            <h2>{mainProductList[0].kind}</h2>
            <ul>
              <li>{mainProductList[0].kind}</li>
              <li>{mainProductList[0].detailed_kind}</li>
            </ul>
          </div>
          <div className="product-list-content">
              {mainProductList.map((list)=>
                <ProductsListDetailed key={list.id} list={list}/>
              )}
          </div>
        </div>
        
      </section> 
    </>
  );
};

export default ProductsList;