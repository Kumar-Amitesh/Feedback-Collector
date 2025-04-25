import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Form from './components/Form';
import Feedbacks from './components/Feedbacks';

// Router configuration
// This is where we define the routes for our application
// The main route is the root path ('/') which renders the Layout component
// The children routes are defined under the Layout component
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Form /> },
      { path: '/feedback', element: <Feedbacks /> },
    ]
  }
]);

// Main App component
// This component uses the RouterProvider to provide the router configuration to the application
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
