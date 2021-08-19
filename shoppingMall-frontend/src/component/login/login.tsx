import React from 'react';

const Login = () => {
  return (
    <>
      <div className="auth-contents">
        <form className="auth-feilds">
          <input type="text" placeholder="아이디"></input>
          <br />
          <input type="text" placeholder="비밀번호"></input>
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