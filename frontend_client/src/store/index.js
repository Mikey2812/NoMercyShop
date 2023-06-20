import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import postReducer from '../reducers/postReducer';
import globalReducer from '../reducers/globalReducer';
import commentReducer from '../reducers/commentReducer';

const middleware = [thunk];

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducer,
    global: globalReducer,
    comments: commentReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;
