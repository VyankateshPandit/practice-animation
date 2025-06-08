import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import BottomNav from './components/BottomNav';
import Nav from './components/Nav';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BottomNav />
  </React.StrictMode>
);
