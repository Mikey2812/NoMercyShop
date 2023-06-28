import React from 'react'

const ProductSidebar = () => {
    return (
        <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div className="sidebar">
                <div className="widget">
                    <h5 className="widget_title">Categories</h5>
                    <ul className="widget_categories">
                        <li>
                        <a href="#">
                            <span className="categories_name">Women</span>
                            <span className="categories_num">(9)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <span className="categories_name">Top</span>
                            <span className="categories_num">(6)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <span className="categories_name">T-Shirts</span>
                            <span className="categories_num">(4)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <span className="categories_name">Men</span>
                            <span className="categories_num">(7)</span>
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <span className="categories_name">Shoes</span>
                            <span className="categories_num">(12)</span>
                        </a>
                        </li>
                    </ul>
                </div>
                <div className="widget">
                    <h5 className="widget_title">Filter</h5>
                    <div className="filter_price">
                        <div
                        id="price_filter"
                        data-min={0}
                        data-max={500}
                        data-min-value={50}
                        data-max-value={300}
                        data-price-sign="$"
                        />
                        <div className="price_range">
                        <span>
                            Price: <span id="flt_price" />
                        </span>
                        <input type="hidden" id="price_first" />
                        <input type="hidden" id="price_second" />
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <h5 className="widget_title">Brand</h5>
                    <ul className="list_brand">
                        <li>
                        <div className="custome-checkbox">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="Arrivals"
                            defaultValue=""
                            />
                            <label className="form-check-label" htmlFor="Arrivals">
                            <span>New Arrivals</span>
                            </label>
                        </div>
                        </li>
                        <li>
                        <div className="custome-checkbox">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="Lighting"
                            defaultValue=""
                            />
                            <label className="form-check-label" htmlFor="Lighting">
                            <span>Lighting</span>
                            </label>
                        </div>
                        </li>
                        <li>
                        <div className="custome-checkbox">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="Tables"
                            defaultValue=""
                            />
                            <label className="form-check-label" htmlFor="Tables">
                            <span>Tables</span>
                            </label>
                        </div>
                        </li>
                        <li>
                        <div className="custome-checkbox">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="Chairs"
                            defaultValue=""
                            />
                            <label className="form-check-label" htmlFor="Chairs">
                            <span>Chairs</span>
                            </label>
                        </div>
                        </li>
                        <li>
                        <div className="custome-checkbox">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="Accessories"
                            defaultValue=""
                            />
                            <label className="form-check-label" htmlFor="Accessories">
                            <span>Accessories</span>
                            </label>
                        </div>
                        </li>
                    </ul>
                </div>
                <div className="widget">
                    <h5 className="widget_title">Size</h5>
                    <div className="product_size_switch">
                        <span>xs</span>
                        <span>s</span>
                        <span>m</span>
                        <span>l</span>
                        <span>xl</span>
                        <span>2xl</span>
                        <span>3xl</span>
                    </div>
                </div>
                <div className="widget">
                    <h5 className="widget_title">Color</h5>
                    <div className="product_color_switch">
                        <span data-color="#87554B" />
                        <span data-color="#333333" />
                        <span data-color="#DA323F" />
                        <span data-color="#2F366C" />
                        <span data-color="#B5B6BB" />
                        <span data-color="#B9C2DF" />
                        <span data-color="#5FB7D4" />
                        <span data-color="#2F366C" />
                    </div>
                </div>
                <div className="widget">
                    <div className="shop_banner">
                        <div className="banner_img overlay_bg_20">
                        <img
                            src="assets/images/sidebar_banner_img.jpg"
                            alt="sidebar_banner_img"
                        />
                        </div>
                        <div className="shop_bn_content2 text_white">
                            <h5 className="text-uppercase shop_subtitle">
                                New Collection
                            </h5>
                            <h3 className="text-uppercase shop_title">Sale 30% Off</h3>
                            <a
                                href="#"
                                className="btn btn-white rounded-0 btn-sm text-uppercase"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSidebar