import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { decrementLike, incrementLike } from '../../redux/actions/posts';
import { formatToMonthDayYear } from '../../utils/FormatDate';

const PostItem = ({_id, title, description, view, number_comment, number_like, avatar, updatedAt, isLiked}) => {
    const {isLoggedIn} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLikeBtn = ((e)=>{
        if (isLoggedIn) {
            if(isLiked){
                dispatch(decrementLike(_id));
            }
            else {
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
                        <img className='post-avatar' src={`${process.env.REACT_APP_IMG_URL}/posts/${avatar}`} alt={`img_${avatar}`} />
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
                                <i className="ti-calendar text_default me-1" /> 
                                {formatToMonthDayYear(updatedAt)}
                            </span>
                        </li>
                        <li>
                            <span className='text-dark'>
                                <i className="ti-eye text_default me-1" /> 
                                {view}
                            </span>
                        </li>
                        <li>
                            <button className={`like-btn ${ isLiked === true ? 'active ' : ''} d-flex align-items-center text-dark p-0 mt-1 border-0 bg-white`} 
                                    onClick={((e)=>{
                                        handleLikeBtn(e);
                                    })}>
                                    <i className="ion ion-heart me-1" />
                                    <span className='lh-1'>{number_like}</span>
                            </button>
                        </li>
                        <li>
                            <span className='text-dark d-flex align-items-center'>
                                <i className="ti-comments text_default me-1" /> 
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