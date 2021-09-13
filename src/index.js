import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppStore from './AppStore';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppStore />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
