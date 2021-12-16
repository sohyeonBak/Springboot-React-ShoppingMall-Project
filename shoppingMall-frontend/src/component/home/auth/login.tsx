import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RootState } from '../../../reducers';
import { logInRequestAction } from '../../../reducers/user';
import '../../../style/scss/auth.scss'
import LoginAlret from '../modal/loginalret';

type LogInState = {
  username: string,
  password: string
}

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failedlogin, setFailedLogin] = useState(false);
  const { done } = useSelector((state:RootState)=> state.user.login);
  const { error } = useSelector((state:RootState) => state.user.login);
  
  const history = useHistory();
  useEffect(()=>{
    if(done){
      history.push('/')
    }
  },[done, history])

  const onUsername = (e: any) => {
    setUsername(e.target.value)
  }

  const onPassword = (e: any) => {
    setPassword(e.target.value)
  }


  const dispatch = useDispatch()
  const onAddLogIN = useCallback((e: any) => {
    e.preventDefault();
    console.log(error);
    if(error !== null){
      setFailedLogin(true);
      setUsername('');
      setPassword('');
    }
    const login: LogInState={username,password}
    dispatch(logInRequestAction(login))
  },[username,password,dispatch])

  const kakaoOauth = `https://kauth.kakao.com/oauth/authorize?client_id=9f2407a32eb59fd6f8274ae8c537b676&redirect_uri=http://localhost:3000/login/oauth2/code/kakao&response_type=code`
  
  return(
    <div className="auth">
      <div className="auth-section">
        <div className="auth-list">
          <ul className="auth-list-contents">
            <li>로그인</li>
          </ul>
        </div>
        
        <div className="auth-contents">
        <form className="auth-feilds" >
          <input type="text" placeholder="아이디" value={username} onChange={onUsername} name='username' ></input>
          <br />
          <input type="password" placeholder="비밀번호" value={password} onChange={onPassword} name='password' ></input>
          <br />
          <button onClick={onAddLogIN}>확인</button>
          <br />
          <Link to={'/loginForm/join'}>
            회원가입 하기
          </Link>
        </form>
      </div>
      <div className="auth-api">
        <ul className="api-list">
          <li>구글</li>  
          <li><img src="" alt="" />페이스북</li>
          <li><a href={kakaoOauth}>카카오</a></li>
          <li><img src="" alt="" />네이버</li>
        </ul>
      </div>
      {failedlogin ? <LoginAlret setFailedLogin={setFailedLogin} /> : '' }
      </div>
    </div>
  )
}

export default LogIn;