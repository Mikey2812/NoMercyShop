import React, { useReducer } from 'react';
import AuthService from '../../services/authServices';
import reducer from '../reducers/reducer';
import { toast } from 'react-toastify';

import {
    IS_LOADING, NOT_LOADING,
    LOGIN_SUCCESS,
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

        const login = async (data) => {
            dispatch({ type: IS_LOADING });
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
                    type: NOT_LOADING,
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

  