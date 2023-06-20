import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCommentsByPostID } from '../../actions/comments';
import CommentItem from './CommentItem';
const ListComment = ({post_Id}) => {
    const {comments, numberComments} = useSelector(state => state.comments);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCommentsByPostID(post_Id));
    }, [])
    return (
        (numberComments > 0) ?
        <ul className="list_none comment_list">
            {
                comments.map(comment => 
                    <CommentItem key={comment._id} {...comment}/>
                )
            }
        </ul> :
        <h5 className='w-100 text-center'>This post doesn't have any comment</h5>
    )
}

export default ListComment