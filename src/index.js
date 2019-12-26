import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Root} from "./pages/Root";
import {ToastProvider} from 'react-toast-notifications';

console.log('process.env: ', process.env, process.env.REACT_APP_IMAGE_HOST);

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider placement="top-center">
      <Root />
    </ToastProvider>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
