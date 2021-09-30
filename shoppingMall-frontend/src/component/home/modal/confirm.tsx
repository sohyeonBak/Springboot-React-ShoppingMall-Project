import React, { useCallback } from 'react';

const Confirm = () => {

  const onConfirm = useCallback((e:any)=>{

  },[])
  
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