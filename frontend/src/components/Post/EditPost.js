import React, { useEffect, useState, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useAppContext } from '../../contexts/appContext';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditPost = () => {    
    const params = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [avatar, setAvatar] = useState();

    const { isLoading, getDataByID, recordSelected, srcImg, editData, message } = useAppContext();
    useEffect(() => {
        getDataByID(params.id,'posts');
    }, []);
    useEffect(() => {
        if (recordSelected){
            setTitle(recordSelected.title);
            setDescription(recordSelected.description);
            setContent(recordSelected.content);
        }
    }, [recordSelected]);
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);     
        formData.append('description', description);     
        formData.append('content', content);  
        if(avatar) {
            formData.append('avatar', avatar);
        }
        editData(params.id, 'posts', formData)
        .then(() => {
            toast.success('Edit post Success!');
            navigate('/posts');
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        recordSelected &&
        <form onSubmit={handleSubmit}>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter title"
                        name='title'
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <textarea 
                        className="form-control" 
                        rows="3" 
                        placeholder="Enter ..."
                        name="description"
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                    >
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Content</label>
                    <CKEditor
                        editor = { ClassicEditor }
                        data = { content}
                        onChange = {(event, editor) => {
                            const data = editor.getData();
                            setContent(data);
                        }}
                        // onBlur = {(event, editor) => {
                        //     const data = editor.getData();
                        //     setContent(data);
                        // }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputFile">Avatar</label>
                    <input 
                        className="form-control" 
                        type="file" 
                        id="formFileMultiple" 
                        // value={values.avatar}
                        onChange={handlePreviewAvatar}/>
                </div>
                <div className='d-flex justify-content-center'>
                    <img src={`${srcImg}/posts/${recordSelected.avatar}`} className='mw-100'/>
                </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    Edit Post
                </button>
                <button type='button' className='btn btn-secondary ms-3' onClick={() => {navigate('/posts')}}>Go back</button>
            </div>
        </form>
    )
}

export default EditPost