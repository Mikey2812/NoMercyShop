import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { createComment, blockForm } from '../../actions/comments';
import { useNavigate } from 'react-router-dom';

const CommentForm = ({post_Id, type, path}) => {
    const navigate = useNavigate();
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            content: '',
            postId: post_Id,
            type: type,
            path: path,
        },

        validationSchema: Yup.object().shape({
            content: Yup.string()
                .required('Content is required'),
        }),

        onSubmit: async (values, {resetForm}) => {
            if(isLoggedIn){
                dispatch(createComment(values, type))
                .then(() => {
                    toast.success('Add new comment successful');
                    resetForm();
                })
                .catch((error) => {
                    toast.error('error');
                });
                dispatch(blockForm());
            }
            else{
                navigate('/login');
            }
        }
    });

    return (
        <form className="field_form" name="enq" onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="user_info col-md-2 mb-3">
                    <div className='user_avatar d-flex justify-content-center'>
                        <img className='rounded-circle' 
                            style={{maxWidth:'6rem', padding:'10px'}} 
                            src={ user?.avatar || '/assets/images/avatar_default.jpg' }>
                        </img>
                    </div>
                </div>
                <div className="form-group col-md-10 mb-3">
                    <textarea
                        rows={3}
                        name="content"
                        type="text"
                        className="form-control"
                        placeholder="Your Comment"
                        value={formik.values.content}
                        onChange={formik.handleChange}
                    />
                    {   formik.errors.content &&
                                            formik.touched.content &&
                                            (<span className='text-danger'>{formik.errors.content}</span>) }
                </div>
                <div className="d-flex justify-content-end form-group col-md-12 mb-3">
                    <button
                        value="Submit"
                        name="submit"
                        className="btn btn-fill-out"
                        title="Submit Your Message!"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CommentForm