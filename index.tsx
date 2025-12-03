import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log('App initializing...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  // Retry logic or explicit error for better debugging on deployment environments
  console.error("Fatal Error: Could not find root element 'root' to mount React application.");
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);