import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const createLike = (data) => {
    return axios.post(API_URL+'likes', data, { headers: authHeader()});
}

const deleteLike = (_id, type) => {
    return axios.delete(`${API_URL}likes/${_id}?type=${type}`, { headers: authHeader()});
}

const LikeService = {
    createLike,
    deleteLike,
}

export default LikeService