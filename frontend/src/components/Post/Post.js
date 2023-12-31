import React, {memo, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faEye, faTrash} from '@fortawesome/free-solid-svg-icons';
// import { useAppContext } from '../../contexts/contexts/appContext'
import { useNavigate } from 'react-router-dom';
import { PostsContext } from '../../contexts/contexts/postsContext';

const Post = ({
    _id,
    title,
    slug,
    description,
    content,
    avatar,
    status,
    topic,
}) => {
    const {deletePost, changeStatus} = useContext(PostsContext);
    const navigate = useNavigate();
    const handleDeleteConfirmation = (_id) => {
        const result = window.confirm('Are you sure you want to delete this Post?');
        if (result) {
            deletePost(_id);
        }
    };
    const handlechangeStatus = (_id) => {
        (status === 0) ? status = 1 : status = 0;
        changeStatus(_id, status);
    } 
    return (
        <tr>
            <td className='align-middle text-break' style={{paddingLeft:"0.75rem"}}>{_id}</td>
            <td className='align-middle'>{topic.topic_name}</td>
            <td className='align-middle'>{title}</td>
            <td className='align-middle'>{slug}</td>
            <td className='align-middle'>
                Click icon "eye" to watch more
            </td>
            <td className='align-middle'>
                Click icon "eye" to watch more
            </td>
            <td className='align-middle'>
                <img src={avatar ? (process.env.REACT_APP_IMG_URL+'posts/'+avatar) : "/assets/img/NoImages.png"} 
                    style={{maxWidth:"200px", maxHeight:"200px"}}>
                </img>
            </td>
            <td className='align-middle'>
                <div onClick={()=>{handlechangeStatus(_id)}}>
                    {
                        (status === 1) ? 
                        <span className="badge text-bg-success">Active</span> : 
                        <span className="badge text-bg-danger">Block</span>
                    }
                </div>
            </td>
            <td className='align-middle' style={{paddingRight:"0.75rem"}}>
                <button className='btn btn-outline-success mx-2'
                    onClick={()=>{navigate(`/posts/${_id}`)}}>
                        <FontAwesomeIcon icon={faEye} />
                </button>
                <button className='btn btn-outline-warning mx-2' onClick={() => {
                    navigate(`/posts/edit/${_id}`);
                }}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className='btn btn-outline-danger mx-2' onClick={() => handleDeleteConfirmation(_id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    )
}

export default memo (Post)