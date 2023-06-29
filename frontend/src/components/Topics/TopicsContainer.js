import {React, memo, useContext, useEffect} from 'react';
import PageBtnContainer from '../Paging/PageBtnContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { TopicsContext } from '../../contexts/contexts/topicsContext';
import Topic from './Topic';

const TopicsContainer = () => {

    const navigate = useNavigate();
    const {isLoading, datas, getTopics, numberDatas, numOfPages, limit, page, changePage} = useContext(TopicsContext);

    useEffect(() => {
        getTopics();
    }, [page]);

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">List Topics</h3>
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
                    <button className='btn btn-outline-primary' onClick={() => { navigate('/topics/add') }}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className="card-body table-responsive p-0">
                    <table className="table table-bordered table-hover text-wrap text-center align-middle">
                    <thead>
                        <tr>
                            <th style={{ width: "10%" }}>ID</th>
                            <th style={{ width: "20%" }}>Name</th>
                            <th style={{ width: "10%" }}>Number Post</th>
                            <th style={{ width: "10%" }}>Status</th>
                            <th style={{ width: "20%" }}>Created At</th>
                            <th style={{ width: "20%" }}>Updated At</th>
                            <th style={{ width: "10%" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? 
                            (<tr><td colSpan={8}>Loading</td></tr>) : 
                            numberDatas === 0 ?
                            (<tr><td colSpan={8}>No more topics</td></tr>) :
                            datas?.map((data) => {
                                 return <Topic key={data._id} {...data} />;
                            })
                        }
                    </tbody>
                    </table>
                </div>
                <PageBtnContainer numOfPages={numOfPages} limit={limit} page={page} totalValue={numberDatas} changePage={changePage}/>
            </div>
        </div>
    )
}

export default memo (TopicsContainer)