import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [login, setLogin]= useState({
    username:'',
    password:''
  })

  const onFindLogin = (e:any) => {
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    })
  }

  const onAddLog = (e:any) => {
    e.preventDefault();
    console.log(login)
    fetch("http://localhost:8000/login",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json; charset=utf-8",
      },
      body: JSON.stringify(login)
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
    <>
      <div className="auth-contents">
        <form className="auth-feilds" onSubmit={onAddLog}>
          <input type="text" placeholder="아이디" onChange={onFindLogin} name='username' ></input>
          <br />
          <input type="text" placeholder="비밀번호" onChange={onFindLogin} name='password' ></input>
          <br />
          <button>확인</button>
          <br />
          <a>아이디/비밀번호 찾기</a>
        </form>
      </div>
      <div className="auth-api">
        <ul className="api-list">
          <li><img src="" alt="" />구글</li>
          <li><img src="" alt="" />페이스북</li>
          <li><img src="" alt="" />카카오</li>
          <li><img src="" alt="" />네이버</li>
        </ul>
      </div>
    </>
  );
};

export default Login;