import { useState,useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logInRequestAction } from '../../reducers/user';

type LogInState = {
  username: string,
  password: string
}

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
    console.log(login)
  },[username,password])

  return (
    <>
      <div className="auth-contents">
        <form className="auth-feilds" >
          <input type="text" placeholder="아이디" value={username} onChange={onUsername} name='username' ></input>
          <br />
          <input type="text" placeholder="비밀번호" value={password} onChange={onPassword} name='password' ></input>
          <br />
          <button onClick={onAddLogIN}>확인</button>
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