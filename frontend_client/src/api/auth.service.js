import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const register = (values) => {
    return axios.post(API_URL + "register", values);

}

const login = (values) => {
    return axios.post(API_URL + "login", values);
}

const logout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("user")
}

const AuthService = {
    register,
    login,
    logout,
}

export default AuthService