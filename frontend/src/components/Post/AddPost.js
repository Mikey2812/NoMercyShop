import React, { useContext, useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from 'react-router-dom';
import { useFormik, } from 'formik';
import * as Yup from "yup";
import { PostsContext } from '../../contexts/contexts/postsContext';

const AddPost = () => { 
    const {isLoading, createPost, getAllTopics, topics_list } = useContext(PostsContext); 
    const formik = useFormik({
        initialValues: {
            title: '',
            topic: '',
            description: '',
            content: '',
            avatar: null,
            avatarPreview: '',
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required("Title is required!"),
            description: Yup.string()
                .required("Description is required!"),    
            content: Yup.string()
                .required("Content is required!"),
            avatar: Yup.mixed().required('Avatar is required!'), 
            topic: Yup.string()
                .required("Topic is required!"),
        }),
        onSubmit: async values => {
            const formData = new FormData();
            formData.append('topic', values.topic);
            formData.append('title', values.title);     
            formData.append('description', values.description);     
            formData.append('content', values.content);     
            formData.append('avatar', values.avatar);
            await createPost(formData);
        }
    });  
    const navigate = useNavigate();
    useEffect(()=>{
        getAllTopics();
    },[]);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="card-body">
                    <div className="form-group">
                        <label>Topic name</label>
                        <select
                            className="form-select"
                            name="topic"
                            value={formik.values.topic}
                            onChange={formik.handleChange}
                        >
                            <option value="">Open this select menu</option>
                            {
                                topics_list.map((topic) => (
                                    <option value={topic._id} key={topic._id}>
                                        {topic.name}
                                    </option>
                                ))
                            }
                        </select>
                        {formik.errors.topic && formik.touched.topic && (
                            <p className='text-danger'>{formik.errors.topic}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter title"
                            name='title'
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.title && formik.touched.title && (
                                        <p className='text-danger'>{formik.errors.title}</p>
                                )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <textarea 
                            className="form-control" 
                            rows="3" 
                            placeholder="Enter ..."
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        >
                        </textarea>
                        {formik.errors.description && formik.touched.description && (
                                        <p className='text-danger'>{formik.errors.description}</p>
                                )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Content</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={ formik.values.content}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                formik.setFieldValue('content', data);
                            }}
                        />
                        {formik.errors.content && formik.touched.content && (
                                        <p className='text-danger'>{formik.errors.content}</p>
                                )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Avatar</label>
                        <input 
                            className="form-control" 
                            id="formFileMultiple" 
                            type="file"
                            name="avatar"
                            onChange={(event) => {
                                formik.setFieldValue('avatar', event.currentTarget.files[0]);
                                formik.setFieldValue('avatarPreview', URL.createObjectURL(event.currentTarget.files[0]));
                            }}
                        />
                        {formik.errors.avatar && formik.touched.avatar && (
                            <p className='text-danger'>{formik.errors.avatar}</p>
                        )}
                    </div>
                    <div className='d-flex justify-content-center'>
                        {formik.values.avatarPreview && (
                            <img src={formik.values.avatarPreview} alt="Avatar Preview" 
                                style={{ maxWidth: '300px' }} 
                            />
                        )}
                    </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary" disabled={isLoading}>
                        Add New Post
                    </button>
                    <button type='button' className='btn btn-secondary ms-3' onClick={() => {navigate('/posts')}}>Go back</button>
                </div>
            </form>
        </div>
    )
}

export default AddPost