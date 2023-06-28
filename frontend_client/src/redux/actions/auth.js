import {
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL,
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT, 
} from "./types"
import { toast } from 'react-toastify';
import AuthService from "../../api/auth.service"

export const register = (username, email, password) => async (dispatch) => {
    try {
        const res = await  AuthService.register(username, email, password);
        dispatch({
            type: REGISTER_SUCCESS,
        });
        toast.success(res.data.message);
    } catch (err) {
        if (err.response) {
            if (err.response.status === 400 || 401) {
                toast.error(err.response.data.message);
            } 
        } else {
            console.log('Error:', err.message);
        }
    }
};

export const login = (username, password) => async (dispatch) => {
    try {
        const res = await AuthService.login(username, password);
        const user = res.data.user;
        const token = res.data.token;
        localStorage.setItem('access_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: user },
        });
        toast.success(res.data.message);
    } catch (err) {
        if (err.response) {
            if (err.response.status === 400 || 401) {
                toast.error(err.response.data.message);
            } 
        } else {
            console.log('Error:', err.message);
        }
    }
};

export const logout = () => (dispatch) => {
    AuthService.logout();  
    dispatch({
        type: LOGOUT,
    });
};