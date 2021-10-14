<<<<<<< HEAD
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/cart/cart.provider';
=======
import { persistor, store } from './redux/store';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/cart/cart.provider';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
>>>>>>> 13fbd2650ae46d57662ea5dc4d171a4630fbe704
import ReactDOM from 'react-dom';

ReactDOM.render(
  <CartProvider>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
>>>>>>> 13fbd2650ae46d57662ea5dc4d171a4630fbe704
  </CartProvider>,
  document.querySelector('#root'),
);
