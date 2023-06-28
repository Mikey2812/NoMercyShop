import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faEye, faTrash} from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../../contexts/contexts/appContext';
const Product = ({_id, category, name, slug, description, image, star, price, discount, status}) => {
    const {srcImg} = useAppContext();
    const handleDeleteConfirmation = (_id) => {
        // console.log(123123);
        // const result = window.confirm('Are you sure you want to delete this Product?');
        // if (result) {
        //     if(deleteProduct(_id)){
        //         toast.success(`${message}`);
        //     }
        // }
    };
    return (
        <tr>
            <td className='align-middle' style={{padding: "12px"}}>{_id}</td>
            <td className='align-middle'>{category}</td>
            <td className='align-middle'>{name}</td>
            <td className='align-middle'>{slug}</td>
            <td className='align-middle'>{description}</td>
            <td className='align-middle'>
                <img src={image ? (srcImg+image) : "/assets/img/NoImages.png"} style={{maxWidth:"200px", maxHeight:"200px"}}/>
            </td>
            <td className='align-middle'>{star}</td>
            <td className='align-middle'>{price}</td>
            <td className='align-middle'>{discount}</td>
            <td className='align-middle'>{(status === 1) ? <span className="badge text-bg-success">Active</span> : <span className="badge text-bg-danger">Block</span>}</td>
            <td className='align-middle' style={{padding: "12px"}}>
                <button className='btn btn-outline-success mx-2' 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal"
                    // onClick={() => watchModal({
                    //         _id,
                    //         name,
                    //         slug,
                    //         status,
                    //         createdAt,
                    //         updatedAt,
                    //     })
                    // }
                 >
                        <FontAwesomeIcon icon={faEye} />
                </button>
                <button className='btn btn-outline-danger mx-2' onClick={() => handleDeleteConfirmation(_id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    )
}

export default Product