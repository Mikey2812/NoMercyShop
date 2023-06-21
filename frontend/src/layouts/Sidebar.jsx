import React, { useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/appContext';
const Sidebar = () => {
    const { user, token, logoutUser, changeTab } = useAppContext();
    const navigate = useNavigate();
    const onLogout = () => {
        logoutUser();
    }
    const tabChange = () => {
        changeTab();
    }
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);
    return (
        <div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
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
                            src="/assets/img/admin.jpg"
                            className="img-circle elevation-2"
                            style={{width:"5rem", height:"5rem"}}
                            alt="User Image"
                        />
                    </div>
                    <div className="info">
                    <a href="#" className="d-block text-center">
                        Admin
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
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                        <li className="nav-item">
                            <NavLink to={''} className="nav-link active" activeclassname="active"> 
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Dashboard
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink href="#" className="nav-link" activeclassname="active">
                                <i className="nav-icon fas fa-chart-pie" />
                                <p>
                                    Users
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to={'users'} className="nav-link" activeclassname="active">
                                        <i className="far fa-circle nav-icon" />
                                        <p>List Users</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink href="#" className="nav-link" activeclassname="active">
                                <i className="nav-icon fas fa-chart-pie" />
                                <p>
                                    Categories
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to={'categories'} className="nav-link" activeclassname="active">
                                        <i className="far fa-circle nav-icon" />
                                        <p>List Categories</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink href="#" className="nav-link" activeclassname="active">
                                <i className="nav-icon fas fa-chart-pie" />
                                <p>
                                    Products
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to={'products'} className="nav-link" activeclassname="active" onClick={()=>{tabChange()}}>
                                        <i className="far fa-circle nav-icon" />
                                        <p>List Products</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink href="#" className="nav-link" activeclassname="active">
                                <i className="nav-icon fas fa-chart-pie" />
                                <p>
                                    Posts
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to={'posts/add'} className="nav-link" activeclassname="active">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Add Posts</p>
                                    </NavLink>
                                    <NavLink to={'posts'} className="nav-link" activeclassname="active">
                                        <i className="far fa-circle nav-icon" />
                                        <p>List Posts</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink href="#" className="nav-link" activeclassname="active">
                                <i className="nav-icon fas fa-chart-pie" />
                                <p>
                                    Products
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to={'products'} className="nav-link" activeclassname="active" onClick={()=>{tabChange()}}>
                                        <i className="far fa-circle nav-icon" />
                                        <p>List Products</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>
    )
}   

export default Sidebar