import {React, memo, useContext, useEffect} from 'react';
import PageBtnContainer from '../Paging/PageBtnContainer';
import Post from './Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { PostsContext } from '../../contexts/contexts/postsContext';

const PostsContainer = () => {

    const navigate = useNavigate();
    const {isLoading, posts, getPosts, numberPosts, numOfPages, limit, page, changePage} = useContext(PostsContext);

    useEffect(() => {
        getPosts();
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
                    <button className='btn btn-outline-primary' onClick={() => { navigate('/posts/add') }}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className="card-body table-responsive p-0">
                    <table className="table table-bordered table-hover text-wrap text-center align-middle">
                    <thead>
                        <tr>
                            <th style={{ width: "5%" }}>ID</th>
                            <th style={{ width: "20%" }}>Title</th>
                            <th style={{ width: "20%" }}>Slug</th>
                            <th style={{ width: "10%" }}>Description</th>
                            <th style={{ width: "10%" }}>Content</th>
                            <th style={{ width: "15%" }}>Image</th>
                            <th style={{ width: "5%" }}>Status</th>
                            <th style={{ width: "15%" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? 
                            (<tr><td colSpan={8}>Loading</td></tr>) : 
                            numberPosts === 0 ?
                            (<tr><td colSpan={8}>No more post</td></tr>) :
                            posts?.map((post) => {
                                 return <Post key={post._id} {...post} />;
                            })
                        }
                    </tbody>
                    </table>
                </div>
                <PageBtnContainer numOfPages={numOfPages} limit={limit} page={page} totalValue={numberPosts} changePage={changePage}/>
            </div>
        </div>
    )
}

export default memo (PostsContainer)