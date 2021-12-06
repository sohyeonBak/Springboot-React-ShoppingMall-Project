import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';
import { RootState } from '../../../reducers';
import { logOutRequestAction } from '../../../reducers/user';
import '../../../style/scss/header.scss'
import CategoryList from './category-list';
import SearchForm from './search-form';

const Header = () => {
  const [category, setCategory] = useState<boolean>(false)
  const [search, setSearch] = useState(false)
  const { done } = useSelector((state: RootState) => state.user.login)
  let user = localStorage.getItem('token')
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(()=>{
    if(done){
      history.push('/')
    }
  },[done,history])
  
  const onCategoryList = useCallback(() => {
    setCategory((prev) => !prev)
  }, [])

  const onSearch = useCallback((e) => {
    e.preventDefault()
    setSearch((prev) => !prev)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(logOutRequestAction())
    localStorage.removeItem('token')
  },[dispatch])

  return (
    <header>
      <div className="header">
        <div className="site-header">
          <ul className="header-sec-left">
            <li>
              <h1>
                <Link to={'/'}>Shopping</Link>
              </h1>
            </li>
            <li onClick={onCategoryList}>
              카테고리
            </li>
          </ul>
          <ul className="header-sec-right">
            {user !== null ? <li className="logout" onClick={onLogout}>로그아웃</li> 
            : <li>
              <Link to={'/loginForm'}>로그인</Link>
            </li>}
            <li onClick={onSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="2px" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </li>
            <li>
              <Link to={'/myshop'}><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" /></g></svg></Link>
            </li>
            {user !== null ? <li>
              <Link to={'/mypage'}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg></Link>
            </li> : ''}
          </ul>
        </div>
      </div>

      {category ? <CategoryList setCategory={setCategory} /> : ''}
      {search ? <SearchForm></SearchForm> : ''}


    </header>
  )
}

export default Header;