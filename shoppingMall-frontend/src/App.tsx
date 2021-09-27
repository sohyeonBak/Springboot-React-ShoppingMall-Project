import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./component/home/header/header"
import Home from "./component/home/home"
import SignIn from "./component/home/signin/signin";
import MyInfo from "./component/home/mypage/myinfo";
import ShoppingBasket from "./component/home/shopping-basket/shopping-basket";
import './style/scss/App.scss';

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
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
