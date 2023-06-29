import React, {memo, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faEye, faTrash} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { PostsContext } from '../../contexts/contexts/postsContext';
import { convertFormTimeStamp } from '../../utils/formatTimestamp';

const Post = ({
    _id,
    name,
    numberPost,
    status, 
    createdAt,
    updatedAt,
}) => {
    // const {deletePost, changeStatus} = useContext(PostsContext);
    const navigate = useNavigate();
    const handleDeleteConfirmation = (_id) => {
        const result = window.confirm('Are you sure you want to delete this Post?');
        if (result) {
            // deletePost(_id);
        }
    };
    const handlechangeStatus = (_id) => {
        (status === 0) ? status = 1 : status = 0;
        // changeStatus(_id, status);
    } 
    return (
        <tr>
            <td className='align-middle' style={{paddingLeft:"0.75rem"}}>{_id}</td>
            <td className='align-middle'>{name}</td>
            <td className='align-middle'>{numberPost}</td>
            <td className='align-middle'>
                <div onClick={()=>{handlechangeStatus(_id)}}>
                    {
                        (status === 1) ? 
                        <span className="badge text-bg-success">Active</span> : 
                        <span className="badge text-bg-danger">Block</span>
                    }
                </div>
            </td>
            <td className='align-middle'>{convertFormTimeStamp(createdAt)}</td>
            <td className='align-middle'>{convertFormTimeStamp(updatedAt)}</td>
            <td className='align-middle' style={{paddingRight:"0.75rem"}}>
                {/* <button className='btn btn-outline-success mx-2'
                    onClick={()=>{navigate(`/posts/${_id}`)}}>
                        <FontAwesomeIcon icon={faEye} />
                </button> */}
                <button className='btn btn-outline-warning mx-2' disabled onClick={() => {
                    navigate(`/posts/edit/${_id}`);
                }}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className='btn btn-outline-danger mx-2' disabled onClick={() => handleDeleteConfirmation(_id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    )
}

export default memo (Post)