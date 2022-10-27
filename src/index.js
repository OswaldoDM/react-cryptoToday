import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BrowserRouter, HashRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <HashRouter>
        <App />
    </HashRouter>
  
);


