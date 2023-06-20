import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const profile = () => {
        return (
            <li className="dropdown cart_dropdown">
                <img className='rounded-circle' 
                    style={{maxWidth:'60px', padding:'10px'}} 
                    src={ user?.avatar || '/assets/images/avatar_default.jpg' }>
                </img>
                <div className="position-absolute dropdown-menu dropdown-menu-right start-auto end-0"
                    style={{transition: 'all 0.25s ease-in-out', transform: 'scale(0) !important', transformOrigin: 'calc(100% - 30px) 0'}}>
                    <ul className='list-unstyled' style={{maxWidth: "10rem"}}>
                        <li>
                            <Link to='/profile' className="dropdown-item nav-link nav_item" style={{padding:'8px 20px'}}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <button className="dropdown-item nav-link nav_item" style={{padding:'8px 20px'}}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </li>
        );
    }
    return (
        <div>
            {/* START HEADER */}
            <header className="header_wrap">
                <div className="top-header light_skin bg_dark d-none d-md-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="header_topbar_info">
                            <div className="header_offer">
                                <span>Free Ground Shipping Over $250</span>
                            </div>
                            <div className="download_wrap">
                                <span className="me-3">Download App</span>
                                <ul className="icon_list text-center text-lg-start">
                                <li>
                                    <a href="#">
                                    <i className="fab fa-apple" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <i className="fab fa-android" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <i className="fab fa-windows" />
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                                {/* <div className="lng_dropdown">
                                    <select name="countries" className="custome_select">
                                    <option
                                        value="en"
                                        data-image="assets/images/eng.png"
                                        data-title="English"
                                    >
                                        English
                                    </option>
                                    <option
                                        value="fn"
                                        data-image="assets/images/fn.png"
                                        data-title="France"
                                    >
                                        France
                                    </option>
                                    <option
                                        value="us"
                                        data-image="assets/images/us.png"
                                        data-title="United States"
                                    >
                                        United States
                                    </option>
                                    </select>
                                </div>
                                <div className="ms-3">
                                    <select name="countries" className="custome_select">
                                    <option value="USD" data-title="USD">
                                        USD
                                    </option>
                                    <option value="EUR" data-title="EUR">
                                        EUR
                                    </option>
                                    <option value="GBR" data-title="GBR">
                                        GBR
                                    </option>
                                    </select>
                                </div> */}
                                {user && ( <span>Hi there! {user.firstname} {user.lastname}</span> )}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="middle-header dark_skin">
                <div className="container">
                    <div className="nav_block">
                    <Link className="navbar-brand" to={'/'}>
                        <img
                        className="logo_light"
                        src="/assets/images/logo_light.png"
                        alt="logo"
                        />
                        <img
                        className="logo_dark"
                        src="/assets/images/logo_dark.png"
                        alt="logo"
                        />
                    </Link>
                    <div className="product_search_form radius_input search_form_btn">
                        <form>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <div className="custom_select">
                                <select className="first_null not_chosen">
                                <option value="">All Category</option>
                                <option value="Dresses">Dresses</option>
                                <option value="Shirt-Tops">Shirt &amp; Tops</option>
                                <option value="T-Shirt">T-Shirt</option>
                                <option value="Pents">Pents</option>
                                <option value="Jeans">Jeans</option>
                                </select>
                            </div>
                            </div>
                            <input
                            className="form-control"
                            placeholder="Search Product..."
                            required=""
                            type="text"
                            />
                            <button type="submit" className="search_btn3">
                            Search
                            </button>
                        </div>
                        </form>
                    </div>
                    <ul className="navbar-nav attr-nav align-items-center">
                        <li>
                            <a href="#" className="nav-link">
                                <i className="linearicons-heart" />
                                <span className="wishlist_count">0</span>
                            </a>
                        </li>
                        <li className="dropdown cart_dropdown">
                            <a
                                className="nav-link cart_trigger"
                                href="#"
                                data-bs-toggle="dropdown"
                            >
                                <i className="linearicons-bag2" />
                                <span className="cart_count">2</span>
                                <span className="amount">
                                <span className="currency_symbol">$</span>159.00
                                </span>
                            </a>
                            <div className="cart_box cart_right dropdown-menu dropdown-menu-right">
                                <ul className="cart_list">
                                <li>
                                    <a href="#" className="item_remove">
                                    <i className="ion-close" />
                                    </a>
                                    <a href="#">
                                    <img
                                        src="/assets/images/cart_thamb1.jpg"
                                        alt="cart_thumb1"
                                    />
                                    Variable product 001
                                    </a>
                                    <span className="cart_quantity">
                                    {" "}
                                    1 x{" "}
                                    <span className="cart_amount">
                                        {" "}
                                        <span className="price_symbole">$</span>
                                    </span>
                                    78.00
                                    </span>
                                </li>
                                <li>
                                    <a href="#" className="item_remove">
                                    <i className="ion-close" />
                                    </a>
                                    <a href="#">
                                    <img
                                        src="/assets/images/cart_thamb2.jpg"
                                        alt="cart_thumb2"
                                    />
                                    Ornare sed consequat
                                    </a>
                                    <span className="cart_quantity">
                                    {" "}
                                    1 x{" "}
                                    <span className="cart_amount">
                                        {" "}
                                        <span className="price_symbole">$</span>
                                    </span>
                                    81.00
                                    </span>
                                </li>
                                </ul>
                                <div className="cart_footer">
                                <p className="cart_total">
                                    <strong>Subtotal:</strong>{" "}
                                    <span className="cart_price">
                                    {" "}
                                    <span className="price_symbole">$</span>
                                    </span>
                                    159.00
                                </p>
                                <p className="cart_buttons">
                                    <a href="#" className="btn btn-fill-line view-cart">
                                    View Cart
                                    </a>
                                    <a href="#" className="btn btn-fill-out checkout">
                                    Checkout
                                    </a>
                                </p>
                                </div>
                            </div>
                        </li>
                        {
                            isLoggedIn ? profile() : 
                            (   <li>
                                    <Link to={'/login'} className="nav-link">
                                    <i className="linearicons-user" />
                                    <span> Login</span>
                                    </Link>
                                </li>   
                            )
                        }
                    </ul>
                    </div>
                </div>
                </div>
                <div className="bottom_header dark_skin main_menu_uppercase border-top">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-3">
                        <div className="categories_wrap">
                        <button
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navCatContent"
                            aria-expanded="false"
                            className="categories_btn categories_menu"
                        >
                            <span>All Categories </span>
                            <i className="linearicons-menu" />
                        </button>
                        <div id="navCatContent" className="navbar collapse">
                            <ul>
                            <li className="dropdown dropdown-mega-menu">
                                <a
                                className="dropdown-item nav-link dropdown-toggler"
                                href="#"
                                data-bs-toggle="dropdown"
                                >
                                <i className="flaticon-tv" /> <span>Computer</span>
                                </a>
                                <div className="dropdown-menu">
                                <ul className="mega-menu d-lg-flex">
                                    <li className="mega-menu-col col-lg-7">
                                    <ul className="d-lg-flex">
                                        <li className="mega-menu-col col-lg-6">
                                        <ul>
                                            <li className="dropdown-header">
                                            Featured Item
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Vestibulum sed
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec porttitor
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec vitae facilisis
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Curabitur tempus
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Vivamus in tortor
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec vitae ante ante
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Etiam ac rutrum
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Quisque condimentum
                                            </a>
                                            </li>
                                        </ul>
                                        </li>
                                        <li className="mega-menu-col col-lg-6">
                                        <ul>
                                            <li className="dropdown-header">
                                            Popular Item
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Curabitur laoreet
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Vivamus in tortor
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec vitae facilisis
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Quisque condimentum
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Etiam ac rutrum
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec vitae ante ante
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec porttitor
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Curabitur tempus
                                            </a>
                                            </li>
                                        </ul>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-5">
                                    <div className="header-banner2">
                                        <img
                                        src="assets/images/menu_banner7.jpg"
                                        alt="menu_banner1"
                                        />
                                        <div className="banne_info">
                                        <h6>10% Off</h6>
                                        <h4>Computers</h4>
                                        <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                    <div className="header-banner2">
                                        <img
                                        src="assets/images/menu_banner8.jpg"
                                        alt="menu_banner2"
                                        />
                                        <div className="banne_info">
                                        <h6>15% Off</h6>
                                        <h4>Top Laptops</h4>
                                        <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li className="dropdown dropdown-mega-menu">
                                <a
                                className="dropdown-item nav-link dropdown-toggler"
                                href="#"
                                data-bs-toggle="dropdown"
                                >
                                <i className="flaticon-responsive" />{" "}
                                <span>Mobile &amp; Tablet</span>
                                </a>
                                <div className="dropdown-menu">
                                <ul className="mega-menu d-lg-flex">
                                    <li className="mega-menu-col col-lg-7">
                                    <ul className="d-lg-flex">
                                        <li className="mega-menu-col col-lg-6">
                                        <ul>
                                            <li className="dropdown-header">
                                            Featured Item
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Vestibulum sed
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec porttitor
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec vitae facilisis
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Curabitur tempus
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Vivamus in tortor
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec vitae ante ante
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Etiam ac rutrum
                                            </a>
                                            </li>
                                        </ul>
                                        </li>
                                        <li className="mega-menu-col col-lg-6">
                                        <ul>
                                            <li className="dropdown-header">
                                            Popular Item
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Curabitur laoreet
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Vivamus in tortor
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec vitae facilisis
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Quisque condimentum
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Etiam ac rutrum
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec vitae ante ante
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec porttitor
                                            </a>
                                            </li>
                                        </ul>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-5">
                                    <div className="header-banner2">
                                        <a href="#">
                                        <img
                                            src="assets/images/menu_banner6.jpg"
                                            alt="menu_banner"
                                        />
                                        </a>
                                    </div>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li className="dropdown dropdown-mega-menu">
                                <a
                                className="dropdown-item nav-link dropdown-toggler"
                                href="#"
                                data-bs-toggle="dropdown"
                                >
                                <i className="flaticon-camera" /> <span>Camera</span>
                                </a>
                                <div className="dropdown-menu">
                                <ul className="mega-menu d-lg-flex">
                                    <li className="mega-menu-col col-lg-7">
                                    <ul className="d-lg-flex">
                                        <li className="mega-menu-col col-lg-6">
                                        <ul>
                                            <li className="dropdown-header">
                                            Featured Item
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Vestibulum sed
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec porttitor
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec vitae facilisis
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Curabitur tempus
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Vivamus in tortor
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec vitae ante ante
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Etiam ac rutrum
                                            </a>
                                            </li>
                                        </ul>
                                        </li>
                                        <li className="mega-menu-col col-lg-6">
                                        <ul>
                                            <li className="dropdown-header">
                                            Popular Item
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Curabitur laoreet
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Vivamus in tortor
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec vitae facilisis
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Quisque condimentum
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Etiam ac rutrum
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec vitae ante ante
                                            </a>
                                            </li>
                                            <li>
                                            <a
                                                className="dropdown-item nav-link nav_item"
                                                href="#"
                                            >
                                                Donec porttitor
                                            </a>
                                            </li>
                                        </ul>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-5">
                                    <div className="header-banner2">
                                        <a href="#">
                                        <img
                                            src="assets/images/menu_banner9.jpg"
                                            alt="menu_banner"
                                        />
                                        </a>
                                    </div>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li className="dropdown dropdown-mega-menu">
                                <a
                                className="dropdown-item nav-link dropdown-toggler"
                                href="#"
                                data-bs-toggle="dropdown"
                                >
                                <i className="flaticon-plugins" />{" "}
                                <span>Accessories</span>
                                </a>
                                <div className="dropdown-menu">
                                <ul className="mega-menu d-lg-flex">
                                    <li className="mega-menu-col col-lg-4">
                                    <ul>
                                        <li className="dropdown-header">Woman's</li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="shop-list-left-sidebar.html"
                                        >
                                            Vestibulum sed
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="shop-left-sidebar.html"
                                        >
                                            Donec porttitor
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="shop-right-sidebar.html"
                                        >
                                            Donec vitae facilisis
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="shop-list.html"
                                        >
                                            Curabitur tempus
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="shop-load-more.html"
                                        >
                                            Vivamus in tortor
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-4">
                                    <ul>
                                        <li className="dropdown-header">Men's</li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="shop-cart.html"
                                        >
                                            Donec vitae ante ante
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="checkout.html"
                                        >
                                            Etiam ac rutrum
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="wishlist.html"
                                        >
                                            Quisque condimentum
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="compare.html"
                                        >
                                            Curabitur laoreet
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="order-completed.html"
                                        >
                                            Vivamus in tortor
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-4">
                                    <ul>
                                        <li className="dropdown-header">Kid's</li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="shop-product-detail.html"
                                        >
                                            Donec vitae facilisis
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="shop-product-detail-left-sidebar.html"
                                        >
                                            Quisque condimentum
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="shop-product-detail-right-sidebar.html"
                                        >
                                            Etiam ac rutrum
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="shop-product-detail-thumbnails-left.html"
                                        >
                                            Donec vitae ante ante
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            className="dropdown-item nav-link nav_item"
                                            href="shop-product-detail-thumbnails-left.html"
                                        >
                                            Donec porttitor
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li>
                                <a
                                className="dropdown-item nav-link nav_item"
                                href="coming-soon.html"
                                >
                                <i className="flaticon-headphones" />{" "}
                                <span>Headphones</span>
                                </a>
                            </li>
                            <li>
                                <a
                                className="dropdown-item nav-link nav_item"
                                href="404.html"
                                >
                                <i className="flaticon-console" /> <span>Gaming</span>
                                </a>
                            </li>
                            <li>
                                <a
                                className="dropdown-item nav-link nav_item"
                                href="login.html"
                                >
                                <i className="flaticon-watch" /> <span>Watches</span>
                                </a>
                            </li>
                            <li>
                                <a
                                className="dropdown-item nav-link nav_item"
                                href="register.html"
                                >
                                <i className="flaticon-music-system" />{" "}
                                <span>Home Audio &amp; Theater</span>
                                </a>
                            </li>
                            <li>
                                <a
                                className="dropdown-item nav-link nav_item"
                                href="coming-soon.html"
                                >
                                <i className="flaticon-monitor" />{" "}
                                <span>TV &amp; Smart Box</span>
                                </a>
                            </li>
                            <li>
                                <a
                                className="dropdown-item nav-link nav_item"
                                href="404.html"
                                >
                                <i className="flaticon-printer" /> <span>Printer</span>
                                </a>
                            </li>
                            <li>
                                <ul className="more_slide_open">
                                <li>
                                    <a
                                    className="dropdown-item nav-link nav_item"
                                    href="login.html"
                                    >
                                    <i className="flaticon-fax" />{" "}
                                    <span>Fax Machine</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                    className="dropdown-item nav-link nav_item"
                                    href="register.html"
                                    >
                                    <i className="flaticon-mouse" /> <span>Mouse</span>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            </ul>
                            <div className="more_categories">More Categories</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-6 col-9">
                        <nav className="navbar navbar-expand-lg">
                        <button
                            className="navbar-toggler side_navbar_toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSidetoggle"
                            aria-expanded="false"
                        >
                            <span className="ion-android-menu" />
                        </button>
                        <div className="pr_search_icon">
                            <a
                            href="#"
                            className="nav-link pr_search_trigger"
                            >
                            <i className="linearicons-magnifier" />
                            </a>
                        </div>
                        <div className="collapse navbar-collapse mobile_side_menu" id="navbarSidetoggle"  >
                            <ul className="navbar-nav">
                                <li >
                                    <Link to='/' className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/products' className="nav-link">
                                        Product
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/posts' className="nav-link">
                                        Posts
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link nav_item" to='/contact'>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="contact_phone contact_support">
                            <i className="linearicons-phone-wave" />
                            <span>0943-877-608</span>
                        </div>
                        </nav>
                    </div>
                    </div>
                </div>
                </div>
            </header>
            {/* END HEADER */}
        </div>
    )
}

export default Header