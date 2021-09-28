import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./component/home/header/header"
import Home from "./component/home/home"
import SignIn from "./component/home/signin/signin";
import MyInfo from "./component/home/mypage/myinfo";
import ShoppingBasket from "./component/home/shopping-basket/shopping-basket";
import './style/scss/App.scss';
import KakaoAuth from "./component/home/signin/oauth/kakaoAuth";
import Signup from "./component/home/signin/signup";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/loginForm' >
          <SignIn />
        </Route>
        <Route path='/myshop' >
          <ShoppingBasket />
        </Route>
        <Route path='/mypage' >
          <MyInfo />
        </Route>
        <Route path='/login/oauth2/code/kakao' >
          <KakaoAuth />
        </Route>
        <Route path='/join'>
            <Signup />
          </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
