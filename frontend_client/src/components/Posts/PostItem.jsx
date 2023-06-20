import React from 'react'
import moment from 'moment';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PostItem = ({_id, title, description, view, number_comment, number_like, avatar, updatedAt}) => {
    const formattedDate = moment(updatedAt).format("MMMM D, YYYY");
    const {imgUrl} = useSelector(state => state.global);
    return (
        <div className="col-12">
            <div className="blog_post blog_style2 box_shadow1">
                <div className="blog_img">
                    <Link to={`/posts/${_id}`}>
                        <img style={{maxWidth:'825px', maxHeight:'550px'}} 
                             src={`${imgUrl}/posts/${avatar}`} alt={`img_${avatar}`} />
                    </Link>
                </div>
                <div className="blog_content bg-white">
                    <div className="blog_text">
                        <h4 className="blog_title">
                            <Link to={`/posts/${_id}`}>
                                {title}
                            </Link>
                        </h4>
                    <ul className="list_none blog_meta align-middle">
                        <li>
                            <span className='text-dark'>
                                <i className="ti-calendar" 
                                    style={{ color: '#FF324D', marginRight: '5px' }}
                                /> 
                                {formattedDate}
                            </span>
                        </li>
                        <li>
                            <span className='text-dark'>
                                <i className="ti-eye"
                                    style={{ color: '#FF324D', marginRight: '5px' }}
                                /> 
                                {view}
                            </span>
                        </li>
                        <li>
                            <span className='text-dark'>
                                <i className="ti-heart"
                                    style={{ color: '#FF324D', marginRight: '5px' }}
                                /> 
                                {number_like}
                            </span>
                        </li>
                        <li>
                            <span className='text-dark'>
                                <i className="ti-comments"
                                    style={{ color: '#FF324D', marginRight: '5px' }}
                                /> 
                                {number_comment}
                            </span>
                        </li>
                    </ul>
                    <p>
                        {description}
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem