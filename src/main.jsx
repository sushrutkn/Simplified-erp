import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Orders from './routes/orders/Orders.jsx'
import Dashboard from './routes/dashboard/Dashboard.jsx'
import Products from './routes/products/Products.jsx'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: 'orders',
        element: <Orders />
      }, {
        path: 'products',
        element: <Products />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
