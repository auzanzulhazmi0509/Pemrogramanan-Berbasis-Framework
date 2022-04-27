import React from 'react';
import cart_logo from './images/cart_logo.png';
import './App.css';
import './css/style.css'
import { useTable } from 'react-table'
import ItemPost from './ItemPost/ItemPost'
import AboutStateless from './statelessComponent/AboutStateless'
import ItemCart from './ItemCart/ItemCart';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function uts_cart() {
  return (
    <Router>

              <div className="wrapper">
                  
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">BroZan Cell</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="collapse navbar-collapse" id="navbarSupportedContent">
                  <a class="nav-link" href="/list_item">List Product</a>
                </li>
                <li class="collapse navbar-collapse" id="navbarSupportedContent">
                  <a class="nav-link" href="/cart_item">Cart</a>
                </li>
                <li class="collapse navbar-collapse" id="navbarSupportedContent">
                  <a class="nav-link" href="/about">About</a>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto" >
              <span class="collapse navbar-collapse" id="navbarSupportedContent">
                Website Jual Beli SmartPhone
              </span>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/list_item">
          <ListItem />
        </Route>
        <Route exact path="/cart_item">
          <CartItem />
        </Route>
        <Route exact path="/about">
          <AboutStateless />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <center>
          <br />
          <h4><p><strong>Welcome to BroZan Cell</strong></p></h4>
          <p><em>Kami percaya bahwa BroZan Cell dapat meningkatkan standar hidup masyarakat Kelas Menengah dengan harga yang sangat terjangkau.</em></p>
          <img src="https://artikel.pricearea.com/wp-content/uploads/2017/02/bannerhp2.jpg"></img>
          <p><em><b>Langsuuungg Sikaaaattt Luuurrrr!!!</b></em></p>
        </center> 
        
  )
  
}
function ListItem() {
  return (
    <ItemPost />
  )
}

function CartItem() {
  return (
    <ItemCart />
  )
}
