import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./component/home/header/header"
import Home from "./component/home/main/home"
import Admin from "./component/admin/admin";
import ProductsList from "./component/home/products-list/products-list";
import Auth from "./component/home/auth/auth";
import Product from "./component/home/product/product";
import Footer from "./component/footer/footer";
import ShoppingBasket from "./component/home/shopping-basket/shopping-basket";
import MyPage from "./component/home/mypage/mypage";
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
          <Auth />
        </Route>
        <Route path='/productlist'>
          <ProductsList />
        </Route>
        <Route path='/product' >
          <Product />
        </Route>
        <Route path='/mybasket' >
          <ShoppingBasket />
        </Route>
        <Route path='/mypage' >
          <MyPage />
        </Route>
        <Route path='/admin' >
          <Admin />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
