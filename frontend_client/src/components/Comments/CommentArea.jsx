import React from 'react';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import ListComment from './ListComment';

const CommentArea = ({post_Id}) => {
    const {numberComments} = useSelector(state => state.comments);
    return (
        <div className="comment-area">
            <div className="content_title">
                <h5>({numberComments}) Comments</h5>
            </div>
            <div className="content_title">
                <h5>Write a comment</h5>
            </div>
            <CommentForm post_Id={post_Id} type={0} path={post_Id}/>
            <ListComment post_Id={post_Id}/>
        </div>
    )
}

export default CommentArea