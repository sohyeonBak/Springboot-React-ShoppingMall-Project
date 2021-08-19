import React, { useCallback, useState } from 'react';


const Stack = () => {
  const [category, setCategory] = useState('')

  const onSetCategory = useCallback((e)=>{
    setCategory(e.target.value)
  },[])

  const onSetClick = useCallback((e)=>{
    e.preventDefault()
    console.log(category)
    fetch("http://localhost:8000/categories",{
      method: "POST",
      headers: {
        "Content-Type":"application/json; charset=utf-8"
    },
      body: JSON.stringify(category)
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
    })
  },[category])

  return (
    <div>
      <form onClick={onSetClick}>
        <input type="text" onChange={onSetCategory} name="category"></input>
        <button >확인</button>
      </form>
    </div>
  );
};

export default Stack;