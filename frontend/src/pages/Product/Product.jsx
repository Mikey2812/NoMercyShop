import React from 'react'
import { Link } from 'react-router-dom';
import ProductsContainer from '../components/Products/ProductsContainer'

const Product = () => {
    return (
        <div>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>List Products</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className="breadcrumb-item active">Products</li>
                        </ol>
                    </div>
                    </div>
                </div>
                {/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <ProductsContainer/>
                            </div>
                        </div>
                    </div>
                {/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}
        </div>
    )
}

export default Product