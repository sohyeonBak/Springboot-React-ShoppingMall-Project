import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./component/home/header/header"
import Home from "./component/home/main/home"
import LogIn from "./component/home/auth/login";
import MyInfo from "./component/home/mypage/myinfo";
import ShoppingBasket from "./component/home/shopping-basket/shopping-basket";
import './style/scss/App.scss';
import KakaoAuth from "./component/home/auth/oauth/kakaoAuth";
import Signup from "./component/home/auth/signup";
import Admin from "./component/admin/admin";

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
          <LogIn />
        </Route>
        <Route path='/login/oauth2/code/kakao' >
          <KakaoAuth />
        </Route>
        <Route path='/join'>
          <Signup />
        </Route>
        <Route path='/myshop' >
          <ShoppingBasket />
        </Route>
        <Route path='/mypage' >
          <MyInfo />
        </Route>
        <Route path='/admin' >
          <Admin />
        </Route>
        
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
