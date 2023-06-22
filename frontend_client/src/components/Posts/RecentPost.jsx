import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RecentPost = ({_id, avatar, title, updatedAt}) => {
    const {imgUrl} = useSelector(state=>state.global)
    return (
        <div>   
            <li className='my-1'>
                <div className="post_footer">
                    <div className="post_img">
                        <Link to={`/posts/${_id}`}>
                            <img
                                src={`${imgUrl}posts/${avatar}`}
                                style={{height:'80px'}}
                                alt="letest_post1"
                            />
                            </Link>
                    </div>
                    <div className="post_content">
                        <h6>
                        <Link to={`/posts/${_id}`}>
                            {title}
                        </Link>
                        </h6>
                        <p className="small m-0">{moment(updatedAt).format('MMMM DD, YYYY')}</p>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default RecentPost