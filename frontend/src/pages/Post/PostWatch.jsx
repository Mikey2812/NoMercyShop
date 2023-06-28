import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FormDisabled from '../../components/Post/FormDisabled';

const PostWatch = () => {
    const params = useParams();
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Post Details</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to={'/posts'}>Post</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Post details of ID: {params.id}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Post</h3>
                                </div>
                                <FormDisabled/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PostWatch