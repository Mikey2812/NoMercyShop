import React from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { decrementLike, incrementLike } from '../../actions/posts';


const PostItem = ({_id, title, description, view, number_comment, number_like, avatar, updatedAt, isLiked}) => {
    const formattedDate = moment(updatedAt).format("MMMM D, YYYY");
    const {imgUrl} = useSelector(state => state.global);
    const {isLoggedIn} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLikeBtn = ((e)=>{
        if (isLoggedIn) {
            const element = e.currentTarget;
            const isActive = element.className.includes("active");
            if(isActive){
                // element.classList.remove("active");
                dispatch(decrementLike(_id));
            }
            else {
                // element.classList.add("active");
                dispatch(incrementLike(_id));
            }
        }
        else {
            navigate('/login');
        }
    })
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
                            <button className={`like-btn ${ isLiked === true ? 'active ' : ''} d-flex align-items-center text-dark p-0 border-0 bg-white`} 
                                    style={{minHeight:'24px'}}
                                    onClick={((e)=>{
                                        handleLikeBtn(e);
                                    })}>
                                    <i className="ion ion-heart me-1" />
                                    <span className='lh-1' style={{marginTop:'1px'}}>{number_like}</span>
                            </button>
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