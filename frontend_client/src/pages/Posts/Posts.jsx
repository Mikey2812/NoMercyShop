import React from 'react';
import ListPosts from '../../components/Posts/ListPosts';
import PostSidebar from '../../components/Posts/PostSidebar';

const Posts = () => {
    return (
        <div>
            {/* START MAIN CONTENT */}
            <div className="main_content">
                {/* START SECTION BLOG */}
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <PostSidebar/>
                            <ListPosts/>
                        </div>
                    </div>
                </div>
                {/* END SECTION BLOG */}
            </div>
            {/* END MAIN CONTENT */}
        </div>
    )
}

export default Posts