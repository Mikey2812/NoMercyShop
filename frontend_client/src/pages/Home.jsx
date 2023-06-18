import React from 'react'

const Home = () => {
    return (
        <div>
            {/* LOADER */}
            {/* <div className="preloader">
                <div className="lds-ellipsis">
                <span />
                <span />
                <span />
                </div>
            </div> */}
            {/* END LOADER */}
            {/* Home Popup Section */}
            {/* <div
                className="modal fade subscribe_popup"
                id="onload-popup"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
            >
                <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
                >
                <div className="modal-content">
                    <div className="modal-body">
                    <button
                        type="button"
                        className="close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">
                        <i className="ion-ios-close-empty" />
                        </span>
                    </button>
                    <div className="row g-0">
                        <div className="col-sm-7">
                        <div className="popup_content  text-start">
                            <div className="popup-text">
                            <div className="heading_s1">
                                <h3>Subscribe Newsletter and Get 25% Discount!</h3>
                            </div>
                            <p>
                                Subscribe to the newsletter to receive updates about new
                                products.
                            </p>
                            </div>
                            <form method="post">
                            <div className="form-group mb-3">
                                <input
                                name="email"
                                required=""
                                type="email"
                                className="form-control"
                                placeholder="Enter Your Email"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <button
                                className="btn btn-fill-out btn-block text-uppercase"
                                title="Subscribe"
                                type="submit"
                                >
                                Subscribe
                                </button>
                            </div>
                            </form>
                            <div className="chek-form">
                            <div className="custome-checkbox">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                name="checkbox"
                                id="exampleCheckbox3"
                                defaultValue=""
                                />
                                <label
                                className="form-check-label"
                                htmlFor="exampleCheckbox3"
                                >
                                <span>Don't show this popup again!</span>
                                </label>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-5">
                        <div
                            className="background_bg h-100"
                            data-img-src="assets/images/popup_img3.jpg"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div> */}
            {/* End Screen Load Popup Section */}
            {/* START SECTION BANNER */}
            <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
                <div
                id="carouselExampleControls"
                className="carousel slide carousel-fade light_arrow"
                data-bs-ride="carousel"
                >
                <div className="carousel-inner">
                    <div
                        className="carousel-item background_bg active"
                        style={{backgroundImage: 'url("assets/images/banner16.jpg")'}}
                    >
                    <div className="banner_slide_content banner_content_inner">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-10">
                            <div className="banner_content overflow-hidden">
                                <h2
                                className="staggered-animation"
                                data-animation="slideInLeft"
                                data-animation-delay="0.5s"
                                >
                                LED 75 INCH F58
                                </h2>
                                <h5
                                className="mb-3 mb-sm-4 staggered-animation font-weight-light"
                                data-animation="slideInLeft"
                                data-animation-delay="1s"
                                >
                                Get up to <span className="text_default">50%</span> off
                                Today Only!
                                </h5>
                                <a
                                className="btn btn-fill-out staggered-animation text-uppercase"
                                href="shop-left-sidebar.html"
                                data-animation="slideInLeft"
                                data-animation-delay="1.5s"
                                >
                                Shop Now
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div
                        className="carousel-item background_bg"
                        style={{backgroundImage: 'url("assets/images/banner17.jpg")'}}
                    >
                    <div className="banner_slide_content banner_content_inner">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-10">
                            <div className="banner_content overflow-hidden">
                                <h2
                                className="staggered-animation"
                                data-animation="slideInLeft"
                                data-animation-delay="0.5s"
                                >
                                Smart Phones
                                </h2>
                                <h5
                                className="mb-3 mb-sm-4 staggered-animation font-weight-light"
                                data-animation="slideInLeft"
                                data-animation-delay="1s"
                                >
                                <span className="text_default">50%</span> off in all
                                products
                                </h5>
                                <a
                                className="btn btn-fill-out staggered-animation text-uppercase"
                                href="shop-left-sidebar.html"
                                data-animation="slideInLeft"
                                data-animation-delay="1.5s"
                                >
                                Shop Now
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div
                        className="carousel-item background_bg"
                        style={{backgroundImage: 'url("assets/images/banner18.jpg")'}}
                    >
                    <div className="banner_slide_content banner_content_inner">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-10">
                            <div className="banner_content overflow-hidden">
                                <h2
                                className="staggered-animation"
                                data-animation="slideInLeft"
                                data-animation-delay="0.5s"
                                >
                                Beat Headphone
                                </h2>
                                <h5
                                className="mb-3 mb-sm-4 staggered-animation font-weight-light"
                                data-animation="slideInLeft"
                                data-animation-delay="1s"
                                >
                                Taking your Viewing Experience to Next Level
                                </h5>
                                <a
                                className="btn btn-fill-out staggered-animation text-uppercase"
                                href="shop-left-sidebar.html"
                                data-animation="slideInLeft"
                                data-animation-delay="1.5s"
                                >
                                Shop Now
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-bs-slide="prev"
                >
                    <i className="ion-chevron-left" />
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-bs-slide="next"
                >
                    <i className="ion-chevron-right" />
                </a>
                </div>
            </div>
            {/* END SECTION BANNER */}
            {/* END MAIN CONTENT */}
            <div className="main_content">
                {/* START SECTION BANNER */}
                <div className="section pb_20 small_pt">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4">
                        <div className="sale-banner mb-3 mb-md-4">
                        <a className="hover_effect1" href="#">
                            <img
                            src="assets/images/shop_banner_img7.jpg"
                            alt="shop_banner_img7"
                            />
                        </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sale-banner mb-3 mb-md-4">
                        <a className="hover_effect1" href="#">
                            <img
                            src="assets/images/shop_banner_img8.jpg"
                            alt="shop_banner_img8"
                            />
                        </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sale-banner mb-3 mb-md-4">
                        <a className="hover_effect1" href="#">
                            <img
                            src="assets/images/shop_banner_img9.jpg"
                            alt="shop_banner_img9"
                            />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* END SECTION BANNER */}
                {/* START SECTION CATEGORIES */}
                <div className="section small_pb small_pt">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="heading_s4 text-center">
                        <h2>Top Categories</h2>
                        </div>
                        <p className="text-center leads">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                        blandit massa enim Nullam nunc varius.
                        </p>
                    </div>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-12">
                        <div
                        className="cat_slider cat_style1 mt-4 mt-md-0 carousel_slider owl-carousel owl-theme nav_style5"
                        data-loop="true"
                        data-dots="false"
                        data-nav="true"
                        data-margin={30}
                        data-responsive='{"0":{"items": "2"}, "480":{"items": "3"}, "576":{"items": "4"}, "768":{"items": "5"}, "991":{"items": "6"}, "1199":{"items": "7"}}'
                        >
                        <div className="item">
                            <div className="categories_box">
                            <a href="#">
                                <img src="assets/images/cat_img1.png" alt="cat_img1" />
                                <span>Television</span>
                            </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="categories_box">
                            <a href="#">
                                <img src="assets/images/cat_img2.png" alt="cat_img2" />
                                <span>Mobile</span>
                            </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="categories_box">
                            <a href="#">
                                <img src="assets/images/cat_img3.png" alt="cat_img3" />
                                <span>Headphone</span>
                            </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="categories_box">
                            <a href="#">
                                <img src="assets/images/cat_img4.png" alt="cat_img4" />
                                <span>Watch</span>
                            </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="categories_box">
                            <a href="#">
                                <img src="assets/images/cat_img5.png" alt="cat_img5" />
                                <span>Game</span>
                            </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="categories_box">
                            <a href="#">
                                <img src="assets/images/cat_img6.png" alt="cat_img6" />
                                <span>Camera</span>
                            </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="categories_box">
                            <a href="#">
                                <img src="assets/images/cat_img7.png" alt="cat_img7" />
                                <span>Audio</span>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* END SECTION CATEGORIES */}
                {/* START SECTION SHOP */}
                <div className="section small_pb small_pt">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="heading_s1 text-center">
                        <h2>Exclusive Products</h2>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <div className="tab-style1">
                        <ul
                            className="nav nav-tabs justify-content-center"
                            role="tablist"
                        >
                            <li className="nav-item">
                            <a
                                className="nav-link active"
                                id="arrival-tab"
                                data-bs-toggle="tab"
                                href="#arrival"
                                role="tab"
                                aria-controls="arrival"
                                aria-selected="true"
                            >
                                New Arrival
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link"
                                id="sellers-tab"
                                data-bs-toggle="tab"
                                href="#sellers"
                                role="tab"
                                aria-controls="sellers"
                                aria-selected="false"
                            >
                                Best Sellers
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link"
                                id="featured-tab"
                                data-bs-toggle="tab"
                                href="#featured"
                                role="tab"
                                aria-controls="featured"
                                aria-selected="false"
                            >
                                Featured
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link"
                                id="special-tab"
                                data-bs-toggle="tab"
                                href="#special"
                                role="tab"
                                aria-controls="special"
                                aria-selected="false"
                            >
                                Special Offer
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="tab_slider tab-content">
                        <div
                            className="tab-pane fade show active"
                            id="arrival"
                            role="tabpanel"
                            aria-labelledby="arrival-tab"
                        >
                            <div
                            className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                            data-loop="true"
                            data-margin={20}
                            data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
                            >
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img1.jpg" alt="el_img1" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img1.jpg"
                                        alt="el_hover_img1"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Red &amp; Black Headphone
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "80%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img2.jpg" alt="el_img2" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img2.jpg"
                                        alt="el_hover_img2"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Smart Watch External
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$95.00</del>
                                    <div className="on_sale">
                                        <span>25% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "68%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(15)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <span className="pr_flash">New</span>
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img3.jpg" alt="el_img3" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img3.jpg"
                                        alt="el_hover_img3"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">Nikon HD camera</a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$68.00</span>
                                    <del>$99.00</del>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "87%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(25)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img4.jpg" alt="el_img4" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img4.jpg"
                                        alt="el_hover_img4"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">Audio Equipment</a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$69.00</span>
                                    <del>$89.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "70%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(22)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img5.jpg" alt="el_img5" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img5.jpg"
                                        alt="el_hover_img5"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Smart Televisions
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "80%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <span className="pr_flash bg-danger">Hot</span>
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img6.jpg" alt="el_img6" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img6.jpg"
                                        alt="el_hover_img6"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Samsung Smart Phone
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$95.00</del>
                                    <div className="on_sale">
                                        <span>25% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "68%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(15)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="sellers"
                            role="tabpanel"
                            aria-labelledby="sellers-tab"
                        >
                            <div
                            className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                            data-loop="true"
                            data-margin={20}
                            data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
                            >
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img7.jpg" alt="el_img7" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img7.jpg"
                                        alt="el_hover_img7"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">Audio Theaters</a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "80%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <span className="pr_flash bg-danger">Hot</span>
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img8.jpg" alt="el_img8" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img8.jpg"
                                        alt="el_hover_img8"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Surveillance camera
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$95.00</del>
                                    <div className="on_sale">
                                        <span>25% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "68%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(15)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img9.jpg" alt="el_img9" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img9.jpg"
                                        alt="el_hover_img9"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">oppo Reno3 Pro</a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$68.00</span>
                                    <del>$99.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "87%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(25)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <span className="pr_flash bg-success">Sale</span>
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img
                                        src="assets/images/el_img10.jpg"
                                        alt="el_img10"
                                    />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img10.jpg"
                                        alt="el_hover_img10"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        classical Headphone
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$68.00</span>
                                    <del>$99.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "87%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(25)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img
                                        src="assets/images/el_img11.jpg"
                                        alt="el_img11"
                                    />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img11.jpg"
                                        alt="el_hover_img11"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Basics High-Speed HDMI
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$69.00</span>
                                    <del>$89.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "70%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(22)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img
                                        src="assets/images/el_img12.jpg"
                                        alt="el_img12"
                                    />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img12.jpg"
                                        alt="el_hover_img12"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Sound Equipment for Low
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "80%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="featured"
                            role="tabpanel"
                            aria-labelledby="featured-tab"
                        >
                            <div
                            className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                            data-loop="true"
                            data-margin={20}
                            data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
                            >
                            <div className="item">
                                <div className="product_wrap">
                                <span className="pr_flash bg-danger">Hot</span>
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img8.jpg" alt="el_img8" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img8.jpg"
                                        alt="el_hover_img8"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Surveillance camera
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$95.00</del>
                                    <div className="on_sale">
                                        <span>25% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "68%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(15)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img4.jpg" alt="el_img4" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img4.jpg"
                                        alt="el_hover_img4"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">Audio Equipment</a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$69.00</span>
                                    <del>$89.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "70%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(22)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img
                                        src="assets/images/el_img11.jpg"
                                        alt="el_img11"
                                    />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img11.jpg"
                                        alt="el_hover_img11"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Basics High-Speed HDMI
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$69.00</span>
                                    <del>$89.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "70%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(22)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img1.jpg" alt="el_img1" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img1.jpg"
                                        alt="el_hover_img1"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Red &amp; Black Headphone
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "80%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img7.jpg" alt="el_img7" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img7.jpg"
                                        alt="el_hover_img7"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">Audio Theaters</a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "80%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <span className="pr_flash bg-danger">Hot</span>
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img6.jpg" alt="el_img6" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img6.jpg"
                                        alt="el_hover_img6"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Samsung Smart Phone
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$95.00</del>
                                    <div className="on_sale">
                                        <span>25% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "68%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(15)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="special"
                            role="tabpanel"
                            aria-labelledby="special-tab"
                        >
                            <div
                            className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                            data-loop="true"
                            data-margin={20}
                            data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
                            >
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img2.jpg" alt="el_img2" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img2.jpg"
                                        alt="el_hover_img2"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Smart Watch External
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$95.00</del>
                                    <div className="on_sale">
                                        <span>25% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "68%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(15)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img5.jpg" alt="el_img5" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img5.jpg"
                                        alt="el_hover_img5"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Smart Televisions
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "80%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img9.jpg" alt="el_img9" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img9.jpg"
                                        alt="el_hover_img9"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">oppo Reno3 Pro</a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$68.00</span>
                                    <del>$99.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "87%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(25)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img7.jpg" alt="el_img7" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img7.jpg"
                                        alt="el_hover_img7"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">Audio Theaters</a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "80%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img src="assets/images/el_img5.jpg" alt="el_img5" />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img5.jpg"
                                        alt="el_hover_img5"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Smart Televisions
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "80%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="product_wrap">
                                <div className="product_img">
                                    <a href="shop-product-detail.html">
                                    <img
                                        src="assets/images/el_img12.jpg"
                                        alt="el_img12"
                                    />
                                    <img
                                        className="product_hover_img"
                                        src="assets/images/el_hover_img12.jpg"
                                        alt="el_hover_img12"
                                    />
                                    </a>
                                    <div className="product_action_box">
                                    <ul className="list_none pr_action_btn">
                                        <li className="add-to-cart">
                                        <a href="#">
                                            <i className="icon-basket-loaded" /> Add To Cart
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-compare.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-shuffle" />
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="shop-quick-view.html"
                                            className="popup-ajax"
                                        >
                                            <i className="icon-magnifier-add" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="icon-heart" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title">
                                    <a href="shop-product-detail.html">
                                        Sound Equipment for Low
                                    </a>
                                    </h6>
                                    <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                    </div>
                                    <div className="rating_wrap">
                                    <div className="rating">
                                        <div
                                        className="product_rate"
                                        style={{ width: "80%" }}
                                        />
                                    </div>
                                    <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Phasellus blandit massa enim. Nullam id varius
                                        nunc id varius nunc.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* END SECTION SHOP */}
                {/* START SECTION BANNER */}
                <div className="section pb_20 small_pt">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <div className="sale-banner mb-3 mb-md-4">
                        <a className="hover_effect1" href="#">
                            <img
                            src="assets/images/shop_banner_img11.png"
                            alt="shop_banner_img11"
                            />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* END SECTION BANNER */}
                {/* START SECTION SHOP */}
                <div className="section small_pt">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="heading_s1 text-center">
                        <h2>Trending Products</h2>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <div
                        className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                        data-loop="true"
                        data-margin={20}
                        data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
                        >
                        <div className="item">
                            <div className="product_wrap">
                            <div className="product_img">
                                <a href="shop-product-detail.html">
                                <img src="assets/images/el_img2.jpg" alt="el_img2" />
                                <img
                                    className="product_hover_img"
                                    src="assets/images/el_hover_img2.jpg"
                                    alt="el_hover_img2"
                                />
                                </a>
                                <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                    <li className="add-to-cart">
                                    <a href="#">
                                        <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                    </li>
                                    <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                        <i className="icon-shuffle" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="shop-quick-view.html" className="popup-ajax">
                                        <i className="icon-magnifier-add" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="icon-heart" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title">
                                <a href="shop-product-detail.html">
                                    Smart Watch External
                                </a>
                                </h6>
                                <div className="product_price">
                                <span className="price">$55.00</span>
                                <del>$95.00</del>
                                <div className="on_sale">
                                    <span>25% Off</span>
                                </div>
                                </div>
                                <div className="rating_wrap">
                                <div className="rating">
                                    <div
                                    className="product_rate"
                                    style={{ width: "68%" }}
                                    />
                                </div>
                                <span className="rating_num">(15)</span>
                                </div>
                                <div className="pr_desc">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus blandit massa enim. Nullam id varius nunc id
                                    varius nunc.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product_wrap">
                            <div className="product_img">
                                <a href="shop-product-detail.html">
                                <img src="assets/images/el_img5.jpg" alt="el_img5" />
                                <img
                                    className="product_hover_img"
                                    src="assets/images/el_hover_img5.jpg"
                                    alt="el_hover_img5"
                                />
                                </a>
                                <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                    <li className="add-to-cart">
                                    <a href="#">
                                        <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                    </li>
                                    <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                        <i className="icon-shuffle" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="shop-quick-view.html" className="popup-ajax">
                                        <i className="icon-magnifier-add" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="icon-heart" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title">
                                <a href="shop-product-detail.html">Smart Televisions</a>
                                </h6>
                                <div className="product_price">
                                <span className="price">$45.00</span>
                                <del>$55.25</del>
                                <div className="on_sale">
                                    <span>35% Off</span>
                                </div>
                                </div>
                                <div className="rating_wrap">
                                <div className="rating">
                                    <div
                                    className="product_rate"
                                    style={{ width: "80%" }}
                                    />
                                </div>
                                <span className="rating_num">(21)</span>
                                </div>
                                <div className="pr_desc">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus blandit massa enim. Nullam id varius nunc id
                                    varius nunc.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product_wrap">
                            <div className="product_img">
                                <a href="shop-product-detail.html">
                                <img src="assets/images/el_img9.jpg" alt="el_img9" />
                                <img
                                    className="product_hover_img"
                                    src="assets/images/el_hover_img9.jpg"
                                    alt="el_hover_img9"
                                />
                                </a>
                                <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                    <li className="add-to-cart">
                                    <a href="#">
                                        <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                    </li>
                                    <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                        <i className="icon-shuffle" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="shop-quick-view.html" className="popup-ajax">
                                        <i className="icon-magnifier-add" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="icon-heart" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title">
                                <a href="shop-product-detail.html">oppo Reno3 Pro</a>
                                </h6>
                                <div className="product_price">
                                <span className="price">$68.00</span>
                                <del>$99.00</del>
                                <div className="on_sale">
                                    <span>20% Off</span>
                                </div>
                                </div>
                                <div className="rating_wrap">
                                <div className="rating">
                                    <div
                                    className="product_rate"
                                    style={{ width: "87%" }}
                                    />
                                </div>
                                <span className="rating_num">(25)</span>
                                </div>
                                <div className="pr_desc">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus blandit massa enim. Nullam id varius nunc id
                                    varius nunc.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product_wrap">
                            <div className="product_img">
                                <a href="shop-product-detail.html">
                                <img src="assets/images/el_img7.jpg" alt="el_img7" />
                                <img
                                    className="product_hover_img"
                                    src="assets/images/el_hover_img7.jpg"
                                    alt="el_hover_img7"
                                />
                                </a>
                                <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                    <li className="add-to-cart">
                                    <a href="#">
                                        <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                    </li>
                                    <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                        <i className="icon-shuffle" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="shop-quick-view.html" className="popup-ajax">
                                        <i className="icon-magnifier-add" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="icon-heart" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title">
                                <a href="shop-product-detail.html">Audio Theaters</a>
                                </h6>
                                <div className="product_price">
                                <span className="price">$45.00</span>
                                <del>$55.25</del>
                                <div className="on_sale">
                                    <span>35% Off</span>
                                </div>
                                </div>
                                <div className="rating_wrap">
                                <div className="rating">
                                    <div
                                    className="product_rate"
                                    style={{ width: "80%" }}
                                    />
                                </div>
                                <span className="rating_num">(21)</span>
                                </div>
                                <div className="pr_desc">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus blandit massa enim. Nullam id varius nunc id
                                    varius nunc.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product_wrap">
                            <div className="product_img">
                                <a href="shop-product-detail.html">
                                <img src="assets/images/el_img5.jpg" alt="el_img5" />
                                <img
                                    className="product_hover_img"
                                    src="assets/images/el_hover_img5.jpg"
                                    alt="el_hover_img5"
                                />
                                </a>
                                <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                    <li className="add-to-cart">
                                    <a href="#">
                                        <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                    </li>
                                    <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                        <i className="icon-shuffle" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="shop-quick-view.html" className="popup-ajax">
                                        <i className="icon-magnifier-add" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="icon-heart" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title">
                                <a href="shop-product-detail.html">Smart Televisions</a>
                                </h6>
                                <div className="product_price">
                                <span className="price">$45.00</span>
                                <del>$55.25</del>
                                <div className="on_sale">
                                    <span>35% Off</span>
                                </div>
                                </div>
                                <div className="rating_wrap">
                                <div className="rating">
                                    <div
                                    className="product_rate"
                                    style={{ width: "80%" }}
                                    />
                                </div>
                                <span className="rating_num">(21)</span>
                                </div>
                                <div className="pr_desc">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus blandit massa enim. Nullam id varius nunc id
                                    varius nunc.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product_wrap">
                            <div className="product_img">
                                <a href="shop-product-detail.html">
                                <img src="assets/images/el_img12.jpg" alt="el_img12" />
                                <img
                                    className="product_hover_img"
                                    src="assets/images/el_hover_img12.jpg"
                                    alt="el_hover_img12"
                                />
                                </a>
                                <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                    <li className="add-to-cart">
                                    <a href="#">
                                        <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                    </li>
                                    <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                        <i className="icon-shuffle" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="shop-quick-view.html" className="popup-ajax">
                                        <i className="icon-magnifier-add" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="icon-heart" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title">
                                <a href="shop-product-detail.html">
                                    Sound Equipment for Low
                                </a>
                                </h6>
                                <div className="product_price">
                                <span className="price">$45.00</span>
                                <del>$55.25</del>
                                <div className="on_sale">
                                    <span>35% Off</span>
                                </div>
                                </div>
                                <div className="rating_wrap">
                                <div className="rating">
                                    <div
                                    className="product_rate"
                                    style={{ width: "80%" }}
                                    />
                                </div>
                                <span className="rating_num">(21)</span>
                                </div>
                                <div className="pr_desc">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus blandit massa enim. Nullam id varius nunc id
                                    varius nunc.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* END SECTION SHOP */}
                {/* START SECTION TESTIMONIAL */}
                <div className="section bg_redon">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="heading_s1 text-center">
                        <h2>Our Client Say!</h2>
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div
                        className="testimonial_wrap testimonial_style1 carousel_slider owl-carousel owl-theme nav_style2"
                        data-nav="true"
                        data-dots="false"
                        data-center="true"
                        data-loop="true"
                        data-autoplay="true"
                        data-items={1}
                        >
                        <div className="testimonial_box">
                            <div className="testimonial_desc">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                aliquam amet animi blanditiis consequatur debitis dicta
                                distinctio, enim error eum iste libero modi nam natus
                                perferendis possimus quasi sint sit tempora voluptatem.
                            </p>
                            </div>
                            <div className="author_wrap">
                            <div className="author_img">
                                <img src="assets/images/user_img1.jpg" alt="user_img1" />
                            </div>
                            <div className="author_name">
                                <h6>Lissa Castro</h6>
                                <span>Designer</span>
                            </div>
                            </div>
                        </div>
                        <div className="testimonial_box">
                            <div className="testimonial_desc">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                aliquam amet animi blanditiis consequatur debitis dicta
                                distinctio, enim error eum iste libero modi nam natus
                                perferendis possimus quasi sint sit tempora voluptatem.
                            </p>
                            </div>
                            <div className="author_wrap">
                            <div className="author_img">
                                <img src="assets/images/user_img2.jpg" alt="user_img2" />
                            </div>
                            <div className="author_name">
                                <h6>Alden Smith</h6>
                                <span>Designer</span>
                            </div>
                            </div>
                        </div>
                        <div className="testimonial_box">
                            <div className="testimonial_desc">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                aliquam amet animi blanditiis consequatur debitis dicta
                                distinctio, enim error eum iste libero modi nam natus
                                perferendis possimus quasi sint sit tempora voluptatem.
                            </p>
                            </div>
                            <div className="author_wrap">
                            <div className="author_img">
                                <img src="assets/images/user_img3.jpg" alt="user_img3" />
                            </div>
                            <div className="author_name">
                                <h6>Daisy Lana</h6>
                                <span>Designer</span>
                            </div>
                            </div>
                        </div>
                        <div className="testimonial_box">
                            <div className="testimonial_desc">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                aliquam amet animi blanditiis consequatur debitis dicta
                                distinctio, enim error eum iste libero modi nam natus
                                perferendis possimus quasi sint sit tempora voluptatem.
                            </p>
                            </div>
                            <div className="author_wrap">
                            <div className="author_img">
                                <img src="assets/images/user_img4.jpg" alt="user_img4" />
                            </div>
                            <div className="author_name">
                                <h6>John Becker</h6>
                                <span>Designer</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* END SECTION TESTIMONIAL */}
                {/* START SECTION BLOG */}
                <div className="section pb_20">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="heading_s1 text-center">
                        <h2>Latest News</h2>
                        </div>
                        <p className="leads text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog_post blog_style2 box_shadow1">
                        <div className="blog_img">
                            <a href="blog-single.html">
                            <img
                                src="assets/images/el_blog_img1.jpg"
                                alt="el_blog_img1"
                            />
                            </a>
                        </div>
                        <div className="blog_content bg-white">
                            <div className="blog_text">
                            <h5 className="blog_title">
                                <a href="blog-single.html">
                                But I must explain to you how all this mistaken idea
                                </a>
                            </h5>
                            <ul className="list_none blog_meta">
                                <li>
                                <a href="#">
                                    <i className="ti-calendar" /> April 14, 2018
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="ti-comments" /> 2 Comment
                                </a>
                                </li>
                            </ul>
                            <p>
                                If you are going to use a passage of Lorem Ipsum, you need
                                to be sure there isn't anything hidden in the text
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog_post blog_style2 box_shadow1">
                        <div className="blog_img">
                            <a href="blog-single.html">
                            <img
                                src="assets/images/el_blog_img2.jpg"
                                alt="el_blog_img2"
                            />
                            </a>
                        </div>
                        <div className="blog_content bg-white">
                            <div className="blog_text">
                            <h5 className="blog_title">
                                <a href="blog-single.html">
                                On the other hand we provide denounce with righteous
                                </a>
                            </h5>
                            <ul className="list_none blog_meta">
                                <li>
                                <a href="#">
                                    <i className="ti-calendar" /> April 14, 2018
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="ti-comments" /> 2 Comment
                                </a>
                                </li>
                            </ul>
                            <p>
                                If you are going to use a passage of Lorem Ipsum, you need
                                to be sure there isn't anything hidden in the text
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog_post blog_style2 box_shadow1">
                        <div className="blog_img">
                            <a href="blog-single.html">
                            <img
                                src="assets/images/el_blog_img3.jpg"
                                alt="el_blog_img2"
                            />
                            </a>
                        </div>
                        <div className="blog_content bg-white">
                            <div className="blog_text">
                            <h5 className="blog_title">
                                <a href="blog-single.html">
                                Why is a ticket to Lagos so expensive?
                                </a>
                            </h5>
                            <ul className="list_none blog_meta">
                                <li>
                                <a href="#">
                                    <i className="ti-calendar" /> April 14, 2018
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="ti-comments" /> 2 Comment
                                </a>
                                </li>
                            </ul>
                            <p>
                                If you are going to use a passage of Lorem Ipsum, you need
                                to be sure there isn't anything hidden in the text
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* END SECTION BLOG */}
                {/* START SECTION CLIENT LOGO */}
                <div className="section small_pt">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <div
                        className="client_logo carousel_slider owl-carousel owl-theme"
                        data-dots="false"
                        data-margin={30}
                        data-loop="true"
                        data-autoplay="true"
                        data-responsive='{"0":{"items": "2"}, "480":{"items": "3"}, "767":{"items": "4"}, "991":{"items": "5"}}'
                        >
                        <div className="item">
                            <div className="cl_logo">
                            <img src="assets/images/cl_logo1.png" alt="cl_logo" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="cl_logo">
                            <img src="assets/images/cl_logo2.png" alt="cl_logo" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="cl_logo">
                            <img src="assets/images/cl_logo3.png" alt="cl_logo" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="cl_logo">
                            <img src="assets/images/cl_logo4.png" alt="cl_logo" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="cl_logo">
                            <img src="assets/images/cl_logo5.png" alt="cl_logo" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="cl_logo">
                            <img src="assets/images/cl_logo6.png" alt="cl_logo" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="cl_logo">
                            <img src="assets/images/cl_logo7.png" alt="cl_logo" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* END SECTION CLIENT LOGO */}
                {/* START SECTION SUBSCRIBE NEWSLETTER */}
                <div className="section bg_default small_pt small_pb">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="newsletter_text text_white">
                        <h3>Join Our Newsletter Now</h3>
                        <p> Register now to get updates on promotions. </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="newsletter_form2">
                        <form>
                            <input
                            type="text"
                            required=""
                            className="form-control rounded-0"
                            placeholder="Enter Email Address"
                            />
                            <button
                            type="submit"
                            className="btn btn-dark rounded-0"
                            name="submit"
                            value="Submit"
                            >
                            Subscribe
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* START SECTION SUBSCRIBE NEWSLETTER */}
            </div>
            {/* END MAIN CONTENT */}
            <a href="#" className="scrollup" style={{ display: "none" }}>
                <i className="ion-ios-arrow-up" />
            </a>
        </div>
    )
}

export default Home