import { initialState } from './appContext';


import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    CHANGE_TAB,
    CHANGE_PAGE,
    SET_MODAL_DATA,
    IS_EDIT,
    // WATCH_MODAL,
    ADD_MODAL,
    EDIT_MODAL,
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    LOGOUT_USER,
    CREATE_CATEGORIES_BEGIN,
    CREATE_CATEGORIES_SUCCESS,
    CREATE_CATEGORIES_ERROR ,
    GET_CATEGORIES_BEGIN,
    GET_CATEGORIES_SUCCESS,
    DELETE_CATEGORY_BEGIN,
    DELETE_CATEGORY_ERROR,
    DELETE_CATEGORY_SUCCESS,
    GET_DATAS_BEGIN,GET_DATAS_ERROR,GET_DATAS_SUCCESS, CREATE_DATA_BEGIN, CREATE_DATA_SUCCESS, CREATE_DATA_ERROR, CHANGE_STATUS_SUCCESS, CHANGE_STATUS_BEGIN, CHANGE_STATUS_ERROR, DELETE_DATA_SUCCESS,
    EDIT_DATA_BEGIN, EDIT_DATA_SUCCESS, EDIT_DATA_ERROR,
} from './actions';

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {

        case DISPLAY_ALERT:
            return {
                ...state,
                showAlert: true,
                alertType: 'danger',
                alertText: 'Please enter all values !',
            };
        case CLEAR_ALERT:
            return {
                ...state,
                showAlert: false,
                alertType: '',
                alertText: '',
            };
        case ADD_MODAL:
            return {
                ...state,
                isEdit: false,
            };
        case EDIT_MODAL:
            return {
                ...state,
                isEdit: true,
            };
        case SET_MODAL_DATA:
            return {
                ...state,
                modalData: action.payload.data,
            };
        case SETUP_USER_BEGIN:
            return { ...state, isLoading: true };
        case SETUP_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token,
                userLocation: action.payload.location,
                showAlert: true,
                alertType: 'success',
                alertText: action.payload.alertText,
            };    
        case SETUP_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,
            };
        case LOGOUT_USER:
            return {
                ...initialState,
                user: null,
                token: null,
                userLocation: '',
            };
        case CHANGE_TAB:
            return {
                ...state,
                numOfPages:0,
                page:1
            }
        case CHANGE_PAGE:
                // debugger
            return { 
                ...state, 
                page: action.payload.page, 
        };

        case CREATE_CATEGORIES_BEGIN:
            return { ...state, isLoading: true };

        case CREATE_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                showModal: true,
            };
        case CREATE_CATEGORIES_ERROR:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,
            };

        case GET_CATEGORIES_BEGIN:
            return { ...state, isLoading: true, showAlert: false };

        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload.categories,
                totalCategories: action.payload.totalCategories,
                numOfPages: action.payload.numOfPages,
            };
        case DELETE_CATEGORY_BEGIN:
            return { ...state, isLoading: true };

        case DELETE_CATEGORY_SUCCESS:
            console.log(action.payload.message);
            return { 
                ...state, 
                isLoading: false,
                message: action.payload.message,
            };

        case DELETE_CATEGORY_ERROR:
            return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
            };

        case GET_DATAS_BEGIN:
            return { ...state, isLoading: true};

        case GET_DATAS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ...(payload.type === 'multiple' ? 
                        {
                            values: action.payload.values,
                            totalValues: action.payload.totalValues,
                            numOfPages: action.payload.numOfPages,
                        }   : 
                        {
                            recordSelected: payload.values
                        }),
                
            };

        case CREATE_DATA_BEGIN:
            return { ...state, isLoading: true, isError: false,};
        
        case CREATE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
            };

        case CREATE_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: action.payload.message,
            };

        case EDIT_DATA_BEGIN:
            return { ...state, isLoading: true, isError: false,};
        
        case EDIT_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
            };

        case EDIT_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: action.payload.message,
            };

        case IS_EDIT:
            return {
                ...state,
                isEdit: true,
                action: 'edit',
                editData: action.payload.data,
            };

        case CHANGE_STATUS_BEGIN: 
            return {
                ...state,
                isLoading: true,
            }
        case CHANGE_STATUS_SUCCESS: 
            const newVal = state.values.map((val)=>{
                if( val._id === payload._id ){
                    return { ...val, status: val.status === 0 ? 1 : 0 }
                }
                return val;
            })

            return {
                ...state,
                values : newVal,
                isLoading: false,
            }
        case CHANGE_STATUS_ERROR: 
            return {
                ...state,
                isLoading: false,
            }
        case DELETE_DATA_SUCCESS: 

            return {
                ...state,
                values : payload.values,
                isLoading: false,
            }
        default: throw new Error(`no such action :${action.type}`);
    };  
}        
export default reducer;