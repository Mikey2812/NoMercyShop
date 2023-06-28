import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },

        validationSchema: Yup.object().shape({
            email: Yup.string()
                .required('Email is required')
                .email('Incorrect email format'),
        }),

        onSubmit: async values => {
            // await dispatch(login(values));
        }
    });
    return (
        <div className="main_content">
        {/* START FORGOT PASSWORD SECTION */}
            <div className="login_register_wrap section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-md-10">
                            <div className="form_wrap">
                                <div className="padding_eight_all bg-white">
                                    <div className="heading_s1">
                                        <h3>Forgot Password</h3>
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
                                            <button
                                                type="submit"
                                                className="btn btn-fill-out btn-block"
                                                name="login"
                                            >
                                            Log in
                                            </button>
                                        </div>
                                    </form>
                                    <div className="form-note text-center">
                                        Don't have an Account? <Link to={'/register'}>Sign up now</Link>
                                    </div>
                                    <div className="form-note text-center">
                                        Already have an Account? Try <Link to={'/login'}>Login</Link> ?
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
        {/* END FORGOT PASSWORD SECTION */}
        </div>
    )
}

export default ForgotPassword