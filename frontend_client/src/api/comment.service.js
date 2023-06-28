import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;
const user = JSON.parse(localStorage.getItem('user'));

const getCommentsByPostID = (postId) => {
    return axios.get(`${API_URL}posts/${postId}/comments${ user ? `?userlogin=${user._id}`: ''}`);
}

const getCommentByID = (_id) => {
    return axios.get(`${API_URL}comments/${_id}`);
}

const createComment = (data) => {
    return axios.post(API_URL+'comments', data, { headers: authHeader()});
}

const editComment = (_id, data) => {
    return axios.post(`${API_URL}comments/${_id}`, data, { headers: authHeader()});
}

const deleteComment = (path) => {
    return axios.delete(`${API_URL}comments/${path}`, { headers: authHeader()});
}

const CommentService = {
    getCommentsByPostID,
    getCommentByID,
    createComment,
    editComment,
    deleteComment,
}

export default CommentService