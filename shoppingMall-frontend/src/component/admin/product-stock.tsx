import { useState } from "react";
import { useCallback } from "react";

const ProductStock = () => {
  const [ category, setCategory ] =useState({
    kind:''
  })

  const onAddCategory = (e:any) =>{
    setCategory({
      ...category,
      [e.target.name] : e.target.value
    })
  }

  const onCatgory = (e:any) =>{
    e.preventDefault()
    console.log(category)
    fetch("http://localhost:8000/categories",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json; charset=utf-8",
      },
      body: JSON.stringify(category)
    })
    .then((res)=>{
      console.log(res)
      return res.json()
    })
    .then((res)=>{
      console.log(res)
    })
    
  }
  
  return (
    <div className="stock-section">
      <h3>재고등록</h3>
      <form className="stock-list" onSubmit={onCatgory}>
        <ul>
          <li>
            <label>카테고리</label>
            <input type="text" onChange={onAddCategory} name='kind'></input>
          </li>
        </ul>
        <button>확인</button>
      </form>
    </div>
  );
};

export default ProductStock;