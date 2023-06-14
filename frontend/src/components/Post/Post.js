import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faEye, faTrash} from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../../contexts/appContext';
import { useNavigate } from 'react-router-dom';

const Post = ({
    _id,
    title,
    slug,
    description,
    content,
    avatar,
    status,
}) => {
    const { srcImg, formEdit } = useAppContext();
    const navigate = useNavigate();
    const handleDeleteConfirmation = (_id) => {
        // console.log(123123);
        // const result = window.confirm('Are you sure you want to delete this Post?');
        // if (result) {
        //     if(deletePost(_id)){
        //         toast.success(`${message}`);
        //     }
        // }
    };
    return (
        <tr>
            <td className='align-middle' style={{paddingLeft:"0.75rem"}}>{_id}</td>
            <td className='align-middle'>{title}</td>
            <td className='align-middle'>{slug}</td>
            <td className='align-middle'>{description}</td>
            <td className='align-middle'>{'Show more'}</td>
            <td className='align-middle'><img src={avatar ? (srcImg+'posts/'+avatar) : "/assets/img/NoImages.png"} style={{maxWidth:"200px", maxHeight:"200px"}}></img></td>
            <td className='align-middle'>{(status === 1) ? <span className="badge text-bg-success">Active</span> : <span className="badge text-bg-danger">Block</span>}</td>
            <td className='align-middle' style={{paddingRight:"0.75rem"}}>
                <button className='btn btn-outline-success mx-2'>
                        <FontAwesomeIcon icon={faEye} />
                </button>
                <button className='btn btn-outline-warning mx-2' onClick={() => {
                    formEdit({_id, title, description, content});
                    navigate(`/posts/edit/${slug}`);
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

export default Post