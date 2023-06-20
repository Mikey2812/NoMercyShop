import {
    GET_DATAS_BEGIN, GET_DATAS_SUCCESS, GET_DATAS_ERROR
} from "../actions/types";
    
    const initialState = { isLoading: false, values: [] };
  
    export default function (state = initialState, action) {
        const { type, payload } = action;
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
                };

            case GET_DATAS_ERROR:
                return {
                    ...state,
                    isLoading: false,
                };
            default:
                return state;
    }
}