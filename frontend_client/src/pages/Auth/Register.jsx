import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { register } from '../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {registerSuccess} = useSelector(state => state.auth);
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            password_confirm: '',
            phone: '',
        },
        validationSchema: Yup.object().shape({
            firstname: Yup.string()
                .required('Firstname is required'),
            lastname: Yup.string()
                .required('Lastname is required'),
            email: Yup.string()
                .required('Email is required')
                .email('Wrong email format'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password as least 8 label'),
            password_confirm: Yup.string()
                .required('Password confirm is required')
                .oneOf([Yup.ref('password'), null], 'Password confirm must match with password'),
            phone: Yup.string()
                .required('Phone confirm is required')
                .min(10, "Phone as least 10 characters")
                .max(11, "Phone up to 11 characters")
        }),
        onSubmit: async values => {
            delete values.password_confirm;
            dispatch(register(values));
        }
    });

    useEffect(()=> {
        if(registerSuccess) {
            navigate('/login')
        }
    }, [registerSuccess])
    
    return (
        <div>
            <div className="login_register_wrap section">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xl-6 col-md-10">
                        <div className="login_wrap">
                        <div className="padding_eight_all bg-white">
                            <div className="heading_s1">
                            <h3>Create an Account</h3>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group mb-3">
                                    <h6>First Name</h6>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="firstname"
                                        placeholder="Enter Your Firstname"
                                        value={formik.values.firstname}
                                        onChange={formik.handleChange}
                                    />
                                    {   formik.errors.firstname &&
                                        formik.touched.firstname &&
                                        (<span className='text-danger'>{formik.errors.firstname}</span>) }
                                </div>
                                <div className="form-group mb-3">
                                    <h6>Last Name</h6>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="lastname"
                                        placeholder="Enter Your Lastname"
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange}
                                    />
                                    {   formik.errors.lastname &&
                                        formik.touched.lastname &&
                                        (<span className='text-danger'>{formik.errors.lastname}</span>) }
                                </div>
                                <div className="form-group mb-3">
                                    <h6>Email</h6>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                    {   formik.errors.email &&
                                        formik.touched.email &&
                                        (<span className='text-danger'>{formik.errors.email}</span>) }
                                </div>
                                <div className="form-group mb-3">
                                    <h6>Password</h6>
                                    <input
                                        className="form-control"
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
                                <div className="form-group mb-3">
                                    <h6>Confirm Password</h6>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password_confirm"
                                        placeholder="Confirm Password"
                                        value={formik.values.password_confirm}
                                        onChange={formik.handleChange}
                                    />
                                    {   formik.errors.password_confirm &&
                                        formik.touched.password_confirm &&
                                        (<span className='text-danger'>{formik.errors.password_confirm}</span>) }
                                </div>
                                <div className="form-group mb-3">
                                    <h6>Phone Number</h6>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="phone"
                                        placeholder="Enter Your Phone Number"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                    />
                                    {   formik.errors.phone &&
                                        formik.touched.phone &&
                                        (<span className='text-danger'>{formik.errors.phone}</span>) }
                                </div>
                                <div className="login_footer form-group mb-3">
                                    <div className="chek-form">
                                    <div className="custome-checkbox">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="checkbox"
                                            id="exampleCheckbox2"
                                            defaultValue=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="exampleCheckbox2"
                                        >
                                        <span>I agree to terms &amp; Policy.</span>
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button
                                        type="submit"
                                        className="btn btn-fill-out btn-block"
                                        name="register"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                            <div className="different_login">
                            <span> or</span>
                            </div>
                            <ul className="btn-login list_none text-center">
                                <li>
                                    <Link to={'/fb'} className="btn btn-facebook">
                                        <i className="ion-social-facebook" />
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/fb'} className="btn btn-google">
                                        <i className="ion-social-googleplus" />
                                        Google
                                    </Link>
                                </li>
                            </ul>
                            <div className="form-note text-center">
                                Already have an account? <Link to='/login'>Log in</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register