import React from 'react'
import ProductSidebar from '../../components/Products/ProductSidebar'
import ListProducts from '../../components/Products/ListProducts'

const Products = () => {
    return (
        <div className="main_content">
            {/* START SECTION SHOP */}
            <div className="section">
                <div className="container">
                <div className="row">
                    <ProductSidebar/>
                    <div className="col-lg-9">
                    <div className="row align-items-center mb-4 pb-1">
                        <div className="col-12">
                        <div className="product_header">
                            <div className="product_header_left">
                                <div className="custom_select">
                                    <select className="form-control form-control-sm">
                                    <option value="order">Default sorting</option>
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="date">Sort by newness</option>
                                    <option value="price">Sort by price: low to high</option>
                                    <option value="price-desc">
                                        Sort by price: high to low
                                    </option>
                                    </select>
                                </div>
                            </div>
                            <div className="product_header_right">
                            <div className="products_view">
                                <a
                                // href="javascript:Void(0);"
                                className="shorting_icon grid"
                                >
                                <i className="ti-view-grid" />
                                </a>
                                <a
                                // href="javascript:Void(0);"
                                className="shorting_icon list active"
                                >
                                <i className="ti-layout-list-thumb" />
                                </a>
                            </div>
                            <div className="custom_select">
                                <select className="form-control form-control-sm">
                                <option value="">Showing</option>
                                <option value={9}>9</option>
                                <option value={12}>12</option>
                                <option value={18}>18</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <ListProducts/>
                    <div className="row">
                        <div className="col-12">
                        <ul className="pagination mt-3 justify-content-center pagination_style1">
                            <li className="page-item active">
                            <a className="page-link" href="#">
                                1
                            </a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                            </li>
                            <li className="page-item">
                            <a className="page-link" href="#">
                                <i className="linearicons-arrow-right" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* END SECTION SHOP */}
        </div>
    )
}

export default Products