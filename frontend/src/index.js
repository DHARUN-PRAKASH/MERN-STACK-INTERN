import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { App } from './App';
import { Views } from './view';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <React.StrictMode>
    {/* <App /> */}
    <Views/>
  </React.StrictMode>
);
