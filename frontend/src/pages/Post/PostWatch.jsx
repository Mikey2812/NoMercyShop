import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FormDisabled from '../../components/Post/FormDisabled';

const PostWatch = () => {
    const params = useParams();
    return (
        <div>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
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
                    {/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            {/* left column */}
                            <div className="col-md-6">
                            {/* general form elements */}
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Post</h3>
                                    </div>
                                    {/* /.card-header */}
                                    {/* form start */}
                                    
                                    <FormDisabled/>
                                </div>
                            {/* /.card */}
                            </div>
                        {/* /.row */}
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

export default PostWatch