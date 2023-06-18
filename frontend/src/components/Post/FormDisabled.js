import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppContext } from '../../contexts/appContext'


const FormDisabled = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { getDataByID, recordSelected, srcImg } = useAppContext();
    useEffect(()=>{
        getDataByID(params.id, 'posts')
    },[]);
    return (
        recordSelected &&
        <form>
                <div className="card-body">
                <div className="form-group">
                        <label htmlFor="_id">ID</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter title"
                            name='title'
                            disabled
                            value={recordSelected._id}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter title"
                            name='title'
                            disabled
                            value={recordSelected.title}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="slug">Slug</label>
                        <input
                            type="text"
                            className="form-control"
                            name='slug'
                            disabled
                            value={recordSelected.slug}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <textarea 
                            className="form-control" 
                            rows="3" 
                            placeholder="Enter ..."
                            name="description"
                            disabled
                            value={recordSelected.description}
                            >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Content</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            disabled
                            data={ recordSelected.content}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Avatar</label>
                        <div className='d-flex justify-content-center'>
                            <img src={`${srcImg}/posts/${recordSelected.avatar}`} className='mw-100'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-3'>
                            <label htmlFor="status">Status</label>
                            <input
                                type="text"
                                className="form-control"
                                name='status'
                                disabled
                                value={recordSelected.status}
                            />
                        </div>
                        <div className='col-3'>
                            <label htmlFor="view">View</label>
                            <input
                                type="text"
                                className="form-control"
                                name='view'
                                disabled
                                value={recordSelected.view}
                            />
                        </div>
                        <div className='col-3'>
                            <label htmlFor="number_like">Number Like</label>
                            <input
                                type="text"
                                className="form-control"
                                name='number_like'
                                disabled
                                value={recordSelected.number_like}
                            />
                        </div>
                        <div className='col-3'>
                            <label htmlFor="number_comment">Number Comment</label>
                            <input
                                type="text"
                                className="form-control"
                                name='number_comment'
                                disabled
                                value={recordSelected.number_comment}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <label htmlFor="createdAt">Created At</label>
                            <input
                                type="text"
                                className="form-control"
                                name='createdAt'
                                disabled
                                value={recordSelected.createdAt}
                            />
                        </div>
                        <div className='col-6'>
                            <label htmlFor="updatedAt">Updated At</label>
                            <input
                                type="text"
                                className="form-control"
                                name='updatedAt'
                                disabled
                                value={recordSelected.updatedAt}
                            />
                        </div>
                    </div>
                </div>
                
                {/* /.card-body */}
                <div className="card-footer">
                    <button type='button' className='btn btn-secondary' onClick={() => {navigate('/posts')}}>Go back</button>
                </div>
        </form>
    )
}

export default FormDisabled