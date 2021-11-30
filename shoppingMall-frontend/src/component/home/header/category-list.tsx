import { useCallback } from "react";
import { Link } from "react-router-dom";
import { categoryIProps } from "./header";

const CategoryList = ({setCategory}: categoryIProps) => {

  const onCloseCategory = useCallback(()=>{
    setCategory(false)
  },[])

  return (
    <div className="hide-section">
      <div className="category-zone">
        <div className="sec01">
          <h3>상의</h3>
          <ul>
            <li><Link to={'/productlist'} onClick={onCloseCategory}>전체보기</Link></li>
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