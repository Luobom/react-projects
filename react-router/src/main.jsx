import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


// 1 - configurando router
import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import ErrorPage from './routes/ErrorPage';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import { ContactDetails } from './routes/ContactDetails';

/*
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
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 - pagina de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 5 - Nested routes (identificador único) - dynamic routes
      {
        path: "/contact/:id",
        element: <ContactDetails/>,
      },
      // 7 - navigate para páginas não existentes
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);