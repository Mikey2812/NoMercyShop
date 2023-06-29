import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getTopics = () => {
    let url = `${API_URL}topics?status=1&limit=99`;
    return axios.get(url);
}

const TopicService = {
    getTopics
}

export default TopicService