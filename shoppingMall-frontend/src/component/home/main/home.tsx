import '../../../style/scss/home.scss'

const Home = () => {
  return(
    <>
    <div className="home">
      <div className="home-contents">
        <div className="main-clothes">
          <ul className="main-clothes-list">
            <li>
              <img src={`https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80`} alt="" />
                <ul className="main-clothes-info">
                  <li>상품이름 1</li>
                  <li>164,000</li>
                </ul>
              </li>
            <li>
              <img src={`https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=349&q=80`} alt="" />
              <ul className="main-clothes-info">
                <li>상품이름 2</li>
                <li>82,000</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="sub-clothes">
          <ul className="sub-clothes-title">
            <li>New Arrivals</li>
            <li>Best Choice Items</li>
            <li>Today's Pick</li>
          </ul>
          <ul className="sub-clothes-list">
            <li>
              <img src={`https://images.unsplash.com/photo-1499971856191-1a420a42b498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=329&q=80`} alt="" />
              <ul className="sub-clothes-info">
                <li>상품이름 1</li>
                <li>164,000</li>
              </ul>
            </li>
            <li>
              <img src={`https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80`} alt="" />
              <ul className="sub-clothes-info">
                <li>상품이름 1</li>
                <li>164,000</li>
              </ul>
            </li>
            <li>
              <img src={`https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80`} alt="" />
              <ul className="sub-clothes-info">
                <li>상품이름 1</li>
                <li>164,000</li>
              </ul>
            </li>
            <li>
              <img src={`https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=338&q=80`} alt="" />
              <ul className="sub-clothes-info">
                <li>상품이름 1</li>
                <li>164,000</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>  
)
}

export default Home;