import React from 'react';

import ReactDOM from 'react-dom/client';

import App from "./App"

import IpContextProvider from './components/store/IpContextProvider';

import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IpContextProvider>
    <App />
  </IpContextProvider>

);
