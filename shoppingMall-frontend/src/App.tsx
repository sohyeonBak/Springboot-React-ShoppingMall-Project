import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./component/home/header/header"
import Home from "./component/home/main/home"
import MyInfo from "./component/home/mypage/myinfo";
import ShoppingBasket from "./component/home/shopping-basket/shopping-basket";
import './style/scss/App.scss';
import Admin from "./component/admin/admin";
import ProductsList from "./component/home/products-list/products-list";
import Auth from "./component/home/auth/auth";
import Product from "./component/home/product/product";

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
          <Auth />
        </Route>
        <Route path='/productlist'>
          <ProductsList />
        </Route>
        <Route path='/product' >
          <Product />
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
