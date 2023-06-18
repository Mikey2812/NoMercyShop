import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import EditPost from '../../components/Post/EditPost';
import AddPost from '../../components/Post/AddPost';

const PostAction = () => {
    const location = useLocation();
    const params = useParams();
    const segments = location.pathname.split('/');
    let action = '';
    if (segments.includes('add')) {
        action = 'add';
    } else if (segments.includes('edit')) {
        action = 'edit';
    }
    const navigate = useNavigate();
    return (
        <div>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1>{action==='add' ? 'Add New Post' : 'Edit Post'}</h1>
                        </div>
                        <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                                <Link to={''}>Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to={'/posts'}>Post</Link>
                            </li>
                            <li className="breadcrumb-item active">
                                {action==='add' ? 'Add New Post' : `Edit Post of ID: ${params.id}`}
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
                                    
                                    {action === 'edit' ? <EditPost/> : <AddPost/>}
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

export default PostAction 