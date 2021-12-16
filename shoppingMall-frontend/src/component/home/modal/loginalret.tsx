import React, { useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router';

type IFailedLogin = {
  setFailedLogin : (value:boolean)=>void
}

const LoginAlret = ({setFailedLogin} : IFailedLogin) => {
  const match = useRouteMatch();
  const history = useHistory();
  const onFailedLogin= useCallback(()=>{
    setFailedLogin(false);
    history.push('/loginForm');
  },[history, setFailedLogin])

  return(
    <div className="faliedlogin">
      <div className="faliedlogin-madal">
        <p>로그인에 실패하였습니다. <br />로그인 정보를 다시 확인하세요.</p>
        <button onClick={onFailedLogin}>확인</button>
      </div>
    </div>  
  )}

export default LoginAlret;