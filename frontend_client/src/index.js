import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
// import reducer from './reducers';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <App />
            <ToastContainer />
        </Provider>    
    // {/* </React.StrictMode> */}
);

reportWebVitals();
