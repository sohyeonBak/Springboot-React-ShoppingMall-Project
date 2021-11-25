import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import '../../style/scss/admin.scss'
import Categories from './categories';
import ProductManagement from './product-management';
import ProductStock from './product-stock';

const Admin = () => {
  const match = useRouteMatch();

  return (
    <div>
      <div className="admin-title">
        <div className="title">
          <h2>어드민</h2>
          <ul className="admin-list">
            <li >
              <Link to={`${match.url}`}>카테고리 등록</Link>
            </li>
            <li >
              <Link to={`${match.url}/stock`}>재고관리</Link>
            </li>
            <li >
              <Link to={`${match.url}/management`}>상품관리</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="contents">
        <div className="inner">
          <Switch>
            <Route path={`${match.path}`} exact>
              <Categories />
            </Route>
            <Route path={`${match.path}/stock`}>
              <ProductStock />
            </Route>
            <Route path={`${match.path}/management`}>
              <ProductManagement />
            </Route>  
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Admin;