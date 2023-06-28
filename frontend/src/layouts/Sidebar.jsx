import React, { useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/contexts/authContext';
const Sidebar = () => {
    const { isLoggedIn, logout, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const onLogout = () => {
        logout();
    }
    const tabChange = () => {
        // changeTab();
    }
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn]);
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4 h-100">
            {/* Brand Logo */}
            <Link to={''} className="brand-link">
            <img
                src="/assets/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex flex-column">
                <div className="image d-flex justify-content-center px-3">
                    <img
                        src={`${process.env.REACT_APP_IMG_URL}/admins/${user.avatar}`}
                        className="img-circle elevation-2"
                        style={{width:"5rem", height:"5rem"}}
                        alt="User Image"
                    />
                </div>
                <div className="info">
                <a href="#" className="d-block text-center">
                    {user.firstName + ' ' + user.lastName}
                </a>
                </div>
            </div>
            {/* SidebarSearch Form */}
            <div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                <input
                    className="form-control form-control-sidebar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <div className="input-group-append">
                    <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                    </button>
                </div>
                </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
                <ul
                    className="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                >
                    <li className="nav-item">
                        <NavLink to={''} className="nav-link"> 
                            <i className="nav-icon fas fa-chart-line" />
                            <p>
                                Dashboard
                            </p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <Link href="#" className="nav-link">
                            <i className="nav-icon fa-solid fa-earth-americas"></i>
                            <p>
                                Topics
                                <i className="right fas fa-angle-left" />
                            </p>
                        </Link>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link to={'topics/add'} className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Add Topics</p>
                                </Link>
                                <Link to={'topics'} className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>List Topics</p>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link href="#" className="nav-link">
                            <i className="nav-icon fa-solid fa-book"></i>
                            <p>
                                Posts
                                <i className="right fas fa-angle-left" />
                            </p>
                        </Link>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link to={'posts/add'} className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Add Posts</p>
                                </Link>
                                <Link to={'posts'} className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>List Posts</p>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* <li className="nav-item">
                        <Link href="#" className="nav-link">
                            <i className="nav-icon fas fa-chart-pie" />
                            <p>
                                Users
                                <i className="right fas fa-angle-left" />
                            </p>
                        </Link>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <NavLink to={'users'} className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>List Users</p>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link href="#" className="nav-link">
                            <i className="nav-icon fas fa-chart-pie" />
                            <p>
                                Categories
                                <i className="right fas fa-angle-left" />
                            </p>
                        </Link>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link to={'categories'} className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>List Categories</p>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link href="#" className="nav-link">
                            <i className="nav-icon fas fa-chart-pie" />
                            <p>
                                Products
                                <i className="right fas fa-angle-left" />
                            </p>
                        </Link>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link to={'products'} className="nav-link" onClick={()=>{tabChange()}}>
                                    <i className="far fa-circle nav-icon" />
                                    <p>List Products</p>
                                </Link>
                            </li>
                        </ul>
                    </li> */}
                    
                    {/* <li className="nav-item">
                        <Link href="#" className="nav-link">
                            <i className="nav-icon fas fa-chart-pie" />
                            <p>
                                Products
                                <i className="right fas fa-angle-left" />
                            </p>
                        </Link>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link to={'products'} className="nav-link" onClick={()=>{tabChange()}}>
                                    <i className="far fa-circle nav-icon" />
                                    <p>List Products</p>
                                </Link>
                            </li>
                        </ul>
                    </li> */}
                    <li className="nav-item">
                        <button className="nav-link w-100 text-left" style={{color: '#c2c7d0'}} onClick={onLogout}>
                            <i className="nav-icon fa-solid fa-door-open"></i>
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
            </div>
        </aside>
    )
}   

export default Sidebar