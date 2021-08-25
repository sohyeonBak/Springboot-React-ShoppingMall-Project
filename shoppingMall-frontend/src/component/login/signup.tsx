import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpAsync } from '../../reducers/user';

type userInfo ={
  email: string,
  username: string,
  password: string,
}

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

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

  },[email, username, password])


  return(
    <div className="sign-contents">
      <form className="sign-feilds" >
        <input type="text" placeholder="이메일" value={email} onChange={onEmail}></input>
        <br />
        <input type="text" placeholder="아이디" value={username} onChange={onUserName}></input>
        <br />
        <input type="text" placeholder="비밀번호" value={password} onChange={onPassword}></input>
        <br />
        {/* <input type="text" placeholder="비밀번호 확인"></input>
        <br /> */}
        <button onClick={onSignUp}>확인</button>
        <br />
      </form>
    </div>
  )
}

export default Signup;

