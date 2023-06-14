import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/client/";

// const logout = () => {
//     localStorage.removeItem("access_token")
//     localStorage.removeItem("token_type")
// }

const login = (values) => {
    return axios.post(API_URL + "login", values)
                .then((res)=>{
                    localStorage.setItem('access_token', res.data.token);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    console.log(res);
                });
}

const register = (values) => {
    return axios.post(API_URL + "register", values);

}

// const user = () => {
//     return axios.get(API_URL + "user", { headers: authHeader()})
// }

const AuthService = {
    login,
    // logout,
    register,
    // user
}

export default AuthService