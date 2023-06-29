import {
    LOGIN_SUCCESS, LOGOUT_USER, 
    CHANGE_PAGE,
    CREATE_DATA_SUCCESS, EDIT_DATA_SUCCESS, DELETE_DATA_SUCCESS,
    CHANGE_STATUS_SUCCESS, IS_LOADING, NOT_LOADING, GET_DATA_SUCCESS, GET_TOPICS_SUCCESS,
} from '../constants/index';

const reducer = (state, action) => {
    const {datas} = state;
    const { type, payload } = action;
    const findIndexArray = (array, _id) => {
        return array.findIndex(obj => obj._id === payload._id);
    }
    switch (type) {

        //Loading
        case IS_LOADING:
            return { ...state, isLoading: true };
        case NOT_LOADING:
            return { ...state, isLoading: false };

        //Auth
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                user: payload.user,
                token: payload.token,
            };  
        case LOGOUT_USER:
            return {
                ...state,
                user: null,
                token: null,
                isLoggedIn: false,
            };

        case CHANGE_STATUS_SUCCESS:
            datas[findIndexArray(datas, payload._id)].status = payload.status;
            return { ...state, isLoading: false, };

        //Paging    
        case CHANGE_PAGE:
            return {
                ...state,
                page: payload.page,
            }
        
        //Data 
        case GET_DATA_SUCCESS:
            if(payload.type === 'single') {
                return {
                    ...state,
                    isLoading: false,
                    data: payload.values,           
                }; 
            }
            return {
                ...state,
                isLoading: false,
                datas: payload.values,
                numberDatas: payload.totalValues,
                numOfPages: payload.numOfPages,             
            }; 
        case CREATE_DATA_SUCCESS:
            return { ...state, isLoading: false, };

        case EDIT_DATA_SUCCESS:
            return { ...state, isLoading: false, };

        case DELETE_DATA_SUCCESS:
            datas.splice([findIndexArray(datas, payload._id)], 1);
            return { ...state, 
                isLoading: false,
            };
        //require
        case GET_TOPICS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                topics_list: payload.values,        
            };     
        
        default: throw new Error(`no such action :${action.type}`);
    };  
}        
export default reducer;