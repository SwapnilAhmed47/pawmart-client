import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Navbar></Navbar>
                <div className='mt-4'>
                    <Outlet></Outlet>
                </div>
                
            </div>
        </div>
    );
};

export default MainLayout;