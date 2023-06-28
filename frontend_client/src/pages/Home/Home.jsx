import React from 'react'
import { Link } from 'react-router-dom'

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
                        <Link className="hover_effect1" to='/categories/headphone'>
                            <img
                            src="/assets/images/shop_banner_img7.jpg"
                            alt="shop_banner_img7"
                            />
                        </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sale-banner mb-3 mb-md-4">
                        <Link className="hover_effect1" to={'/categories/camera'}>
                            <img
                            src="/assets/images/shop_banner_img8.jpg"
                            alt="shop_banner_img8"
                            />
                        </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sale-banner mb-3 mb-md-4">
                        <Link className="hover_effect1" to='/categories/watch'>
                            <img
                            src="/assets/images/shop_banner_img9.jpg"
                            alt="shop_banner_img9"
                            />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* END SECTION BANNER */}
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
            <a href="#" className="scrollup d-none">
                <i className="ion-ios-arrow-up" />
            </a>
        </div>
    )
}

export default Home