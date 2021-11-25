import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpAsync } from '../../../reducers/user';
import Confirm from '../modal/confirm';
import '../../../style/scss/auth.scss'

type userInfo ={
  email: string,
  username: string,
  password: string,
}

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [checkedPassword, setCheckedPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [confirm, setConfrim]= useState(false);

  const onEmail = useCallback((e:any) => {
    setEmail(e.target.value)
  },[])

  const onUserName = useCallback((e:any) => {
    setUserName(e.target.value)
  },[])

  const onPassword = useCallback((e:any) => {
    setPassword(e.target.value)
  },[])

  const onCheckedPassword = useCallback((e:any)=>{
    setCheckedPassword(e.target.value);
    setErrorPassword(e.target.value!==password)
  },[password])


  const dispatch = useDispatch();
  const onSignUp = useCallback((e:any) => {
    e.preventDefault();
    if(email==='' || username===''){
      return window.alert('입력이 잘못됐습니다.')
    }
    const userInfo: userInfo = {email, username, password}
    dispatch(signUpAsync.request(userInfo))
    setConfrim(true)
    setEmail('')
    setUserName('')
    setPassword('')
    setCheckedPassword('');
  },[email, username, password, dispatch])

  return(
    <div className="auth">
      <div className="auth-section">
        <div className="auth-list">
          <ul className="auth-list-contents">
            <li>회원가입</li>
          </ul>
        </div>
        <div className="sign-contents">
          <div className="sign-zone">
          <form className="sign-feilds" >
            <input type="email" placeholder="이메일" value={email} onChange={onEmail}></input>
            <br />
            <input type="text" placeholder="아이디" value={username} onChange={onUserName}></input>
            <br />
            <input type="password" placeholder="비밀번호" value={password} onChange={onPassword}></input>
            <br />
            <input type="password" value={checkedPassword} placeholder="비밀번호 확인" onChange={onCheckedPassword}></input>
            {errorPassword&&<p>비밀번호가 일치하지 않습니다.</p>}
            <br />
            <button onClick={onSignUp}>확인</button>
            <br />
          </form>
          </div>
        </div>
        { confirm ? <Confirm funcConfrim={setConfrim} /> :'' }
    </div>
    </div>
  )
}

export default Signup;

