import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from './component/card'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>

   <App />
   <Card userName = "Hiiii" text = "helloooooooooooo"/>
   <Card userName = "Yiiii"/>
   
 </>
    

);

