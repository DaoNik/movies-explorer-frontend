import React from 'react';
import ReactDOM from 'react-dom';
import './vendor/normalize.css';
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('.root')
);
