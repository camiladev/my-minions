import React from 'react';
import ReactDOM from 'react-dom';
import { ProductsProvider } from './contexts/ProductsContext';
import './index.css';
import Home from './pages/Home';
import { Amplify } from 'aws-amplify';
import config from './config';


Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "produtosDB",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});



ReactDOM.render(
  <ProductsProvider>
    <Home />  
  </ProductsProvider>,
  document.getElementById('root')
);

