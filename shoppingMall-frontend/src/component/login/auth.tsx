import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import '../../style/scss/auth.scss'
import Login from './login';
import Signup from './signup';

const Auth = () => {
  const [ auth, setAuth ]= useState(true);
  const onLogin = useCallback(()=>{
    setAuth(true)
  },[])
  const onSignup = useCallback(()=>{
    setAuth(false)
  },[])
  return(
    <div className="auth">
      <div className="auth-section">
        <div className="auth-list">
          <ul className="auth-list-contents">
            <li onClick={onLogin}>로그인</li>
            <li onClick={onSignup}>회원가입</li>
          </ul>
        </div>
        {auth
          ?<Login />
          :<Signup />
        }
      </div>
    </div>
  )
}

export default Auth;