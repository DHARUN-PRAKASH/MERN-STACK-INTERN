import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Form } from './Form';
import { Views } from './view';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Dash } from './dash';
import { Update } from './Update';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <React.StrictMode>
    {/* <App />
    <Views/> */}
    <BrowserRouter>
    <Dash/>
    <Routes>
      <Route exact path='/' Component={()=><Views/>}/>  
      <Route exact path='/form' Component={()=><Form/>}/>
      <Route exact path='/:id' Component={()=><Update/>}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
