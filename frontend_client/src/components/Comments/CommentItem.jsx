import React, { useState } from 'react'
import moment from 'moment';
import CommentForm from './CommentForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentByID, showForm, isReplyComment, incrementLike, decrementLike } from '../../actions/comments';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { editCommentByID } from '../../actions/comments';

const CommentItem = ({_id, content, userId, type, path, numberLike, updatedAt, isLiked}) => {
    const navigate = useNavigate();
    const {acceptShowForm} = useSelector(state => state.global);
    const {user, isLoggedIn } = useSelector(state=>state.auth);
    const [isShowing, setIsShowing] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();
    const handleReplyBtn = (()=>{
        if(isLoggedIn) {
            dispatch(isReplyComment(_id));
            dispatch(showForm());
            setIsShowing(!isShowing);
        }
        else {
            navigate('/login');
        }
    });
    const handleLikeBtn = ((e)=>{
        if(isLoggedIn) {
            const element = e.currentTarget;
            const isActive = element.className.includes("active");
            if(isActive){
                dispatch(decrementLike(_id));
            }
            else {
                dispatch(incrementLike(_id));
            }
        }
        else {
            navigate('/login');
        }
    })
    const handleEditBtn = (()=>{
        setIsEdit(!isEdit);
    })
    const handleCancelBtn = (()=>{
        setIsEdit(false);
    })
    const handleDeleteComment =(()=>{
        try{
            dispatch(deleteCommentByID(path));     
            toast.success('Delete comment success');
        }
        catch{
            toast.error('Error');
        }
    });

    const formik = useFormik({
        initialValues: {
            content: content,
        },

        validationSchema: Yup.object().shape({
            content: Yup.string()
                .required('Content is required'),
        }),

        onSubmit: async (values, {resetForm}) => {
            if(values.content === content){
                setIsEdit(false);
                return;
            }
            dispatch(editCommentByID(_id, values))
            .then(() => {
                toast.success('Edit comment successful');
                setIsEdit(false);
            })
            .catch((error) => {
                toast.error(error);
            });
        }
    });

    return (
        <li className={`comment_info ${type === 1 ? 'children': ''}`}>
            <div className="d-flex">
                <div className="comment_user">
                    <img className='rounded-circle' src={userId.avatar || '/assets/images/avatar_default.jpg'} alt="avatar" />
                </div>
                <div className="comment_content w-100">
                    <div className="d-flex">
                        <div className="meta_data">
                            <h6>
                                <a href="#">{userId.firstname + ' ' + userId.lastname}</a>
                            </h6>
                            <div className='d-flex'>
                                <button className={`like-btn ${isLiked ? 'active ' : ''}d-flex align-items-center text-dark p-0 border-0 bg-white me-3`} onClick={((e)=>{
                                    handleLikeBtn(e);
                                })}>
                                    <i className="ion ion-heart me-1" />
                                    <span className='lh-1' style={{marginTop:'1px'}}>{numberLike}</span>
                                </button>
                                <div className="comment-time m-0 d-flex align-items-center" style={{textTransform:'unset'}}>
                                    {`${moment(updatedAt).fromNow(true)} ago`}
                                </div>
                            </div>               
                        </div>
                        <div className="ms-auto">
                            <button className="comment-reply border-0 bg-white" onClick={(()=>{
                                handleReplyBtn();
                            })}>
                                <i className="ion-reply-all" />
                                    Reply
                            </button>
                            {
                                ( user && userId._id === user._id) &&
                                <div className="dropdown cart_dropdown d-flex justify-content-end mt-3">
                                    <i className="ion-ios-more"> <span className='text-dark'> More</span></i>
                                    <div className="position-absolute dropdown-menu dropdown-menu-right end-0"
                                        style={{
                                            transition: 'all 0.25s ease-in-out', 
                                            transform: 'scale(0) !important', transformOrigin: 'calc(100% - 30px) 0',
                                            left:'unset',    
                                        }}>
                                        <ul className='list-unstyled d-flex justify-content-evenly' style={{minWidth: "12rem"}}>
                                            <li>
                                                <button className='btn btn-outline-warning p-2 m-1' onClick={(()=>{
                                                    handleEditBtn();
                                                })}>
                                                    <i className="ion-edit">Edit</i>
                                                </button>                                          
                                            </li>
                                            <li>
                                                <button className='btn btn-outline-danger p-2 m-1' onClick={(()=>{
                                                    handleDeleteComment();
                                                })}>
                                                    <i className="ion-trash-a">Delete</i>
                                                </button> 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            }
                            
                        </div>
                    </div>
                    {
                        !isEdit ? 
                        (
                            <p className='text-dark' style={{padding:'1px'}}>
                                {content}
                            </p>
                        ) :
                        (
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <input 
                                        type="text" 
                                        placeholder='Input new content'
                                        name='content' 
                                        value={formik.values.content}
                                        onChange={formik.handleChange}
                                    />
                                    <button className='btn btn-fill-out p-2 ms-3' type='submit'>Save</button>
                                    <button className='btn btn-fill-out p-2 ms-3' type='btn' onClick={handleCancelBtn}>Cancel</button>
                                </div>
                                {   formik.errors.content &&
                                            formik.touched.content &&
                                            (<span className='text-danger'>{formik.errors.content}</span>) 
                                }
                            </form>
                        )
                    }
                </div>
            </div>
            { acceptShowForm && isShowing && <CommentForm post_Id={params.id} type={1} path={path}/>}
        </li>
    )
}

export default CommentItem