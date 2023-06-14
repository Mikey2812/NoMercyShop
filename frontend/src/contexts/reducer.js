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
    GET_DATAS_BEGIN,GET_DATAS_ERROR,GET_DATAS_SUCCESS, CREATE_DATA_BEGIN, CREATE_DATA_SUCCESS, CREATE_DATA_ERROR,
} from './actions';

const reducer = (state, action) => {

    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please enter all values !',
        };
    }

    if (action.type === CLEAR_ALERT) {
        return {
          ...state,
          showAlert: false,
          alertType: '',
          alertText: '',
        };
    }

    if (action.type === ADD_MODAL) {
        return {
            ...state,
            isEdit: false,
        };
    }

    if (action.type === EDIT_MODAL) {
        return {
            ...state,
            isEdit: true,
        };
    }

    if (action.type === SET_MODAL_DATA) {
        return {
            ...state,
            modalData: action.payload.data,
        };
    }

    if (action.type === SETUP_USER_BEGIN) {
        return { ...state, isLoading: true };
    }

    if (action.type === SETUP_USER_SUCCESS) {
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
    }
    if (action.type === SETUP_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        };
    }

    if (action.type === LOGOUT_USER) {
        return {
            ...initialState,
            user: null,
            token: null,
            userLocation: '',
        };
    }

    if (action.type === CHANGE_TAB) {
        return {
            ...state,
            numOfPages:0,
            page:1
        }
    }

    if (action.type === CHANGE_PAGE) {
        // debugger
        return { 
            ...state, 
            page: action.payload.page, 
        };
    }

    if (action.type === CREATE_CATEGORIES_BEGIN) {
        return { ...state, isLoading: true };
    }
    
    if (action.type === CREATE_CATEGORIES_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showModal: true,
        };
    }

    if (action.type === CREATE_CATEGORIES_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        };
    }

    if (action.type === GET_CATEGORIES_BEGIN) {
        return { ...state, isLoading: true, showAlert: false };
    }
      
    if (action.type === GET_CATEGORIES_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            categories: action.payload.categories,
            totalCategories: action.payload.totalCategories,
            numOfPages: action.payload.numOfPages,
        };
    }

    if (action.type === DELETE_CATEGORY_BEGIN) {
        return { ...state, isLoading: true };
    }

    if (action.type === DELETE_CATEGORY_SUCCESS) {
        console.log(action.payload.message);
        return { 
            ...state, 
            isLoading: false,
            message: action.payload.message,
        };
    }

    if (action.type === DELETE_CATEGORY_ERROR) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg,
        };
    }

    if (action.type === GET_DATAS_BEGIN) {
        return { ...state, isLoading: true};
    }

    if (action.type === GET_DATAS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            values: action.payload.values,
            totalValues: action.payload.totalValues,
            numOfPages: action.payload.numOfPages,
        };
    }

    if (action.type === CREATE_DATA_BEGIN) {
        return { ...state, isLoading: true, isError: false,};
    }
      
    if (action.type === CREATE_DATA_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            isError: false,
        };
    }

    if (action.type === CREATE_DATA_ERROR) {
        return {
            ...state,
            isLoading: false,
            isError: true,
            message: action.payload.message,
        };
    }

    if (action.type === IS_EDIT) {
        return {
            ...state,
            isEdit: true,
            action: 'edit',
            editData: action.payload.data,
        };
    }

    throw new Error(`no such action :${action.type}`);
};
export default reducer;