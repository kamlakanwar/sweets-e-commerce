import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContextProvider from './Context/AppContext';

const root = createRoot(document.getElementById('root'));

root.render( 
<BrowserRouter>
  <AppContextProvider>
      <App />
      <ToastContainer />
    </AppContextProvider>
    </BrowserRouter>
);
