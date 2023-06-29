import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
// import EditTopic from '../../components/Topic/EditTopic';
import AddTopic from '../../components/Topics/AddTopic';

const TopicAction = () => {
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
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>{action==='add' ? 'Add New Topic' : 'Edit Topic'}</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link to={''}>Home</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to={'/topics'}>Topic</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    {action === 'add' ? 'Add New Topic' : `Edit Topic of ID: ${params.id}`}
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
                                    <h3 className="card-title">Topic</h3>
                                </div>
                                <AddTopic/>
                                {/* {action === 'edit' ? <EditTopic/> : <AddTopic/>} */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TopicAction 