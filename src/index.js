import React from 'react';
import ReactDOM from 'react-dom';
import { ProductsProvider } from './contexts/ProductsContext';
import './index.css';
import Home from './pages/Home';


ReactDOM.render(
  <ProductsProvider>
    <Home />  
  </ProductsProvider>,
  document.getElementById('root')
);

