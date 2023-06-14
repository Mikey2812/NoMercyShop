import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useAppContext } from '../../contexts/appContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Validator from '../../utils/validator';

const initialState = {
    title: '',
    description: '',
    content: '',
    avatar: '',
};
const FormPost = () => {    
    const [values, setValues] = useState(initialState);
    const [avatar, setAvatar] = useState();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const { isLoading, isError, isEdit, message, createData, editData } = useAppContext();
    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values);
    };
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        setValues({ ...values, avatar: file });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', values.title);     
        formData.append('description', values.description);     
        formData.append('content', values.content);     
        formData.append('avatar', values.avatar);
        createData('posts', formData)
        .then(() => {
            console.log(isError);
            if (isError) {
                toast.error(message);
            } else {
                toast.success('Add new post Success!');
                navigate('/posts');
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };
    // useEffect(() => {
    //     if(!editData) {
    //         navigate('/posts');
    //     }
    //     else {
    //         setValues(editData);
    //     }
    //     console.log('value la');
    //     console.log(values);
    // }, [editData])    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter title"
                            name='title'
                            onChange={handleInput}
                            value={values.title}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <textarea 
                            className="form-control" 
                            rows="3" 
                            placeholder="Enter ..."
                            name="description"
                            onChange={handleInput}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Content</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={ values.content}
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setValues({ ...values, content: data });
                            } }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Avatar</label>
                        <input 
                            className="form-control" 
                            type="file" 
                            id="formFileMultiple" 
                            // multiple
                            onChange={handlePreviewAvatar}/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        {avatar &&  <img src={avatar.preview} className='mw-100'/> }
                    </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary" disabled={isLoading}>
                        {isEdit ? 'Edit Post' : 'Add New Post'}
                    </button>
                    <button type='button' className='btn btn-secondary ms-3' onClick={() => {navigate('/posts')}}>Go back</button>
                </div>
            </form>
        </div>
    )
}

export default FormPost