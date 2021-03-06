import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './components/productListing';
import Header from './components/header';
import './App.css';
import ProductDetails from './components/productDetail';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductListing} />
          <Route path='/product/:productId' component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
