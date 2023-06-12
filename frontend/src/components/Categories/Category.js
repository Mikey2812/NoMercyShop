import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faEye, faTrash} from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../../contexts/appContext';
import { toast } from 'react-toastify';
import moment from 'moment';

const Category = ({
    _id,
    name,
    slug,
    status,
    createdAt,
    updatedAt,
}) => {
    const { message, watchModal, editModal, deleteCategory } = useAppContext();
    const handleDeleteConfirmation = (_id) => {
        console.log(123123);
        const result = window.confirm('Are you sure you want to delete this category?');
        if (result) {
            if(deleteCategory(_id)){
                toast.success(`${message}`);
            }
        }
    };
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{slug}</td>
            <td>{(status === 1) ? <span className="badge text-bg-success">Active</span> : <span className="badge text-bg-danger">Block</span>}</td>
            <td>{moment(createdAt).format('hh:A DD-MM-YYYY')}</td>
            <td>{moment(updatedAt).format('hh:A DD-MM-YYYY')}</td>
            <td>
                <button className='btn btn-outline-success mx-2' 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal"
                    onClick={() => watchModal({
                            _id,
                            name,
                            slug,
                            status,
                            createdAt,
                            updatedAt,
                        })
                    }
                 >
                        <FontAwesomeIcon icon={faEye} />
                </button>
                <button className='btn btn-outline-warning mx-2'
                    data-bs-toggle="modal" 
                    data-bs-target="#addModal"
                    onClick={() => editModal({
                            _id,
                            name,
                            slug,
                            status,
                            createdAt,
                            updatedAt,
                        })
                }>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className='btn btn-outline-danger mx-2' onClick={() => handleDeleteConfirmation(_id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    )
}

export default Category