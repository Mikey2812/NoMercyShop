import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const user = JSON.parse(localStorage.getItem('user'));
const getPosts = (filter, page) => {
    let url = `${API_URL}posts?status=1&limit=5&page=${page}`;
    if(user) {
        url = url + `&userlogin=${user._id}`;
    }
    if(filter) {
        url = url + `&search=${filter}`;
    }
    return axios.get(url);
    // return axios.get(API_URL + `posts${ user ? `?userlogin=${user._id}`: ''}`)
}

const getRecentPost = () => {
    return axios.get(API_URL + `posts?limit=3`)
}

const getPostByID = (_id) => {
    return axios.get(`${API_URL}posts/${_id}`)
}

const PostService = {
    getPosts,
    getPostByID,
    getRecentPost,
}

export default PostService