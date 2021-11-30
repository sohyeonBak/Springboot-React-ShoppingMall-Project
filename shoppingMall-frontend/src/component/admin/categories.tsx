import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { ADD_CATEGORY_REQUEST, categoryRequestAction } from '../../reducers/products';


const Categories = () => {
  const selectList = ['상의', '하의', '악세사리'];
  const [category, setCategory] = useState('')
  const [selected, setSelected] = useState('상의');
  const [detailedCategory, setDetailedCategory] = useState('');

  const { mainCategory } = useSelector((state:RootState) => state.product)
  const dispatch = useDispatch();

  const handleSelect = useCallback((e)=>{
    setSelected(e.target.value)
  },[])

  const onCategory = (e:any) => {
    setCategory(e.target.value)
  }

  const onDetailedCategory =(e:any) => {
    setDetailedCategory(e.target.value)
  }

  const onAddCategory = useCallback(()=>{
    dispatch(categoryRequestAction(category))
  },[category])

  const onAddDetailedCategory = useCallback(()=>{

  },[])

  return (
    <div className="category-zone">
      <div className="category-edit">
        <ul className="category-input">
          <li>카테고리 등록</li>
          <li><input type="text" value={category} onChange={onCategory}></input></li>
          <li><button onClick={onAddCategory}>추가</button></li>
        </ul>
        <ul className="detailed-input">
          <li>상세 카테고리 등록</li>
          <li>
            <select onChange={handleSelect} value={selected}>
              {selectList.map((item)=>(
                <option value={item} key={item}>{item}</option>
              ))}
            </select>
          </li>
          <li><input type="text" value={detailedCategory} onChange={onDetailedCategory}></input></li>
          <li><button onClick={onAddDetailedCategory}>추가</button></li>
        </ul>
      </div>
      <div className="category-confrim">
        
      </div>
    </div>
  );
};

export default Categories;