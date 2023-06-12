import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useAppContext } from '../../contexts/appContext';

const initialState = {
    title: '',
    description: '',
    content: '',
    avatar: '',
};
const FormPost = () => {    
    const [values, setValues] = useState(initialState);
    const [avatar, setAvatar] = useState();
    const [errors, setErrors] = useState({});
    const { isLoading, createData } = useAppContext();
    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values);
    };
    const handlePreviewAvatar = (e) => {

        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        setValues({ ...values, avatar: file });
        console.log(avatar);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        createData('blogs', values);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter title"
                            name='title'
                            onChange={handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <textarea 
                            className="form-control" 
                            rows="3" 
                            placeholder="Enter ..."
                            name="description"
                            onChange={handleInput}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Content</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={ values.content}
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setValues({ ...values, content: data });
                            } }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Avatar</label>
                        <input 
                            className="form-control" 
                            type="file" 
                            id="formFileMultiple" 
                            // multiple
                            onChange={handlePreviewAvatar}/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        {avatar &&  <img src={avatar.preview} className='mw-100'/> }
                    </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormPost