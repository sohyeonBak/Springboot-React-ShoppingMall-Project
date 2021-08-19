import {BrowserRouter, Switch, Route} from "react-router-dom"
import Admin from "./component/admin/admin";
import Header from "./component/header/header"
import Home from "./component/home/home"
import Auth from "./component/login/auth";
import MyInfo from "./component/mypage/myinfo";
import ProductsList from "./component/products-list/products-list";
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
        <Route path='/join' >
          <Auth />
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
        <Route path='/category' >
          <ProductsList />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
