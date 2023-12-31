import React, { useEffect } from 'react'
import { getPosts } from '../../redux/actions/posts';
import { useSelector, useDispatch } from 'react-redux';
import PostItem from './PostItem';
import { useLocation } from 'react-router-dom';
import Paging from './Paging';

const ListPosts = () => {
    const { values, isLoading , numberValue, page} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');
    useEffect(() => {
        dispatch(getPosts(searchQuery, page));
    }, [location, page]);

    return (
        <div className="col-lg-9">
            <div className="row">
                {
                    searchQuery && <h2 className='text_default mt-3'>Show search results for '{searchQuery}': {numberValue} Posts</h2>
                }
                {
                    (numberValue > 0) ?
                    values.map(post => 
                        <PostItem key={post._id} {...post}/>
                    ) : 
                    <h3 className='text-center mt-3'>No more posts</h3>
                }
            </div>
            {
                (numberValue > 0) && <Paging/>
            }
        </div>
    )
}

export default ListPosts