import React, { useEffect, useState } from 'react'
import User from './User';
import axios from 'axios';

const UsersContainer = () => {
    const [loading, setLoading] = useState(true);
    const [users, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
        setLoading(true);
        try {
            const {data: response} = await axios.get('http://localhost:8080/api/admin/users');
            setData(response.data);
        } catch (error) {
            console.error(error.message);
        }
            setLoading(false);
        }

        fetchData();
    }, []);
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">List Users</h3>
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
                {/* /.card-header */}
                <div className="card-body table-responsive p-0">
                    <table className="table table-bordered table-hover text-nowrap">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Sex</th>
                            <th>Satus</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? 
                            (<tr><td>Loading</td></tr>) : 
                            users.map((user) => {
                                return <User key={user._id} {...user} />;
                            })
                        }
                    </tbody>
                    </table>
                </div>
                {/* /.card-body */}
                <div className="card-footer clearfix">
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
                </div>
            </div>
            {/* /.card */}
        </div>
    )
}

export default UsersContainer