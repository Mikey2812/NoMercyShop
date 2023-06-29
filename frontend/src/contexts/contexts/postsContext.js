import React, { useReducer } from 'react';
import reducer from '../reducers/reducer';
import {
    IS_LOADING,
    NOT_LOADING,
    CREATE_DATA_SUCCESS,
    EDIT_DATA_SUCCESS,
    DELETE_DATA_SUCCESS,
    CHANGE_STATUS_SUCCESS,
    CHANGE_PAGE,
    GET_TOPICS_SUCCESS,
    GET_DATA_SUCCESS,
} from '../constants/index';
import PostService from '../../services/postServices';
import TopicService from '../../services/topicServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const initialState = {
    posts: [],
    topics_list: [],
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
            dispatch({ type: IS_LOADING });
            try {
                const { data } = await PostService.getPosts(url);
                const { values, totalValues, numOfPages } = data;
                dispatch({
                    type: GET_DATA_SUCCESS,
                    payload: {
                        values,
                        totalValues,
                        numOfPages,
                        type: 'multiple'
                    },
                });
            } catch (error) {
                dispatch({ type: NOT_LOADING });
                console.log(error.response);
            }
        };

        const getPostByID = async (_id) => {
            dispatch({ type: IS_LOADING });
            try {
                const { data } = await PostService.getPostByID(_id);
                const { values, totalValues, numOfPages } = data;
                dispatch({
                    type: GET_DATA_SUCCESS,
                    payload: {
                        values,
                        totalValues,
                        numOfPages,
                        type: 'single',
                    },
                });
            } catch (error) {
                dispatch({ type: NOT_LOADING });
                console.log(error.response);
            }
        };

        const createPost = async (datas) => {
            dispatch({ type: IS_LOADING });
            try {
                const { data } = await PostService.createPost(datas);
                const { post, message } = data;
                dispatch({ type: CREATE_DATA_SUCCESS });
                toast.success(message);
                navigate('/posts');
            } catch (error) {
                if (error.response.status === 401) return;
                dispatch({ type: NOT_LOADING });
                console.log(error.response);
            }
        };

        const editPost = async (_id, datas) => {
            dispatch({ type: IS_LOADING });
            try {
                const { data } = await PostService.editPost(_id, datas);
                dispatch({ type: EDIT_DATA_SUCCESS });
                const { message } = data;
                toast.success(message);
                navigate('/posts');
            } catch (error) {
                if (error.response.status === 401) return;
                dispatch({ type: NOT_LOADING });
                console.log(error.response);
            }
        };

        const deletePost = async (_id) => {
            dispatch({ type: IS_LOADING });
            try {
                const { data } = await PostService.deletePostByID(_id);
                const { message } = data;
                toast.success(message);
                dispatch({
                    type: DELETE_DATA_SUCCESS,
                    payload: {
                        _id
                    },
                });
            } catch (error) {
                if (error.response.status === 401) return;
                toast.error(error.response.data.message);
                dispatch({ type: NOT_LOADING });
                console.log(error.response);
            }
        };

        const changeStatus = async (_id, status) => {
                dispatch({ type: IS_LOADING });
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
                    dispatch({ type: NOT_LOADING });
                    console.log(error.response);
                }
        };  

        const changePage = (page) => {
            dispatch({ type: CHANGE_PAGE, payload: { page } });
        };

        const getAllTopics = async() => {
            dispatch({ type: IS_LOADING });
            try {
                const { data } = await TopicService.getTopics(`/topics?limit=99&status=1`);
                const { values } = data;
                dispatch({
                    type: GET_TOPICS_SUCCESS,
                    payload: {
                        values,
                    },
                });
            } catch (error) {
                dispatch({ type: NOT_LOADING });
                console.log(error.response);
            }
        }
          
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
                    getAllTopics,
                }}
            >
            {children}
            </PostsContext.Provider>
        );
    };
export { PostsProvider };

  