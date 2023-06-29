import React, { useContext, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate, useParams } from 'react-router-dom';
import { PostsContext } from '../../contexts/contexts/postsContext';

const FormDisabled = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { getPostByID, data, isLoading } = useContext(PostsContext);
    useEffect(()=>{
        getPostByID(params.id);
    },[]);
    return (
        data &&
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
                        value={data._id}
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
                        value={data.title}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="slug">Slug</label>
                    <input
                        type="text"
                        className="form-control"
                        name='slug'
                        disabled
                        value={data.slug}
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
                        value={data.description}
                        >
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Content</label>
                    <CKEditor
                        editor={ ClassicEditor }
                        disabled
                        data={ data.content}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputFile">Avatar</label>
                    <div className='d-flex justify-content-center'>
                        <img src={`${process.env.REACT_APP_IMG_URL}/posts/${data.avatar}`} className='mw-100'/>
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
                            value={data.status}
                        />
                    </div>
                    <div className='col-3'>
                        <label htmlFor="view">View</label>
                        <input
                            type="text"
                            className="form-control"
                            name='view'
                            disabled
                            value={data.view}
                        />
                    </div>
                    <div className='col-3'>
                        <label htmlFor="number_like">Number Like</label>
                        <input
                            type="text"
                            className="form-control"
                            name='number_like'
                            disabled
                            value={data.number_like}
                        />
                    </div>
                    <div className='col-3'>
                        <label htmlFor="number_comment">Number Comment</label>
                        <input
                            type="text"
                            className="form-control"
                            name='number_comment'
                            disabled
                            value={data.number_comment}
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
                            value={data.createdAt}
                        />
                    </div>
                    <div className='col-6'>
                        <label htmlFor="updatedAt">Updated At</label>
                        <input
                            type="text"
                            className="form-control"
                            name='updatedAt'
                            disabled
                            value={data.updatedAt}
                        />
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button type='button' className='btn btn-secondary' onClick={() => {navigate('/posts')}}>Go back</button>
            </div>
        </form>
    )
}

export default FormDisabled