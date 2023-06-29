import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Layout
import '../assets/admin/css/adminlte.min.css';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Sidebar from '../layouts/Sidebar';

//Pages
import Home from '../pages/Home/Home';
import User from '../pages/User/User';
import Login from '../pages/Auth/Login';
import NotFoundPage from '../pages/Orther/NotFoundPage';
import Category from '../pages/Category/Category';
import Product from '../components/Products/Product';
import Post from '../pages/Post/Post';
import PostWatch from '../pages/Post/PostWatch';
import PostAction from '../pages/Post/PostAction';
import DashBoard from '../pages/Dashboard/DashBoard';
import TopicAction from '../pages/Topic/TopicAction';
import { TopicsProvider } from '../contexts/contexts/topicsContext';
import { PostsProvider } from '../contexts/contexts/postsContext';
import Topic from '../pages/Topic/Topic';
const AdminRouter = () => {

    return (
        <Routes>
                <Route path="login" element={<Login />} />
                <Route path="*" element={
                    <div className='wrapper position-relative'>
                        <Header/>
                        <Sidebar/>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="dashboard" element={<DashBoard />} />
                            {/* <Route path="users" element={<User />} />
                            <Route path="categories" element={<Category/>} />
                            <Route path='products' element={<Product/>} /> */}
                            <Route path='topics/*' element={
                                <TopicsProvider>
                                    <Routes>
                                        <Route index element={<Topic />} />
                                        <Route path="add" element={<TopicAction/>} />
                                        <Route path=':id' element={<PostWatch />} />
                                        <Route path='edit/:id' element={<PostAction />} />
                                    </Routes>
                                </TopicsProvider>
                            }/>
                            
                            <Route path='posts/*' element={
                                <PostsProvider>
                                    <Routes>
                                        <Route index element={<Post />} />
                                        <Route path='add' element={<PostAction />} />
                                        <Route path=':id' element={<PostWatch />} />
                                        <Route path='edit/:id' element={<PostAction />} />
                                    </Routes>
                                </PostsProvider>
                            }/>
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                        <Footer/>
                    </div>
                } />
        </Routes>
    );
};

export default AdminRouter;
