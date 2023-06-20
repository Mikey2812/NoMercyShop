import {
    CREATE_DATA_BEGIN, CREATE_DATA_SUCCESS, CREATE_DATA_ERROR,
    GET_COMMENTS_SUCCESS,
    ACCEPT_SHOW_FORM,
    NOT_ACCEPT_SHOW_FORM,
    DELETE_COMMENT_SUCCESS,
    IS_REPLY_COMMENT,
    EDIT_COMMENT_SUCCESS,
} from "./types"
import CommentService from "../services/comment.service"
const user = JSON.parse(localStorage.getItem('user'));

    export const createComment = (data, type) => async (dispatch) => {
        try {

            const res = await CommentService.createComment(data);
            const newComments = res.data.data;
            newComments.userId = {
                _id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
            };
            dispatch({
                type: CREATE_DATA_SUCCESS,
                payload: { 
                    newData: newComments,
                    type: type,
                },
            });
        } catch (err) {
            console.log(err);
        }
    }

    export const showForm = () => async (dispatch) => {
        try {
            dispatch({
                type: ACCEPT_SHOW_FORM,
            });
    
        } catch (err) {
            console.log(err);
        }
    }

    export const blockForm = () => async (dispatch) => {
        try {
            dispatch({
                type: NOT_ACCEPT_SHOW_FORM,
            });
    
        } catch (err) {
            console.log(err);
        }
    }
    
    export const isReplyComment = (_id) => async (dispatch) => {
        try {
            dispatch({
                type: IS_REPLY_COMMENT,
                payload: {
                    replyId: _id,
                }
            });
    
        } catch (err) {
            console.log(err);
        }
    }

    export const getCommentsByPostID = (postId) => async (dispatch) => {
        try {
            const res = await CommentService.getCommentsByPostID(postId);
            dispatch({
                type: GET_COMMENTS_SUCCESS,
                payload: { 
                    comments: res.data.comments,
                    numberComments: res.data.numberComments,
                },
            });
    
        } catch (err) {
            console.log(err);
        }
    }

    export const editCommentByID = (_id, data) => async (dispatch) => {
        try {
            dispatch({
                type: EDIT_COMMENT_SUCCESS,
                payload: { 
                    _id: _id,
                    content: data.content,
                },
            });
    
        } catch (err) {
            console.log(err);
        }
    }

    export const deleteCommentByID = (path) => async (dispatch) => {
        try {
            await CommentService.deleteComment(path);
            dispatch({
                type: DELETE_COMMENT_SUCCESS,
                payload: { 
                    path: path,
                },
            });
    
        } catch (err) {
            console.log(err);
        }
    }

    
