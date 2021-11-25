import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';


type ConfirmType = {
  funcConfrim : (value:boolean)=>void
}

const Confirm = ({funcConfrim}:ConfirmType) => {
  const history = useHistory()
  const onConfirm = useCallback((e:any)=>{
    funcConfrim(false)
    history.push('/')
  },[history, funcConfrim])
  
  return(
    <div className="confirm">
      <div className="confirm-madal">
        <p>회원가입이 완료됐습니다.</p>
        <button onClick={onConfirm}>확인</button>
        
      </div>
    </div>
  )
}

export default Confirm;