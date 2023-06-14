import React from 'react';
import { Routes, Route } from 'react-router-dom';

//CSS
import '../assets/admin/css/adminlte.min.css';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Sidebar from '../layouts/Sidebar';

import Home from '../pages/Home'
import User from '../pages/User';
import Login from '../pages/Login';
import NotFoundPage from '../pages/NotFoundPage';
import Category from '../pages/Category';
import Product from '../pages/Product';
import Post from '../pages/Post/Post';
import PostForm from '../pages/Post/PostForm';
const AdminRouter = () => {
    return (
        <div>
            <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={
                        <div>
                            <Header/>
                            <Sidebar/>
                            <Routes>
                                <Route index element={<Home />} />
                                <Route path="users" element={<User />} />
                                <Route path="categories" element={<Category/>} />
                                <Route path='products' element={<Product/>} />
                                <Route path='posts' element={<Post/>} />
                                <Route path='posts/add' element={<PostForm/>} />
                                <Route path='posts/edit/:slug' element={<PostForm/>} />
                                <Route path="*" element={<NotFoundPage />} />
                            </Routes>
                            <Footer/>
                        </div>
                    } />
            </Routes>
        </div>
    );
};

export default AdminRouter;
