import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kakaoLogInRequestAction } from '../../../reducers/user';

const KakaoAuth = () => {
  // const code = new URL(window.location.href).searchParams.get("code")
  // const state = new URL(window.location.href).searchParams.get("state")
  // console.log(code)
  // let states = state?.substring(0,state.length-1)+'%3D'
  // console.log(states)
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   const key = {code, states}
  //   dispatch(kakaoLogInRequestAction())
  // },[])
  return (
    <div>
      로딩중 ..
    </div>
  );
};

export default KakaoAuth;