import React from 'react';
import { Link } from 'react-router-dom';
import { formatToMonthDayYear } from '../../utils/FormatDate';

const RecentPost = ({_id, avatar, title, updatedAt}) => {
    return (
        <div>   
            <li className='my-1'>
                <div className="post_footer">
                    <div className="post_img">
                        <Link to={`/posts/${_id}`}>
                            <img
                                className='post-recent-img'
                                src={`${process.env.REACT_APP_IMG_URL}posts/${avatar}`}
                                alt={`letest_post${_id}`}
                            />
                            </Link>
                    </div>
                    <div className="post_content">
                        <h6>
                        <Link to={`/posts/${_id}`}>
                            {title}
                        </Link>
                        </h6>
                        <p className="small m-0">{formatToMonthDayYear(updatedAt)}</p>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default RecentPost