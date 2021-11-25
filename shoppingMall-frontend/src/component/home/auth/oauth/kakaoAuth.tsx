import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../../../reducers';
import { kakaoLogInRequestAction } from '../../../../reducers/user';

const KakaoAuth = () => {
  const code = new URL(window.location.href).searchParams.get("code")
  const dispatch = useDispatch();
  
  const { done } = useSelector((state:RootState)=> state.user.login)
  const history = useHistory();

  useEffect(() => {
    dispatch(kakaoLogInRequestAction(code))
    if(done){
      history.push('/')
    }
  },[done,code,history,dispatch])

  
    
  return (
    <div>
      로딩중 ..
    </div>
  );
};

export default KakaoAuth;