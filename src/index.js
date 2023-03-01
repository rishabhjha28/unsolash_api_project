import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModeState from './context/mode/ModeState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModeState>
      <App />
    </ModeState>
  </React.StrictMode>
);
