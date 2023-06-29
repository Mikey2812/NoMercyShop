import React from 'react';
import { Link } from 'react-router-dom';
import TopicsContainer from '../../components/Topics/TopicsContainer';
const Topic = () => {
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>List Topics</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active">Topics</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <TopicsContainer/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Topic