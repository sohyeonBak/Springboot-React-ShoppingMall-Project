import React, { useState } from 'react';
import { Switch } from 'react-router';
import ProductsListDetailed from './products-list-detailed';
import '../../../style/scss/productlist.scss'

export interface ProductsListIProps {
  id : number,
  image : string,
  title : string,
  price : number,
  color : string[]
}

const ProductsList = () => {
  const [productlist] = useState<ProductsListIProps[]>([
    { id : 1, image : 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 2, image : 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 3, image : 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 4, image : 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 5, image : 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 6, image : 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 7, image : 'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 8, image : 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 9, image : 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 10, image : 'https://images.unsplash.com/photo-1496217590455-aa63a8350eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 11, image : 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 12, image : 'https://images.unsplash.com/photo-1509087859087-a384654eca4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 13, image : 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 14, image : 'https://images.unsplash.com/photo-1571513800374-df1bbe650e56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 15, image : 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=372&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 16, image : 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=373&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 17, image : 'https://images.unsplash.com/photo-1592669241067-2f92a1048085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 18, image : 'https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 19, image : 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
    { id : 20, image : 'https://images.unsplash.com/photo-1547976152-ac956d37caf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] }, 
  ])


  return (
    <>
      <section className="product-list">
        <div className="product-list-zone">
          <div className="product-list-header">
            <h2>상의</h2>
            <ul>
              <li>상의</li>
              <li>전체보기</li>
            </ul>
          </div>
          <div className="product-list-content">
            {productlist.map((item)=>
              <ProductsListDetailed 
                key={item.id} 
                id={item.id}
                image={item.image} 
                title={item.title} 
                price={item.price}
                color={item.color}
              />
            )}
          </div>
        </div>
        
      </section> 
    </>
  );
};

export default ProductsList;