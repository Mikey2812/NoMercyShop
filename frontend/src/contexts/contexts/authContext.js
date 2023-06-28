import React, { useReducer } from 'react';
import AuthService from '../../services/authServices';
import reducer from '../reducers/reducer';
import { toast } from 'react-toastify';

import {
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_USER,
} from '../constants/index';

export const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    isLoggedIn: localStorage.getItem('token') ? true : false,
    isLoading: false,
};
    export const AuthContext = React.createContext();
    const AuthProvider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, initialState);
        // axios
        // const authFetch = axios.create({
        //     baseURL: process.env.REACT_APP_API_URL,
        //     headers: {
        //         Authorization: `Bearer ${state.token}`,
        //     },
        // });
        // // response
        // authFetch.interceptors.response.use(
        //     (response) => {
        //         return response;
        //     },
        //     (error) => {
        //             // console.log(error.response);
        //         if (error.response.status === 401) {
        //             console.log('AUTH ERROR');
        //         }
        //         return Promise.reject(error);
        //     }
        // );

        const login = async (data) => {
            dispatch({ type: LOGIN_BEGIN });
            try {
                const response = await AuthService.login(data); 
                const { user, token, message } = response.data;
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { user, token },
                });
                addUserToLocalStorage({ user, token });
                toast.success(message);
            } catch (error) {
                dispatch({
                    type: LOGIN_ERROR,
                });
                const message = error.response.data.message;
                if(message) {
                    toast.error(message);
                }
            }
        };


        const logout = () => {
            dispatch({ type: LOGOUT_USER })
            removeUserFromLocalStorage();
            toast('Logout Success!');
        }

        const addUserToLocalStorage = ({ user, token }) => {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
        };
          
        const removeUserFromLocalStorage = () => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        };
          
        return (
            <AuthContext.Provider
                value={{
                    ...state,
                    login,
                    logout,
                }}
            >
            {children}
            </AuthContext.Provider>
        );
    };
export { AuthProvider };

  