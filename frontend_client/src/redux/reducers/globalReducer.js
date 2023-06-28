import { ACCEPT_SHOW_FORM, NOT_ACCEPT_SHOW_FORM } from "../actions/types";

    const initialState = { acceptShowForm: false };
  
    export default function (state = initialState, action) {
        const { type, payload } = action;
        switch (type) {
        case ACCEPT_SHOW_FORM:
            return{
                ...state,
                acceptShowForm: true,
            }
        case NOT_ACCEPT_SHOW_FORM:
            return{
                ...state,
                acceptShowForm: false,
            }
        default:
            return state;   
    }
}