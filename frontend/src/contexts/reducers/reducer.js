
import { array } from 'yup';
import {
    LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_USER, 
    CHANGE_PAGE,
    GET_POST_BEGIN, GET_POST_ERROR, GET_POST_SUCCESS, 
    CREATE_POST_BEGIN, CREATE_POST_ERROR, CREATE_POST_SUCCESS, 
    EDIT_POST_BEGIN, EDIT_POST_ERROR, EDIT_POST_SUCCESS,
    DELETE_POST_SUCCESS,
    CHANGE_STATUS_BEGIN, CHANGE_STATUS_ERROR, CHANGE_STATUS_SUCCESS,
} from '../constants/index';

const reducer = (state, action) => {
    const {posts} = state;
    const { type, payload } = action;
    const findIndexArray = (array, _id) => {
        return array.findIndex(obj => obj._id === payload._id);
    }
    switch (type) {
        //Auth
        case LOGIN_BEGIN:
            return { ...state, isLoading: true };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                user: payload.user,
                token: payload.token,
            };    
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null,
                token: null,
                isLoggedIn: false,
            };
        
        //Posts

        case GET_POST_BEGIN:
            return { ...state, isLoading: true, };
        case GET_POST_ERROR:
            return { ...state, isLoading: false, };
        case GET_POST_SUCCESS:
            if(payload.type === 'single') {
                return {
                    ...state,
                    isLoading: false,
                    post: payload.values,
                    // numberPosts: payload.totalValues,
                    // numOfPages: payload.numOfPages,             
                }; 
            }
            return {
                ...state,
                isLoading: false,
                posts: payload.values,
                numberPosts: payload.totalValues,
                numOfPages: payload.numOfPages,             
            }; 

        case CREATE_POST_BEGIN:
            return { ...state, isLoading: true, };
        case CREATE_POST_ERROR:
            return { ...state, isLoading: false, };
        case CREATE_POST_SUCCESS:
            return { ...state, isLoading: false, };

        case EDIT_POST_BEGIN:
            return { ...state, isLoading: true, };
        case EDIT_POST_ERROR:
            return { ...state, isLoading: false, };
        case EDIT_POST_SUCCESS:
            return { ...state, isLoading: false, };

        case DELETE_POST_SUCCESS:
            const index = posts.findIndex(obj => obj._id === payload._id);
            posts.splice(index, 1);
            return { ...state, 
                isLoading: false,
            };

        case CHANGE_STATUS_BEGIN:
            return { ...state, isLoading: true, };
        case CHANGE_STATUS_ERROR:
            return { ...state, isLoading: false, };
        case CHANGE_STATUS_SUCCESS:
            posts[findIndexArray(posts, payload._id)].status = payload.status;
            return { ...state, isLoading: false, };

        //Paging    
        case CHANGE_PAGE:
            return {
                ...state,
                page: payload.page,
            }
        default: throw new Error(`no such action :${action.type}`);
    };  
}        
export default reducer;