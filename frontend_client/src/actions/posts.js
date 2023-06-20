import {
    GET_DATAS_BEGIN, GET_DATAS_SUCCESS, GET_DATAS_ERROR
} from "./types"

import PostService from "../services/post.service";

    export const getPosts = () => async (dispatch) => {
        try {
            const res = await PostService.getPosts();

            dispatch({
                type: GET_DATAS_SUCCESS,
                payload: { 
                    values: res.data.values
                },
            });
    
        } catch (err) {
            console.log(err);
        }
    }

    export const getPostByID = (_id) => async (dispatch) => {
        try {
            const res = await PostService.getPostByID(_id);
            dispatch({
                type: GET_DATAS_SUCCESS,
                payload: { 
                    values: res.data.values
                },
            });
    
        } catch (err) {
            console.log(err);
        }
    }
