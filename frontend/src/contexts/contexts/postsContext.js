import React, { useReducer } from 'react';
import reducer from '../reducers/reducer';
import {
    GET_POST_BEGIN, GET_POST_SUCCESS, GET_POST_ERROR,
    CREATE_POST_BEGIN, CREATE_POST_ERROR, CREATE_POST_SUCCESS,
    EDIT_POST_SUCCESS, EDIT_POST_BEGIN, EDIT_POST_ERROR,
    DELETE_POST_SUCCESS, DELETE_POST_BEGIN, DELETE_POST_ERROR,
    CHANGE_STATUS_BEGIN, CHANGE_STATUS_SUCCESS, CHANGE_STATUS_ERROR,
    CHANGE_PAGE,
} from '../constants/index';
import PostService from '../../services/postServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const initialState = {
    posts: [],
    numberPosts: 0,
    isLoading: false,
    page: 1,
    limit: 10,
};
export const PostsContext = React.createContext();
    const PostsProvider = ({ children }) => {
    
        const navigate = useNavigate();
        const [state, dispatch] = useReducer(reducer, initialState);

        const getPosts = async () => {
            const { page, limit } = state;
            let url = `/posts?limit=${limit}&page=${page}`;
            dispatch({ type: GET_POST_BEGIN });
            try {
                const { data } = await PostService.getPosts(url);
                const { values, totalValues, numOfPages } = data;
                dispatch({
                    type: GET_POST_SUCCESS,
                    payload: {
                        values,
                        totalValues,
                        numOfPages,
                        type: 'multiple'
                    },
                });
            } catch (error) {
                console.log(error.response);
            }
        };

        const getPostByID = async (_id) => {
            dispatch({ type: GET_POST_BEGIN });
            try {
                const { data } = await PostService.getPostByID(_id);
                const { values, totalValues, numOfPages } = data;
                dispatch({
                    type: GET_POST_SUCCESS,
                    payload: {
                        values,
                        totalValues,
                        numOfPages,
                        type: 'single',
                    },
                });
            } catch (error) {
                console.log(error.response);
            }
        };

        const createPost = async (datas) => {
            dispatch({ type: CREATE_POST_BEGIN });
            try {
                const { data } = await PostService.createPost(datas);
                const { post, message } = data;
                dispatch({ type: CREATE_POST_SUCCESS });
                toast.success(message);
                navigate('/posts');
            } catch (error) {
                if (error.response.status === 401) return;
                dispatch({
                    type: CREATE_POST_ERROR,
                    payload: { message: error.response.data.message },
                });
            }
        };

        const editPost = async (_id, datas) => {
            // dispatch({ type: EDIT_POST_BEGIN });
            try {
                const { data } = await PostService.editPost(_id, datas);
                dispatch({ type: EDIT_POST_SUCCESS });
                const { message } = data;
                toast.success(message);
                navigate('/posts');
            } catch (error) {
                if (error.response.status === 401) return;
                // dispatch({
                //     type: EDIT_POST_ERROR,
                //     payload: { message: error.response.data.message },
                // });
            }
        };

        const deletePost = async (_id) => {
            // dispatch({ type: DELETE_POST_BEGIN });
            try {
                const { data } = await PostService.deletePostByID(_id);
                const { message } = data;
                toast.success(message);
                dispatch({
                    type: DELETE_POST_SUCCESS,
                    payload: {
                        _id
                    },
                });
            } catch (error) {
                if (error.response.status === 401) return;
                toast.error(error.response.data.message);
                // dispatch({
                //     type: DELETE_POST_ERROR,
                // });
            }
        };

        const changeStatus = async (_id, status) => {
                // dispatch({ type: CHANGE_STATUS_BEGIN });
                try {
                    const { data } = await PostService.changeStatus(_id, status);
                    const { message } = data;
                    toast.success(message);
                    dispatch({
                        type: CHANGE_STATUS_SUCCESS,
                        payload: {
                            _id,
                            status,
                        },
                    });
                } catch (error) {
                    if (error.response.status === 401) return;
                    toast.error(error.response.data.message);
                    // dispatch({
                    //     type: CHANGE_STATUS_ERROR,
                    // });
                }
        };  

        const changePage = (page) => {
            dispatch({ type: CHANGE_PAGE, payload: { page } });
        };
          
        return (
            <PostsContext.Provider
                value={{
                    ...state,
                    getPosts,
                    getPostByID,
                    createPost,
                    editPost,
                    deletePost,
                    changeStatus,
                    changePage,
                }}
            >
            {children}
            </PostsContext.Provider>
        );
    };
export { PostsProvider };

  