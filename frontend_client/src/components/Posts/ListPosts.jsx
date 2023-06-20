import React, { useEffect } from 'react'
import { getPosts } from '../../actions/posts';
import { useSelector, useDispatch } from 'react-redux';
import PostItem from './PostItem';

const ListPosts = () => {
    const { values, isLoading , numberValue} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [])

    return (
        <div className="col-lg-9">
            <div className="row">
                {
                    (numberValue > 0) ?
                    values.map(post => 
                        <PostItem key={post._id} {...post}/>
                    ) : 
                    'No more post'
                }
            </div>
            <div className="row">
            <div className="col-12 mt-2 mt-md-4">
                <ul className="pagination pagination_style1 justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1}>
                    <i className="linearicons-arrow-left" />
                    </a>
                </li>
                <li className="page-item active">
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
                    <i className="linearicons-arrow-right" />
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default ListPosts