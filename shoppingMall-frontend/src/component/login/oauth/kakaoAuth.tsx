import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kakaoLogInRequestAction } from '../../../reducers/user';

const KakaoAuth = () => {
  // const code = new URL(window.location.href).searchParams.get("code")
  // const states = new URL(window.location.href).searchParams.get("state")
  // console.log(code)
  // let state = states?.substring(0,states.length-1)+'%3D'
  // console.log(state)
  // useEffect(()=>{
    //   const key = {code, state}
    //   dispatch(kakaoLogInRequestAction(key))
    // },[])

    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(kakaoLogInRequestAction())
    },[])
    
  return (
    <div>
      로딩중 ..
    </div>
  );
};

export default KakaoAuth;