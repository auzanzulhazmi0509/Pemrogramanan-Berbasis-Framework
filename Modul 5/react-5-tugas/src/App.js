import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mix from './mix.jpg';
import nut from './green tea nut.jpg';
import almond  from './green tea almond.jpg';
import oreo from './oreo.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  Redirect,
  useLocation
} from "react-router-dom";

export default function AuthExample() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/about">PieCang</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/order">Order</Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <AuthButton />
          </ul>
        </div>
      </nav>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <OrderRoute path="/order">
            <OrderPage />
          </OrderRoute>
        </Switch>
        <footer class="page-footer font-small blue">
          <div class="footer-copyright text-center py-3">© 2022 Auzan : PieCang</div>
        </footer>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return fakeAuth.isAuthenticated ? (
    <button class="btn btn-danger" onClick={() => {
      fakeAuth.signout(() => history.push("/"));
    }}>
      Sign out
    </button>
  ) : (
      <button className="btn btn-primary" onClick={login}>Log in</button>
    );
}

function OrderRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function AboutPage() {
  return (
    <h3>Instagram : @PieCang</h3>
  );
}

function OrderPage() {
  return (
    <Router>
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/pisang">Banana Nugget</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/pisang">
            <Banana />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div>
      <p>You must log in first</p>
      <button className="btn btn-primary" onClick={login}>Log in</button>
    </div>
  );
}

function Banana() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Banana Nugget</h2>
      <div className="container">
        <div className="row">
          <Link class="col-sm column productbox" to={`${url}/Banana Nugget Mix  IDR 17.000`}>
            <img src={mix} alt="" className="productimg" />
            <div class="producttitle">Banana Nugget Mix</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/Banana Nugget Topping Green Tea With Nut IDR 15.000`}>
            <img src={nut} alt="" className="productimg" />
            <div class="producttitle">Banana Nugget Topping Green Tea With Nut</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/Banana Nugget Topping Green Tea With Almond IDR 20.000`}>
            <img src={almond} alt="" className="productimg" />
            <div class="producttitle">Banana Nugget Topping Green Tea With Almond</div>
          </Link>
          <Link class="col-sm column productbox" to={`${url}/Banana Nugget Topping Oreo IDR 13.000`}>
            <img src={oreo} alt="" className="productimg" />
            <div class="producttitle">Banana Nugget Topping Oreo</div>
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h4>Detail dan Harga</h4>
        </Route>
        <Route path={`${path}/:productId`}>
          <Bananas />
        </Route>
      </Switch>
    </div>
  );
}

function Bananas() {
  let { productId } = useParams();
  return (
    <div>
      <h3>{productId}</h3>
    </div>
  );
}