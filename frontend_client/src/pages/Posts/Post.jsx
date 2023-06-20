import React from 'react';
import SinglePost from '../../components/Posts/SinglePost';
import PostSidebar from '../../components/Posts/PostSidebar';

const Post = () => {
    return (
        <div className="main_content">
            {/* START SECTION BLOG */}
            <div className="section">
                <div className="container">
                    <div className="row">
                        <SinglePost/>
                        <PostSidebar/>
                    </div>
                </div>
            </div>
            {/* END SECTION BLOG */}
        </div>
    )
}

export default Post