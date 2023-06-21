import {
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL,
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT, 
} from "./types"

import { toast } from 'react-toastify';

import AuthService from "../services/auth.service"

export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password)
        .then((response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
  
            return Promise.resolve();
        },
        (error) => {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            dispatch({
                type: REGISTER_FAIL,
            });
            return Promise.reject();
        }
        );
};

export const login = (username, password) => async (dispatch) => {
    try {
        await AuthService.login(username, password);
        const user = JSON.parse(localStorage.getItem('user'));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: user },
        });

    } catch (err) {
        console.log(err);
    }
};

export const logout = () => (dispatch) => {
    AuthService.logout();  
    dispatch({
        type: LOGOUT,
    });
};