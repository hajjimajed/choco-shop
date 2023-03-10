import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { store, persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react';

import { ChocolatesProvider } from './contexts/chocolates.context';
import { CandyProvider } from './contexts/candys.context';
import { GiftProvider } from './contexts/gifts.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <CandyProvider>
            <ChocolatesProvider>
              <GiftProvider>
                <Elements stripe={stripePromise}>
                  <App />
                </Elements>
              </GiftProvider>
            </ChocolatesProvider>
          </CandyProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
