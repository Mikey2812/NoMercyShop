import {
    GET_DATAS_BEGIN, GET_DATAS_SUCCESS, GET_DATAS_ERROR, INCREMENT_LIKE_POST, DECREMENT_LIKE_POST, GET_RECENT_POST, CHANGEPAGE, GET_TOPICS_SUCCESS
} from "./types"

import PostService from "../../api/post.service";
import LikeService from "../../api/like.service";
import TopicService from "../../api/topic.service";

    export const getPosts = (filter, page) => async (dispatch) => {
        try {
            const res = await PostService.getPosts(filter, page);

            dispatch({
                type: GET_DATAS_SUCCESS,
                payload: { 
                    values: res.data.values,
                    numOfPages: res.data.numOfPages,
                    totalValues: res.data.totalValues,
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

    export const getRecentPost = () => async (dispatch) => {
        try {
            const res = await PostService.getRecentPost();
            dispatch({
                type: GET_RECENT_POST,
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

    export const changePage = (newPage) => async (dispatch) => {
        try {
            dispatch({ type: CHANGEPAGE, payload: { newPage: newPage } });
        }
        catch (err) {
            console.log(err);
        }
    }

    export const getAllTopics = () => async(dispatch) => {
        try {
            const res = await TopicService.getTopics();
            dispatch({
                type: GET_TOPICS_SUCCESS,
                payload: { 
                    topics: res.data.values,
                },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
