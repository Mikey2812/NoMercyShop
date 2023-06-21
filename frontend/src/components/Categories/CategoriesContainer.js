import React, { useEffect, useState } from 'react';
import Category from './Category';
import PageBtnContainer from '../Paging/PageBtnContainer';
import WatchModal from './WatchModal';
import ActionModal from './ActionModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../../contexts/appContext';
import DeleteModal from './DeleteModal';
const CategoriesContainer = () => {

    const {
        showModal,
        getCategories,
        categories,
        isLoading,
        page,
        totalCategories,
        numOfPages,
        showAlert,
        addModal,
    } = useAppContext();
    useEffect(() => {
        getCategories();
    }, [page]);
  
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">List Categories</h3>
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
                    <table className="table table-bordered table-hover text-nowrap text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? 
                            (<tr><td>Loading</td></tr>) : 
                            categories.map((category) => {
                                 return <Category key={category._id} {...category} />;
                            })
                        }
                    </tbody>
                    </table>
                </div>
                {/* /.card-body */}
                {/* <div className="card-footer clearfix">
                    <div className='float-left'>
                        {totalCategories} Value
                    </div>
                    <ul className="pagination pagination-sm m-0 float-right">
                        <li className="page-item">
                            <a className="page-link" href="#">
                            «
                            </a>
                        </li>
                        <li className="page-item">
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
                            »
                            </a>
                        </li>
                    </ul>
                </div> */}
                <PageBtnContainer/>
            </div>
            {/* /.card */}
            <WatchModal/>
            {/* <ActionModal/> */}
            {/* <DeleteModal/> */}
        </div>
    )
}

export default CategoriesContainer;