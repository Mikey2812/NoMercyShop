import React from 'react'

const DeleteModal = () => {
    const click = (e) => {
        e.preventDefault();
        // if(values.name === '') {
        //     toast.warning("You must enter value !");
        // }
        // else {
        //     if(createCategories(values)) {
        //         toast.success("Add new category success !");
        //         setValues({ ...values, name: '' });
        //     }
        //     const closeButton = document.getElementById('closeButton'); 
        //     if (closeButton) {
        //         closeButton.click();
        //     }
        // }
    };
    return (
        <div>
            <div
                className='modal fade'
                id="deleteModal"
                tabIndex={-1}
                aria-labelledby="delete ModalLabel"
                aria-hidden="true"
            >
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="delete ModalLabel">
                    Delete Category
                </h1>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
                </div>
                <div className="modal-body">
                    Are you want to delete this category ?
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
                <button type="button" className="btn btn-danger" onClick={click}>
                    Delete
                </button>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default DeleteModal