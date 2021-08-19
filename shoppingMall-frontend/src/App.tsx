import {BrowserRouter, Switch, Route} from "react-router-dom"
import Admin from "./component/admin/admin";
import Header from "./component/header/header"
import Home from "./component/home/home"
import Login from "./component/login/login";
import MyInfo from "./component/mypage/myinfo";
import ShoppingBasket from "./component/shopping-basket/shopping-basket";
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
        <Route path='/login' >
          <Login />
        </Route>
        <Route path='/myshop' >
          <ShoppingBasket />
        </Route>
        <Route path='/mypage' >
          <MyInfo />
        </Route>
        <Route path='/categories' >
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
