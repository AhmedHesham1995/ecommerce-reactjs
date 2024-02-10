
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  createBrowserRouter } from 'react-router-dom';
import AddProduct from './pages/addProduct'
import ProductList from './pages/productList/product';
import AppLayout from './component/Applayout/Applayout';
import { RouterProvider } from 'react-router-dom';


const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {index:true,element:<ProductList/>},
      {path:"add",element:<AddProduct/>},

    ]

  },
  {
    path:"*",
    // element:<NotFound/>
  }
])
function App() {
  
  return (
    <>
     <RouterProvider router={router}/>

    </>
  )
}

export default App
