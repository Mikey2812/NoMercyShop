import {
    CREATE_DATA_BEGIN, CREATE_DATA_SUCCESS, CREATE_DATA_ERROR,
    GET_COMMENTS_SUCCESS,
    ACCEPT_SHOW_FORM,
    DELETE_COMMENT_SUCCESS,
    IS_REPLY_COMMENT,
    EDIT_COMMENT_SUCCESS,
    
} from "../actions/types";
    
    const initialState = { isLoading: false, comments: [], numberComments: 0, replyId: '' };
  
    export default function (state = initialState, action) {
        const { type, payload } = action;
        const {comments, numberComments, replyId} = state;
        switch (type) {
            case CREATE_DATA_BEGIN:
                return {
                    ...state,
                    isLoading: true
                };

            case CREATE_DATA_SUCCESS:
                if(payload.type === 1){
                    const commentIndex = comments.findIndex(comment => comment._id === replyId);
                    comments.splice(commentIndex+1, 0, payload.newData);
                    return {
                        ...state,
                        isLoading: false,
                        numberComments: numberComments+1,
                    };
                }
                return {
                    ...state,
                    isLoading: false,
                    comments: [...comments, payload.newData],
                    numberComments: numberComments+1,
                };

            case CREATE_DATA_ERROR:
                return {
                    ...state,
                    isLoading: false,
                };
            case GET_COMMENTS_SUCCESS:
                return {
                    ...state,
                    comments: payload.comments,
                    numberComments: payload.numberComments,
                }
            case DELETE_COMMENT_SUCCESS:
                const filteredComments = comments.filter(comment => !comment.path.startsWith(payload.path));
                return {
                    ...state,
                    numberComments: numberComments - 1,
                    comments: filteredComments,
                }
            case IS_REPLY_COMMENT:
                return {
                    ...state,
                    replyId: payload.replyId,
                }
            case EDIT_COMMENT_SUCCESS:
                const commentIndex = comments.findIndex(comment => comment._id === payload._id);
                comments[commentIndex].content = payload.content;
                return {
                    ...state,
                }
            default:
                return state;
    }
}