import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import ProductManagement from './product-management';
import ProductStock from './product-stock';
import '../../style/scss/admin.scss'
import Categories from './categories';

export interface AdminProps {
  adminSelect : boolean,
}

const Admin = () => {
  const [ category, setCategory ] = useState('')
  const [ stock, setStock ] = useState('')
  const [ product, setProduct ] = useState('')

  const [ categoryClick, setCategoryClick ] = useState<AdminProps[`adminSelect`]>(true);
  const [ stockClick, setStockClick ] = useState<AdminProps[`adminSelect`]>(false);
  const [ productClick, setProductClick ] = useState<AdminProps[`adminSelect`]>(false);
  
  const onCategory = useCallback(()=>{
    setCategoryClick((prev)=>{
      if(prev){
         return true
      }else{
        return !prev
      }
    })
    setStockClick(false)
    setProductClick(false)
  },[])
const onStock = useCallback(()=>{
  setStockClick((prev)=>{
    if(prev){
       return true
    }else{
      return !prev
    }
  })
  setCategoryClick(false)
  setProductClick(false)
},[])
const onProduct = useCallback(()=>{
  setProductClick((prev)=>{
    if(prev){
       return true
    }else{
      return !prev
    }
  })
  setCategoryClick(false)
  setStockClick(false)
},[])

  return (
    <div>
      <div className="admin-title">
        <div className="title">
          <h2>어드민</h2>
          <ul className="admin-list">
            <li className={categoryClick===true? 'show' : ''} onClick={onCategory}>카테고리 등록</li>
            <li className={stockClick===true? 'show' : ''} onClick={onStock}>재고관리</li>
            <li className={productClick===true? 'show' : ''} onClick={onProduct}>상품관리</li>
          </ul>
        </div>
      </div>
      <div className="contents">
        <div className="inner">
          <Categories {...categoryClick}/>
          <ProductStock />
          <ProductManagement />
        </div>
      </div>
    </div>
  );
};

export default Admin;