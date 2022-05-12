import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from 'redux/store/store';

import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
