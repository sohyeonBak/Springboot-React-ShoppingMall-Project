import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kakaoLogInRequestAction } from '../../../reducers/user';

const KakaoAuth = () => {
  const code = new URL(window.location.href).searchParams.get("code")
  const states = new URL(window.location.href).searchParams.get("state")
  console.log(code)
  let state = states?.substring(0,states.length-1)+'%3D'
  console.log(state)
  const dispatch = useDispatch()
  useEffect(()=>{
    const key = {code, state}
    dispatch(kakaoLogInRequestAction(key))
  },[])
  return (
    <div>
      로딩중 ..
    </div>
  );
};

export default KakaoAuth;