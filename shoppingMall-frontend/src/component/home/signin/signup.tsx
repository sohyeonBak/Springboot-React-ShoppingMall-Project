import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RootState } from '../../../reducers';
import { signUpAsync } from '../../../reducers/user';

type userInfo ={
  email: string,
  username: string,
  password: string,
}

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {done}= useSelector((state:RootState)=>state.user.signup)
  

  const onEmail = useCallback((e:any) => {
    setEmail(e.target.value)
  },[])

  const onUserName = useCallback((e:any) => {
    setUserName(e.target.value)
  },[])

  const onPassword = useCallback((e:any) => {
    setPassword(e.target.value)
  },[])


  const dispatch = useDispatch();
  const onSignUp = useCallback((e:any) => {
    e.preventDefault();
    const userInfo: userInfo = {email, username, password}
    dispatch(signUpAsync.request(userInfo))
    setEmail('')
    setUserName('')
    setPassword('')
  },[email, username, password])


  return(
    <div className="sign-contents">
      <div className="sign-zone">
      <form className="sign-feilds" >
        <input type="text" placeholder="이메일" value={email} onChange={onEmail}></input>
        <br />
        <input type="text" placeholder="아이디" value={username} onChange={onUserName}></input>
        <br />
        <input type="password" placeholder="비밀번호" value={password} onChange={onPassword}></input>
        <br />
        {/* <input type="password" value={checkPassword} placeholder="비밀번호 확인" onChange={onCheckPassword}></input>
        {passwordChecking&&<p>비밀번호가 일치하지 않습니다.</p>} */}
        <br />
        <button onClick={onSignUp}>확인</button>
        <br />
      </form>
      {done?<div className="sign-confirm">
        <p>회원가입이 완료됐습니다.</p>
      </div>:''}
      </div>
    </div>
  )
}

export default Signup;

