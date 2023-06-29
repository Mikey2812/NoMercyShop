import React, { useReducer } from 'react';
import reducer from '../reducers/reducer';
import {
    IS_LOADING,
    NOT_LOADING,
    CHANGE_STATUS_SUCCESS,
    CHANGE_PAGE,
    GET_DATA_SUCCESS,
    CREATE_DATA_SUCCESS,
} from '../constants/index';
import PostService from '../../services/postServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import TopicService from '../../services/topicServices';

export const initialState = {
    datas: [],
    numberDatas: 0,
    isLoading: false,
    page: 1,
    limit: 10,
};
export const TopicsContext = React.createContext();
    const TopicsProvider = ({ children }) => {
    
        const navigate = useNavigate();
        const [state, dispatch] = useReducer(reducer, initialState);

        const getTopics = async () => {
            const { page, limit } = state;
            let url = `/topics?limit=${limit}&page=${page}`;
            dispatch({ type: IS_LOADING });
            try {
                const { data } = await TopicService.getTopics(url);
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

        const createTopic = async (datas) => {
            dispatch({ type: IS_LOADING });
            try {
                const { data } = await TopicService.createTopic(datas);
                const { message } = data;
                dispatch({ type: CREATE_DATA_SUCCESS });
                toast.success(message);
                navigate('/topics');
            } catch (error) {
                dispatch({ type: NOT_LOADING });
                if (error.response.status === 401) return;
                if (error.response.status === 409) {
                    toast.error(error.response.data.message);
                }
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
          
        return (
            <TopicsContext.Provider
                value={{
                    ...state,
                    getTopics,
                    // getPostByID,
                    createTopic,
                    // editPost,
                    // deletePost,
                    changeStatus,
                    changePage,
                }}
            >
            {children}
            </TopicsContext.Provider>
        );
    };
export { TopicsProvider };

  