import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faEye, faTrash} from '@fortawesome/free-solid-svg-icons';

const User = ({
    _id,
    firstName,
    lastName,
    email,
    location,
    sex,
    status
}) => {
    return (
        <tr>
            <td>{_id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{location}</td>
            <td>{(sex === 1) ? "Nam" : "Nữ"}</td>
            <td>{(status === 1) ? "Active" : "Block"}</td>
            <td>
                <button className='btn btn-outline-success mx-2'><FontAwesomeIcon icon={faEye} /></button>
                <button className='btn btn-outline-warning mx-2'><FontAwesomeIcon icon={faEdit} /></button>
                <button className='btn btn-outline-danger mx-2'><FontAwesomeIcon icon={faTrash} /></button>
            </td>
        </tr>
    )
}

export default User