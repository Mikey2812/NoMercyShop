import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/client/likes";

const createLike = (data) => {
    return axios.post(API_URL, data, { headers: authHeader()});
}

const deleteLike = (_id, type) => {
    return axios.delete(`${API_URL}/${_id}?type=${type}`, { headers: authHeader()});
}

const LikeService = {
    createLike,
    deleteLike,
}

export default LikeService