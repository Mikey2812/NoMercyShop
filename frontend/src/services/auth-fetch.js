import axios from "axios";
const access_token = localStorage.getItem('token');

// axios
const authFetch = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Authorization: `Bearer ${access_token}`,
    },
});

// response
authFetch.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
            // console.log(error.response);
        if (error.response.status === 401) {
            console.log('AUTH ERROR');
        }
        return Promise.reject(error);
    }
);

export default authFetch;