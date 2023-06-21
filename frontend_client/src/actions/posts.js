import {
    GET_DATAS_BEGIN, GET_DATAS_SUCCESS, GET_DATAS_ERROR, INCREMENT_LIKE_POST, DECREMENT_LIKE_POST
} from "./types"

import PostService from "../services/post.service";
import LikeService from "../services/like.service";

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

    export const incrementLike = (_id) => async (dispatch) => {
        try {
            await LikeService.createLike({postId: _id, type: 0});
            dispatch({
                type: INCREMENT_LIKE_POST,
                payload: {
                    _id: _id,
                }
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    export const decrementLike = (_id) => async (dispatch) => {
        try {
            await LikeService.deleteLike(_id, 0);
            dispatch({
                type: DECREMENT_LIKE_POST,
                payload: {
                    _id: _id,
                }
            })
        }
        catch (err) {
            console.log(err);
        }
    }
