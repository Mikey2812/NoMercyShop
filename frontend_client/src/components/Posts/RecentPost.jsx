import React from 'react'

const RecentPost = () => {
    return (
        <div>   
            <li>
                <div className="post_footer">
                    <div className="post_img">
                        <a href="#">
                            <img
                                src="/assets/images/letest_post1.jpg"
                                alt="letest_post1"
                            />
                            </a>
                    </div>
                    <div className="post_content">
                        <h6>
                        <a href="#">
                            Lorem ipsum dolor sit amet, consectetur
                        </a>
                        </h6>
                        <p className="small m-0">April 14, 2018</p>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default RecentPost