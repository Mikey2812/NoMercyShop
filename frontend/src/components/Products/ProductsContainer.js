import React, { useEffect, useState } from 'react';
import PageBtnContainer from '../Paging/PageBtnContainer';
import { useAppContext } from '../../contexts/appContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import Product from './Product';
const ProductsContainer = () => {

    const {
        getDatas,
        values,
        isLoading,
        page,
        totalCategories,
        numOfPages,
        showAlert,
        addModal,
    } = useAppContext();
    useEffect(() => {
        console.log('get');
        getDatas('products');
    }, [page]);
  
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">List Product</h3>
                    <div className="card-tools">
                        <div
                            className="input-group input-group-sm"
                            style={{ width: 150 }}
                        >
                            <input
                            type="text"
                            name="table_search"
                            className="form-control float-right"
                            placeholder="Search"
                            />
                            <div className="input-group-append">
                            <button type="submit" className="btn btn-default">
                                <i className="fas fa-search" />
                            </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='d-flex justify-content-end m-3'>
                    <button className='btn btn-outline-primary' data-bs-toggle="modal" data-bs-target="#addModal" onClick={() => {addModal()}}>
                            <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                {/* /.card-header */}
                <div className="card-body table-responsive p-0">
                    <table className="table table-bordered table-hover text-wrap text-center align-middle">
                    <thead>
                        <tr>
                            <th style={{ width: "5%" }}>ID</th>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th style={{ width: "30%" }}>Description</th>
                            <th style={{ width: "20%" }}>Image</th>
                            <th>Star</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Status</th>
                            <th style={{ width: "15%" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? 
                            (<tr><td>Loading</td></tr>) : 
                            values?.map((value) => {
                                 return <Product key={value._id} {...value} />;
                            })
                        }
                    </tbody>
                    </table>
                </div>
                <PageBtnContainer/>
            </div>
        </div>
    )
}

export default ProductsContainer;