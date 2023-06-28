import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './contexts/contexts/appContext';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './contexts/contexts/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <AppProvider>

        <AuthProvider>
            <App />
            <ToastContainer />
        </AuthProvider>
    // </AppProvider>
);

reportWebVitals();
