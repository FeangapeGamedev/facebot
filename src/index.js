import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from "./containers/App.js";
import AppHooks from './containers/AppHooks.js';
import 'tachyons';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppHooks/>
  </React.StrictMode>
); 