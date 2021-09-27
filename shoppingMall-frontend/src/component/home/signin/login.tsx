import { useEffect } from 'react';
import { useState,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../../reducers';
import { kakaoLogInRequestAction, logInRequestAction } from '../../../reducers/user';

type LogInState = {
  username: string,
  password: string
}

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { done } = useSelector((state:RootState)=> state.user.login)
  const history = useHistory()
  useEffect(()=>{
    if(done){
      history.push('/')
    }
  },[done])

  const onUsername = (e: any) => {
    setUsername(e.target.value)
  }

  const onPassword = (e: any) => {
    setPassword(e.target.value)
  }


  const dispatch = useDispatch()
  const onAddLogIN = useCallback((e: any) => {
    e.preventDefault();
    const login: LogInState={username,password}
    dispatch(logInRequestAction(login))
  },[username,password])


  const kakaoOauth = `https://kauth.kakao.com/oauth/authorize?client_id=9f2407a32eb59fd6f8274ae8c537b676&redirect_uri=http://localhost:3000/login/oauth2/code/kakao&response_type=code`

  return (
    <>
      <div className="auth-contents">
        <form className="auth-feilds" >
          <input type="text" placeholder="아이디" value={username} onChange={onUsername} name='username' ></input>
          <br />
          <input type="password" placeholder="비밀번호" value={password} onChange={onPassword} name='password' ></input>
          <br />
          <button onClick={onAddLogIN}>확인</button>
          <br />
          <a>아이디/비밀번호 찾기</a>
        </form>
      </div>
      <div className="auth-api">
        <ul className="api-list">
          <li>구글</li>  
          <li><img src="" alt="" />페이스북</li>
          <li><a href={kakaoOauth} >카카오</a></li>
          <li><img src="" alt="" />네이버</li>
        </ul>
      </div>
    </>
  );
};

export default Login;