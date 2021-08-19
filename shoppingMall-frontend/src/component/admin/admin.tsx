import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import ProductManagement from './product-management';
import ProductStock from './product-stock';
import '../../style/scss/admin.scss'

const Admin = () => {
  const [ openSection, setOpenSection]=useState(true);
  
  const onOpenStack = useCallback(()=>{
    setOpenSection(true)
  },[])

  const onOpenManagement = useCallback(()=>{
    setOpenSection(false)
  },[])
  return (
    <div>
      <div className="admin-title">
        <div className="title">
          <h2>어드민</h2>
          <ul className="admin-list">
            <li onClick={onOpenStack}>재고관리</li>
            <li onClick={onOpenManagement}>상품관리</li>
          </ul>
        </div>
      </div>
      <div className="contents">
      {openSection
        ?<ProductStock />
        :<ProductManagement />
      }
      </div>
    </div>
  );
};

export default Admin;