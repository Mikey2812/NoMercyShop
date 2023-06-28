import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const register = (values) => {
    return axios.post(API_URL + "register", values);

}

const login = (values) => {
    return axios.post(API_URL + "login", values);
}

const AuthService = {
    register,
    login,
}

export default AuthService