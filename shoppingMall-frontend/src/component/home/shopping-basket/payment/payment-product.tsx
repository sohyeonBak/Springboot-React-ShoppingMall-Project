import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers';
import PaymentProductContent from './payment-product-content';
import '../../../../style/scss/basketpayment.scss';
import { useCallback, useState } from 'react';

const PaymentProduct = () => {
  const [userInfo, setUserInfo] = useState(false);
  const [name, setName] = useState('김영은');
  const [phone, setPhone] = useState(1029993444);
  const [email, setEmail] = useState('yeong123@gmail.com');
  const [editAddress, setEditAddress] = useState(false);
  const [addresslist, setAddressList] = useState('active');
  const [editAddressList, setEditAddressList] = useState('')
  const [kakaopay, setKakaopay] = useState('active')
  

  const {userCart} = useSelector((state:RootState) => state.product);

  const editUserInfo = useCallback((e)=>{
    setUserInfo((prev)=>!prev)
  },[])

  const onEditName = (e:any) => {
    setName(e.target.value);
  }

  const onEditPhone = (e:any) => {
    setPhone(e.target.value);
  }
  
  const onEditEmail = (e:any) => {
    setEmail(e.target.value);
  }


  const onAddress = useCallback((e)=>{
    setEditAddress(false);
    setEditAddressList('');
    setAddressList('active')
  },[]);

  const onEditAddress = useCallback((e)=>{
    setEditAddress(true);
    setEditAddressList('active');
    setAddressList('')
  },[])

  const onPayProduct = useCallback((e)=>{
    
  },[])
  
  return(
    <section className="payment-zone">
      <div className="payment-products">
        <h2>최종 주문 확인</h2>
        {userCart.map((cart)=>
          <PaymentProductContent key={cart.id} cart={cart}/>
        )}
      </div>
      <div className="payment-product-info">
        <h2>주문서</h2>
        <div className="payment-product-info--zone">
          <div className="paymentuser-info">
            <div className="paymentuser-info--title">
              <h3>1. 주문 고객 정보</h3>
              <p onClick={editUserInfo}>수정</p>
            </div>
            {userInfo 
            ? (
              <div className="paymentuser-info--edit">
                <p>이름</p>
                <input type="text" onChange={onEditName} value={name}></input>
                <br />
                <p>전화번호</p>
                <input type="text" onChange={onEditPhone} value={phone}></input>
                <br />
                <p>이메일</p>
                <input type="text" onChange={onEditEmail} value={email}></input>
              </div>
            )
            : ''}
            <div className="paymentuser-info--content">
              <ul>
                <li>{name}</li>
                <li>0{phone}</li>
                <li>{email}</li>
                <li><b>총 결제 금액 : {userCart.reduce((a,b)=>a+b.price , 0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</b></li>
              </ul>
              <p></p>
            </div>
          </div>
          <div className="delivery-info">
            <h3>2. 배송지 정보</h3>
            <ul className="delivery-info--menu">
              <li className={addresslist} onClick={onAddress}>배송지 목록</li>
              <li className={editAddressList} onClick={onEditAddress}>새로 입력</li>
            </ul>
            <div className="delivery-info--content">
              {editAddress
              ? (
                <div>
                  <p>이름</p>
                  <input type="text"></input>
                  <br />
                  <p>주소 </p>
                  <input type="text"></input>
                  <button>확인</button>
                </div>
              )
              :(
                <ul>
                  <li>김영은 [기본 배송지]</li>
                  <li>010-2999-3444</li>
                  <li>대구광역시 중구 서성로 21</li>
                </ul>
              )}
            </div>
            <p>배송시 요청사항</p>
            <input type="text" ></input>
          </div>   
          <div className="payment-info">
            <h3>3. 결제</h3>
            <ul>
              <li>카드 결제</li>
              <li>현금 결제</li>
              <li>휴대폰 결제</li>
              <li className={kakaopay}>카카오 페이</li>
            </ul>
            <div className="payment-info--content">
              <h4>총 결제 금액 {userCart.reduce((a,b)=>a+b.price,0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</h4>
              <p>주문 변경 시 카드사 혜택 및 할부 적용 여부는 해당 카드사 정책에 따라 변경될 수 있습니다.
      네이버페이는 네이버ID로 별도 앱 설치 없이 신용카드 또는 은행계좌 정보를 등록하여 네이버페이 비밀번호로 결제할 수 있는 간편결제 서비스입니다.
      결제 가능한 신용카드: 신한, 삼성, 현대, BC, 국민, 하나, 롯데, NH농협, 씨티, 카카오뱅크
      결제 가능한 은행: NH농협, 국민, 신한, 우리, 기업, SC제일, 부산, 경남, 수협, 우체국, 미래에셋대우, 광주, 대구, 전북, 새마을금고, 제주은행, 신협, 하나은행, 케이뱅크, 카카오뱅크, 삼성증권, KDB산업은행,씨티은행, SBI은행, 유안타증권, 유진투자증권
      네이버페이 카드 간편결제는 네이버페이에서 제공하는 카드사 별 무이자, 청구할인 혜택을 받을 수 있습니다.</p>
              <div className="payment-info--content--confirm">
                <input type="checkbox"></input>
                <em>주문하실 상품의 상품평, 가격, 배송정보를 확인하였으며, 이에 동의합니다.</em>
              </div>
            </div>
          </div>
          <div className="payment-confirm">
            <button onClick={onPayProduct}>결제하기</button>
          </div>
        </div>
      </div>
    </section>  
  );}

export default PaymentProduct;