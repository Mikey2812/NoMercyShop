import authFetch from "./auth-fetch";

const getTopics = (url) => {
    return authFetch(url);
}

// const getPostByID = (_id) => {
//     return authFetch(`/posts/${_id}`);
// }

const createTopic = (data) => {
    return authFetch.post('/topics', data);
}

// const editPost = (_id, data) => {
//     return authFetch.post(`/posts/${_id}`, data);
// }

// const deletePostByID = (_id) => {
//     return authFetch.delete(`/posts/${_id}`);
// }

// const changeStatus = (_id, status) => {
//     return authFetch.patch(`/posts/status/${_id}`, {status});
// }

const TopicService = {
    createTopic,
    getTopics,
}

export default TopicService