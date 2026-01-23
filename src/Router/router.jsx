import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Categories from "../components/Categories";
import CategoryCard from "../components/CategoryCard";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PetSupply from "../Pages/PetSupply/PetSupply";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                index : true,
                element : <Home></Home>,
                loader : ()=> fetch("http://localhost:3000/latest-products")
            
            },

            {
                path : '/categories/:category',
                element : <CategoryCard></CategoryCard>,
                loader : ({params})=>fetch(`http://localhost:3000/categories/${params.category}`)
            },
            {
                path : '/pets-supply',
                element : <PetSupply></PetSupply>,
                loader : ()=>fetch('http://localhost:3000/products')
                

            },

            {
                path : '/products/:id',
                element : <ProductDetails></ProductDetails>,
                loader : ({params})=>fetch(`http://localhost:3000/products/${params.id}`)
                
            },

            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            }
            
            
        ]
    },
    {
        path : '*',
        element : <p>Error</p>
    }
])