import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure you have your Tailwind CSS setup here
import './App.css'; // Import App.css for Tailwind CSS
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogProvider>
        <App />
      </BlogProvider>
    </BrowserRouter>
  </React.StrictMode>
);