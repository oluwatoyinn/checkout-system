import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import Testing from './components/ProductTesting/Testing'
import Product from './components/Product';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        {/* <Testing /> */}
        <Product />
      </Provider>
    </React.Fragment>
  );
}

export default App;
