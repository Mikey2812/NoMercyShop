import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/client/";

const register = (values) => {
    return axios.post(API_URL + "register", values);

}

const login = (values) => {
    return axios.post(API_URL + "login", values)
                .then((res)=>{
                    localStorage.setItem('access_token', res.data.token);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                });
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