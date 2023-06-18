import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';

const middleware = [thunk];

const rootReducer = combineReducers({
    auth: authReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;
