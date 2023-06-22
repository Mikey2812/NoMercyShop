import {
    GET_DATAS_BEGIN, GET_DATAS_SUCCESS, GET_DATAS_ERROR, INCREMENT_LIKE_POST, DECREMENT_LIKE_POST, GET_RECENT_POST, CHANGEPAGE
} from "../actions/types";
    
    const initialState = { isLoading: false, values: [], recentPosts:[], page: 1 };
  
    export default function (state = initialState, action) {
        const { type, payload } = action;
        const { values } = state;
        const findIndexById = (_id)=>{
            return values.findIndex(value => value._id === _id);
        }
        switch (type) {
            case GET_DATAS_BEGIN:
                return {
                    ...state,
                    isLoading: true
                };

            case GET_DATAS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    values: payload.values,
                    numberValue: payload.values.length,
                    numOfPages: payload.numOfPages,
                    totalValues: payload.totalValues,
                };

            case GET_DATAS_ERROR:
                return {
                    ...state,
                    isLoading: false,
                };
            case INCREMENT_LIKE_POST:
                console.log(payload._id)
                values[findIndexById(payload._id)].number_like += 1;
                values[findIndexById(payload._id)].isLiked = true;
                return {
                    ...state,
                }
            case DECREMENT_LIKE_POST:
                values[findIndexById(payload._id)].number_like -= 1;
                values[findIndexById(payload._id)].isLiked = false;
                return {
                    ...state,
                }
            case GET_RECENT_POST:
                return {
                    ...state,
                    recentPosts: payload.values,
                }
            case CHANGEPAGE:
                return {
                    ...state,
                    page: payload.newPage,
                }
            default:
                return state;
    }
}