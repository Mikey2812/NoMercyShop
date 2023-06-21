import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/client/comments";
const user = JSON.parse(localStorage.getItem('user'));

const getCommentsByPostID = (postId) => {
    return axios.get(`http://localhost:8080/api/client/posts/${postId}/comments${ user ? `?userlogin=${user._id}`: ''}`);
}

const getCommentByID = (_id) => {
    return axios.get(`${API_URL}/${_id}`);
}

const createComment = (data) => {
    return axios.post(API_URL, data, { headers: authHeader()});
}

const editComment = (_id, data) => {
    return axios.post(`${API_URL}/${_id}`, data, { headers: authHeader()});
}

const deleteComment = (path) => {
    return axios.delete(`${API_URL}/${path}`, { headers: authHeader()});
}

const CommentService = {
    getCommentsByPostID,
    getCommentByID,
    createComment,
    editComment,
    deleteComment,
}

export default CommentService