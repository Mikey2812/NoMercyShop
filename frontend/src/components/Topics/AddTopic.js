import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { TopicsContext } from '../../contexts/contexts/topicsContext';

const AddTopic = () => { 
    const {isLoading, createTopic} = useContext(TopicsContext); 
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Name is required!")
                .min(3, "Please enter a name more than 3 character")
                .max(20, "Please enter a name less than 20 character"),
        }),
        onSubmit: async values => {
            createTopic(values);
        }
    });  
    const navigate = useNavigate();
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="card-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.name && formik.touched.name && (
                                        <p className='text-danger'>{formik.errors.name}</p>
                                )}
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary" disabled={isLoading}>
                        Add New Topic
                    </button>
                    <button type='button' className='btn btn-secondary ms-3' onClick={() => {navigate('/topics')}}>Go back</button>
                </div>
            </form>
        </div>
    )
}

export default AddTopic