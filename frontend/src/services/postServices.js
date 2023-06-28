import authFetch from "./auth-fetch";

const getPosts = (url) => {
    return authFetch(url);
}

const getPostByID = (_id) => {
    return authFetch(`/posts/${_id}`);
}

const createPost = (data) => {
    return authFetch.post('/posts', data);
}

const editPost = (_id, data) => {
    return authFetch.post(`/posts/${_id}`, data);
}

const deletePostByID = (_id) => {
    return authFetch.delete(`/posts/${_id}`);
}

const changeStatus = (_id, status) => {
    return authFetch.patch(`/posts/status/${_id}`, {status});
}

const PostService = {
    getPosts,
    getPostByID,
    createPost,
    editPost,
    deletePostByID,
    changeStatus,
}

export default PostService