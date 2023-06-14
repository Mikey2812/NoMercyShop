import React, { useState, useReducer, useContext } from 'react';
import reducer from './reducer';
import axios from 'axios';

import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    CHANGE_TAB,
    CHANGE_PAGE,
    SET_MODAL_DATA,
    // WATCH_MODAL,
    IS_EDIT,
    ADD_MODAL,
    EDIT_MODAL,
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    LOGOUT_USER,
    CREATE_CATEGORIES_BEGIN,
    CREATE_CATEGORIES_SUCCESS,
    CREATE_CATEGORIES_ERROR,
    GET_CATEGORIES_BEGIN,
    GET_CATEGORIES_SUCCESS,
    DELETE_CATEGORY_BEGIN,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_ERROR,
    CREATE_DATA_BEGIN,CREATE_DATA_SUCCESS,CREATE_DATA_ERROR,
    GET_DATAS_BEGIN,GET_DATAS_SUCCESS,GET_DATAS_ERROR,
    DELETE_DATA_BEGIN,DELETE_DATA_SUCCESS,DELETE_DATA_ERROR,
} from './actions';
import { data } from 'jquery';
import { faL } from '@fortawesome/free-solid-svg-icons';
// import { data } from 'jquery';

export const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    showModal: false,
    isEdit: false,
    isError: false,
    modalData: [],
    user: null,
    token: localStorage.getItem('token') || null,
    message: '',
    userLocation: '',
    categories: [],
    categoryName: '',
    limit: 10,
    page: 1,
    numOfPages: 0,
    srcImg: 'http://localhost:8080/uploads/',
    action: 'watch',
};
    const AppContext = React.createContext();

    const AppProvider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, initialState);

        // axios
        const authFetch = axios.create({
            baseURL: 'http://localhost:8080/api/admin',
            headers: {
                Authorization: `Bearer ${state.token}`,
            },
        });
        // request

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
        
        const displayAlert = () => {
            dispatch({ type: DISPLAY_ALERT });
            clearAlert();
        };

        const clearAlert = () => {
            setTimeout(() => {
              dispatch({ type: CLEAR_ALERT });
            }, 3000);   
        };

        const setupUser = async ({ currentUser, endPoint, alertText }) => {
            dispatch({ type: SETUP_USER_BEGIN });
            try {
                const { data } = await axios.post(`http://localhost:8080/api/admin/${endPoint}`,currentUser);
            
                const { user, token, location } = data;
                console.log(data);
                dispatch({
                    type: SETUP_USER_SUCCESS,
                    payload: { user, location, alertText, token },
                });
                addUserToLocalStorage({ user, token, location });
            } catch (error) {
                dispatch({
                    type: SETUP_USER_ERROR,
                    payload: { msg: error.response.data.msg },
                });
            }
            clearAlert();
        };


        const logoutUser = () => {
            dispatch({ type: LOGOUT_USER })
            removeUserFromLocalStorage()
        }

        const changePage = (page) => {
            dispatch({ type: CHANGE_PAGE, payload: { page } });
        };
        
        const changeTab = () => {
            dispatch({ type: CHANGE_TAB});
        }

        const createCategories = async (data) => {
            dispatch({ type: CREATE_CATEGORIES_BEGIN });
            try {
                await authFetch.post('/categories', data);
                dispatch({ type: CREATE_CATEGORIES_SUCCESS });
            } catch (error) {
                if (error.response.status === 401) return;
                dispatch({
                    type: CREATE_CATEGORIES_ERROR,
                    payload: { msg: error.response.data.msg },
                });
            }
            getCategories();
        };

        const createData = async (tab, data) => {
            dispatch({ type: CREATE_DATA_BEGIN });
            try {
                await authFetch.post(`/${tab}`, data);
                dispatch({ type: CREATE_DATA_SUCCESS });
            } catch (error) {
                if (error.response.status === 401) return;
                dispatch({
                    type: CREATE_DATA_ERROR,
                    payload: { message: error.response.data.message },
                });
            }
        };
        

        const getCategories = async () => {

            const { page, limit } = state;
            let url = `/categories?limit=${limit}&page=${page}`;
            
            dispatch({ type: GET_CATEGORIES_BEGIN });
            try {
                const { data } = await authFetch(url);
                console.log(data);
                const { categories, totalCategories, numOfPages } = data;
                dispatch({
                    type: GET_CATEGORIES_SUCCESS,
                    payload: {
                        categories,
                        totalCategories,
                        numOfPages,
                    },
                });
            } catch (error) {
                console.log(error.response);
                // logoutUser();
            }
            clearAlert();
        }
        
        const getDatas = async (tab) => {
            const { page, limit } = state;
            let url = `/${tab}?limit=${limit}&page=${page}`;
            dispatch({ type: GET_DATAS_BEGIN });
            try {
                const { data } = await authFetch(url);
                console.log(data);
                const { values, totalValues, numOfPages } = data;
                dispatch({
                    type: GET_DATAS_SUCCESS,
                    payload: {
                        values,
                        totalValues,
                        numOfPages,
                    },
                });
            } catch (error) {
                console.log(error.response);
            }
        }

        const getModalData = async (data) => {
            dispatch({ 
                type: SET_MODAL_DATA,
                payload: {
                    data
                },
            });
        }
        const watchModal = async (data) => {
            // dispatch({
            //     type: WATCH_MODAL,

            // })
            getModalData(data);
        }

        const addModal = async (data) => {
            dispatch({
                type: ADD_MODAL,
            })
        }

        const editModal = async (data) => {
            dispatch({
                type: EDIT_MODAL,
            })
            getModalData(data);
        }

        const deleteCategory = async (categoryID) => {
            dispatch({ type: DELETE_CATEGORY_BEGIN });
            try {
                const { data } = await authFetch.delete(`/categories/${categoryID}`);
                const { message } = data;
                dispatch({
                    type: DELETE_CATEGORY_SUCCESS,
                    payload: {
                        message
                    },
                });
                getCategories();
            } catch (error) {
                if (error.response.status === 401) return;
                dispatch({
                    type:DELETE_CATEGORY_ERROR,
                    payload: { message: error.response.data.message },
                });
            }
        };

        const formEdit = async (data) => {
            console.log(data);
            dispatch({
                type: IS_EDIT,
                payload: { data: data },
            });
            // dispatch
        }

        const addUserToLocalStorage = ({ user, token, location }) => {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            localStorage.setItem('location', location);
        };
          
        const removeUserFromLocalStorage = () => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('location');
        };
          
        return (
            <AppContext.Provider
            value={{
                ...state,
                displayAlert,
                changeTab,
                changePage,
                getModalData,
                watchModal,
                addModal,
                editModal,
                setupUser,
                logoutUser,
                createCategories,
                getCategories,
                deleteCategory,
                createData,
                getDatas,
                formEdit,
            }}
            >
            {children}
            </AppContext.Provider>
        );
    };
// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };