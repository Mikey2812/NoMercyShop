import React from 'react';
import { Link } from 'react-router-dom';
// import { UsersContainer} from '../components/Users/UsersContainer.js'
const User = () => {
    return (
        <div>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>List Users</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                            <Link to={'/admin'}>Home</Link>
                        </li>
                        <li className="breadcrumb-item active">Users</li>
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
                                {/* <UsersContainer/> */}
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

export default User