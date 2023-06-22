import React, { useEffect } from 'react'
import { getPosts } from '../../actions/posts';
import { useSelector, useDispatch } from 'react-redux';
import PostItem from './PostItem';
import { useLocation } from 'react-router-dom';
import Paging from './Paging';

const ListPosts = () => {
    const { values, isLoading , numberValue, page} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchQuery = searchParams.get('search');
        dispatch(getPosts(searchQuery, page));
    }, [location, page]);

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
            <Paging/>
        </div>
    )
}

export default ListPosts