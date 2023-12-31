import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import NotFoundPage from "./pages/Other/NotFoundPage";
import Register from "./pages/Auth/Register";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Posts/Post";
import Products from "./pages/Products/Products";
import ForgotPassword from "./pages/Auth/ForgotPassword";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>}/>
                <Route path="forgot-password" element={<ForgotPassword/>}/>
                <Route path="*" element={
                    <div>
                        <Header/>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="/posts" element={<Posts />} />
                            <Route path="/posts/:id" element={<Post/>} />
                            <Route path="/products" element={<Products/>} />
                            <Route path="/contact" element={<Contact/>} />
                            <Route path="/profile" element={<Profile/>} />
                            <Route path="/*" element={<NotFoundPage />} />
                        </Routes>
                        <Footer/>
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
