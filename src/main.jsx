import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Clientes,{loader as loaderClientes} from './pages/Clientes'
import ClienteNuevo,{action as nuevoClienteAction} from './pages/ClienteNuevo'
import Layout from './components/Layout'
import Login from './components/Login'
import Register from './components/Register'
import EditarCliente,{loader as editarClienteLoader,action as editarClienteAction} from './pages/EditarCliente'
import ErrorPage from './components/ErrorPage'
import {action as eliminarClienteAction} from './components/Cliente'


const router = createBrowserRouter([
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/register',
        element: <Register/> 
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
                errorElement: <ErrorPage/>
            },
            {
                path: '/clientes',
                element: <Clientes/>,
                loader: loaderClientes,
                errorElement: <ErrorPage/>
            },
            {
                path: '/clientes/nuevo',
                element: <ClienteNuevo/>,
                action: nuevoClienteAction,
                errorElement: <ErrorPage/>
            },
            {
                path: '/clientes/:clienteId/editar', 
                element: <EditarCliente/>,
                loader: editarClienteLoader,
                action:editarClienteAction,
                errorElement: <ErrorPage/>
                
            },
            {
                path: '/clientes/:clienteId/eliminar',
                action: eliminarClienteAction

            }
        ]
        
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router}/>
  </StrictMode>,
)
