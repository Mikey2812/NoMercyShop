import React from 'react'
import { useAppContext } from '../../contexts/contexts/appContext'

const WatchModal = () => {
    const { modalData } = useAppContext();
    return (
        <div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Category Information
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
                        <label htmlFor="id" className="col-form-label">
                            ID:
                        </label>
                        <input type="text" className="form-control" value={modalData._id} disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="col-form-label">
                            Name:
                        </label>
                        <input type="text" className="form-control" value={modalData.name} disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="col-form-label">
                            Slug:
                        </label>
                        <input type="text" className="form-control" value={modalData.slug} disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="col-form-label">
                            Status:
                        </label>
                        <input type="text" className="form-control" value={modalData.status} disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="created_At" className="col-form-label">
                            Created_At:
                        </label>
                        <input type="text" className="form-control" value={modalData.createdAt} disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="updated_At" className="col-form-label">
                            Updated_At:
                        </label>
                        <input type="text" className="form-control" value={modalData.updatedAt} disabled />
                    </div>
                </form>
                </div>
                <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                    Close
                </button>
                <button type="button" className="btn btn-primary">
                    Submit
                </button>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default WatchModal