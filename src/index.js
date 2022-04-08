import ReactDOMClient from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css'

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

