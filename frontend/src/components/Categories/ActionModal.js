import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useAppContext } from '../../contexts/contexts/appContext';
import {toast} from 'react-toastify'
let initialState = {
    name: '',
};

const ActionModal = () => {
    // debugger
    const {createCategories, modalData, isEdit } = useAppContext();
    const [values, setValues] = useState(initialState);
    if(isEdit){
        setValues({ ...values, name: modalData.name });
    }
    console.log(values);
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const click = (e) => {
        e.preventDefault();
        if(values.name === '') {
            toast.warning("You must enter value !");
        }
        else {
            if(isEdit) {

            }
            else {
                if(createCategories(values)) {
                    toast.success("Add new category success !");
                    setValues({ ...values, name: '' });
                }
            }
            const closeButton = document.getElementById('closeButton'); 
            if (closeButton) {
                closeButton.click();
            }
        }
    };
    return (
        <div>
            <div
                className='modal fade'
                id="addModal"
                tabIndex={-1}
                aria-labelledby="addModalLabel"
                aria-hidden="true"
            >
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="addModalLabel">
                    {isEdit ? 'Edit' : 'Add New'} Category
                </h1>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
                </div>
                <div className="modal-body">
                <form>
                    <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                        Name
                    </label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="Category Name" 
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                    />
                </div>
                </form>
                </div>
                <div className="modal-footer">
                <button
                    id='closeButton'
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                    Close
                </button>
                <button type="button" className="btn btn-primary" onClick={click}>
                    {isEdit ? 'Edit' : 'Add New'}
                </button>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default ActionModal