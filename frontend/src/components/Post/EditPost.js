import React, { useEffect, useContext } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate, useParams } from 'react-router-dom';
import { PostsContext } from '../../contexts/contexts/postsContext';
import { useFormik } from 'formik';
import * as Yup from "yup";

const EditPost = () => {    
    const { getPostByID, data, isLoading, editPost, getAllTopics, topics_list } = useContext(PostsContext);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getPostByID(params.id);
    },[]);

    useEffect(()=>{
        getAllTopics();
    },[]);

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
            topic: Yup.string()
                .required("Topic is required!"),
        }),
        onSubmit: async values => {
            const formData = new FormData();
            formData.append('topic', values.topic);
            formData.append('title', values.title);     
            formData.append('description', values.description);     
            formData.append('content', values.content);     
            if(values.avatar) {
                formData.append('avatar', values.avatar);
            }
            editPost(params.id, formData);
        }
    }); 

    useEffect(()=>{
        if(data) {
            formik.setValues({
                title: data.title,
                description: data.description,
                content: data.content,
                avatar: null,
                avatarPreview: '',
            });
        }
    },[data]);
    return (
        !isLoading &&
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
                        {topics_list.map((topic) => (
                            <option
                                value={topic._id}
                                key={topic._id}
                            >
                                {topic.name}
                            </option>
                        ))}
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
                    {formik.errors.title && formik.touched.content && (
                                    <p className='text-danger'>{formik.errors.content}</p>
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
                        editor = { ClassicEditor }
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
                {formik.values.avatarPreview && (
                    <div>
                            <h6 className='font-weight-bold'>New Image</h6>
                        <div className='d-flex justify-content-center'>
                            <img src={formik.values.avatarPreview} alt="Avatar Preview" 
                                style={{ maxWidth: '300px' }} 
                                />
                        </div>
                    </div>
                )}
                {data &&
                    <div>
                        <h6 className='font-weight-bold'>Old Image</h6>
                        <div className='d-flex justify-content-center'>
                            <img src={`${process.env.REACT_APP_IMG_URL}/posts/${data.avatar}`} alt="Avatar Preview" 
                                style={{ maxWidth: '300px' }} 
                            />
                        </div>
                    </div>
                }
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