import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../actions/auth';
import { toast } from 'react-toastify';

const Login = ({isLoading}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { message } = useSelector(state => state.auth);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        validationSchema: Yup.object().shape({
            email: Yup.string()
                .required('Email is required')
                .email('Wrong email format'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password as least 8 characters'),
        }),

        onSubmit: async values => {
            dispatch(login(values))
                .then(() => {
                    navigate("/");
                    toast.success('Login successful');
                })
                .catch((error) => {
                    toast.error(error.response.data.message);
                });
            // try {
            //     await AuthService.login(values);
            //     navigate('/');
            //     toast.success('Login successful');
            // }
            // catch (error) {
            //     toast.error(error.response.data.message);
            // }
        }
    });

    return (
        <div>
            {/* START MAIN CONTENT */}
            <div className="main_content">
                {/* START LOGIN SECTION */}
                <div className="login_register_wrap section">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xl-6 col-md-10">
                        <div className="login_wrap">
                        <div className="padding_eight_all bg-white">
                            <div className="heading_s1">
                            <h3>Login</h3>
                            {isLoading ? <p>Loading...</p> : null}
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                    {   formik.errors.email &&
                                            formik.touched.email &&
                                            (<span className='text-danger'>{formik.errors.email}</span>) }
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        className="form-control"
                                        required=""
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                    {   formik.errors.password &&
                                            formik.touched.password &&
                                            (<span className='text-danger'>{formik.errors.password}</span>) }
                                </div>
                                <div className="login_footer form-group mb-3">
                                    <div className="chek-form">
                                    <div className="custome-checkbox">
                                        <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="checkbox"
                                        id="exampleCheckbox1"
                                        defaultValue=""
                                        />
                                        <label
                                        className="form-check-label"
                                        htmlFor="exampleCheckbox1"
                                        >
                                        <span>Remember me</span>
                                        </label>
                                    </div>
                                    </div>
                                    <Link to='/forgot-password'>Forgot password?</Link>
                                </div>
                                <div className="form-group mb-3">
                                    <button
                                        type="submit"
                                        className="btn btn-fill-out btn-block"
                                        name="login"
                                        disabled={isLoading}
                                    >
                                    Log in
                                    </button>
                                </div>
                            </form>
                            <div className="different_login">
                            <span> or</span>
                            </div>
                            <ul className="btn-login list_none text-center">
                            <li>
                                <Link to={'/facebook'} className="btn btn-facebook">
                                    <i className="ion-social-facebook" />
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link to={'/facebook'} className="btn btn-google">
                                    <i className="ion-social-googleplus" />
                                    Google
                                </Link>
                            </li>
                            </ul>
                            <div className="form-note text-center">
                                Don't Have an Account? <Link to={'/register'}>Sign up now</Link>
                            </div>
                            <div className="form-note text-center">
                                Or <Link to={'/'}>Go To Home</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* END LOGIN SECTION */}
            </div>
            {/* END MAIN CONTENT */}
        </div>
    )
}
const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading,
    error: state.auth.error,
});
  
const mapDispatchToProps = {
    // login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
