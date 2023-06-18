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

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password)
        .then(
            (data) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { user: data },
                });
                return Promise.resolve();
            },
            // (error) => {
            //     const message =
            //     (error.response && error.response.data && error.response.data.message) || error.message ||  error.toString();
            //     // console.log(message);
            //     toast.error(message);
            //     dispatch({
            //         type: LOGIN_FAIL,
            //         payload: { message: message},
            //     });
            //     return Promise.reject();
            // }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();  
    dispatch({
      type: LOGOUT,
    });
};