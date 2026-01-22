import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Categories';
import CategoryCard from '../../components/CategoryCard';

const Home = () => {
    const products = useLoaderData()
    
    return (
        <div>
            This is Home
            <div>
                
            </div>
            <Categories></Categories>
            
        </div>
    );
};

export default Home;