import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/client/";

const getPosts = () => {
    return axios.get(API_URL + 'posts')
}

const getPostByID = (_id) => {
    return axios.get(`${API_URL}posts/${_id}`)
}

const PostService = {
    getPosts,
    getPostByID,
}

export default PostService