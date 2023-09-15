import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


// 1 - configurando router

import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);