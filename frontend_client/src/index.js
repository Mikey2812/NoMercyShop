import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = createStore(
    reducer,
    // applyMiddleware(...middleware)
)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>    
        <ToastContainer />
    </React.StrictMode>
);

reportWebVitals();
