import React, { useEffect, useState} from 'react';
import Alert from '../components/Alert/Alert';
import '../assets/admin/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import { useNavigate, redirect } from 'react-router-dom';
import { useAppContext } from '../contexts/appContext';

const initialState = {
    email: '',
    password: '',
};

const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState(initialState);
    const { user, isLoading, showAlert, displayAlert, setupUser } = useAppContext();
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { email, password} = values;
        if (!email || !password) {
          displayAlert();
          return;
        }
        const currentUser = { email, password };
        setupUser({
            currentUser,
            endPoint: 'login',
            alertText: 'Login Successful! Redirecting...',
        });
    };
    useEffect(() => {
        if (user) {
          setTimeout(() => {
            // navigate('/');
            window.location.href = '/';
          }, 1500);
        }
    }, [user, navigate]);
    return (
        <div>
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html">
                        <b>Admin</b>LTE
                        </a>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form className='form' onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                            <input type="email" 
                                className="form-control" 
                                placeholder="Email" 
                                name='email'
                                onChange={handleChange}
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                <span className="fas fa-envelope" />
                                </div>
                            </div>
                            </div>
                            <div className="input-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name='password'
                                onChange={handleChange}
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                <span className="fas fa-lock" />
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember Me</label>
                                </div>
                            </div>
                            {/* /.col */}
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
                                Sign In
                                </button>
                            </div>
                            {/* /.col */}
                            </div>
                        </form>
                        <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-primary">
                            <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                            <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                            </a>
                        </div>
                        {/* /.social-auth-links */}
                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">
                            Register a new membership
                            </a>
                        </p>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                    <div className='mt-3'>
                        {showAlert && <Alert />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login