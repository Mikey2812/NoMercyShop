import React from 'react'

const ListProducts = () => {
    return (
        <div className="row shop_container list">
            <div className="col-md-4 col-6">
                <div className="product">
                    <div className="product_img">
                    <a href="shop-product-detail.html">
                        <img
                        src="assets/images/product_img1.jpg"
                        alt="product_img1"
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
                        <a href="shop-product-detail.html">Blue Dress For Woman</a>
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
                        <div className="product_rate" style={{ width: "80%" }} />
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
                    <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                        <span className="active" data-color="#87554B" />
                        <span data-color="#333333" />
                        <span data-color="#DA323F" />
                        </div>
                    </div>
                    <div className="list_product_action_box">
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
                </div>
            </div>
            <div className="col-md-4 col-6">
            <div className="product">
                <div className="product_img">
                <a href="shop-product-detail.html">
                    <img
                    src="assets/images/product_img2.jpg"
                    alt="product_img2"
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
                    <a href="shop-product-detail.html">Lether Gray Tuxedo</a>
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
                    <div className="product_rate" style={{ width: "68%" }} />
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
                <div className="pr_switch_wrap">
                    <div className="product_color_switch">
                    <span className="active" data-color="#847764" />
                    <span data-color="#0393B5" />
                    <span data-color="#DA323F" />
                    </div>
                </div>
                <div className="list_product_action_box">
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
            </div>
            </div>
            <div className="col-md-4 col-6">
            <div className="product">
                <span className="pr_flash">New</span>
                <div className="product_img">
                <a href="shop-product-detail.html">
                    <img
                    src="assets/images/product_img3.jpg"
                    alt="product_img3"
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
                    <a href="shop-product-detail.html">woman full sliv dress</a>
                </h6>
                <div className="product_price">
                    <span className="price">$68.00</span>
                    <del>$99.00</del>
                </div>
                <div className="rating_wrap">
                    <div className="rating">
                    <div className="product_rate" style={{ width: "87%" }} />
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
                <div className="pr_switch_wrap">
                    <div className="product_color_switch">
                    <span className="active" data-color="#333333" />
                    <span data-color="#7C502F" />
                    <span data-color="#2F366C" />
                    <span data-color="#874A3D" />
                    </div>
                </div>
                <div className="list_product_action_box">
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
            </div>
            </div>
            <div className="col-md-4 col-6">
            <div className="product">
                <span className="pr_flash bg-danger">Hot</span>
                <div className="product_img">
                <a href="shop-product-detail.html">
                    <img
                    src="assets/images/product_img6.jpg"
                    alt="product_img6"
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
                    Blue casual check shirt
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
                    <div className="product_rate" style={{ width: "68%" }} />
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
                <div className="pr_switch_wrap">
                    <div className="product_color_switch">
                    <span className="active" data-color="#87554B" />
                    <span data-color="#333333" />
                    </div>
                </div>
                <div className="list_product_action_box">
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
            </div>
            </div>
            <div className="col-md-4 col-6">
            <div className="product">
                <span className="pr_flash bg-success">Sale</span>
                <div className="product_img">
                <a href="shop-product-detail.html">
                    <img
                    src="assets/images/product_img7.jpg"
                    alt="product_img7"
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
                    white black line dress
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
                    <div className="product_rate" style={{ width: "87%" }} />
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
                <div className="pr_switch_wrap">
                    <div className="product_color_switch">
                    <span className="active" data-color="#333333" />
                    <span data-color="#7C502F" />
                    <span data-color="#2F366C" />
                    </div>
                </div>
                <div className="list_product_action_box">
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
            </div>
            </div>
        </div>
    )
}

export default ListProducts