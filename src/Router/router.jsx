import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Categories from "../components/Categories";
import CategoryCard from "../components/CategoryCard";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                index : true,
                element : <Home></Home>,
                loader : ()=> fetch("http://localhost:3000/products")
            
            },

            {
                path : '/categories/:category',
                element : <CategoryCard></CategoryCard>,
                loader : ({params})=>fetch(`http://localhost:3000/products/${params.category}`)
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
    }
])