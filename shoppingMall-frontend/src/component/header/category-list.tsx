import React from 'react';
import { useState } from 'react';

const CategoryList = () => {
  const [list, setList]=useState(
    [{
      id:1,
      name:"top",
      kind:"knit"
    },{
      id:2,
      name:"top",
      kind:"dress"
    },{
      id:1,
      name:"top",
      kind:"outer"
    }]
)
  return (
    <div className="hide-section">
      <div className="category-zone">
        <div className="sec01">
          <h3>상의</h3>
          <ul>
            <li>전체보기</li>
            <li>아우터</li>
            <li>티</li>
            <li>니트</li>
          </ul>
        </div>
        <div className="sec02">
          <h3>하의</h3>
          <ul>
            <li>전체보기</li>
            <li>슬랙스</li>
            <li>진</li>
            <li>쇼츠</li>
          </ul>
        </div>
        <div className="sec03">
          <h3>악세서리</h3>
          <ul>
            <li>전체보기</li>
            <li>신발</li>
            <li>쥬얼리</li>
            <li>기타</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;