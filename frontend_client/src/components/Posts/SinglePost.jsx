import React, { useEffect, useRef } from 'react';
import { getPostByID } from '../../redux/actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentArea from '../Comments/CommentArea';
const SinglePost = () => {
    const params = useParams();
    const { values, isLoading } = useSelector(state => state.posts);
    const dispatch = useDispatch();  
    const elementRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const element = elementRef.current;
        if (element) {
          const { top, height } = element.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          if (top + height <= windowHeight) {
                console.log('do some thing');
          }
        }
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    useEffect(() => {
        dispatch(getPostByID(params.id));
    }, [params.id]);
    useEffect(() => {

     }, []);
    const { title, description, content } = values;
    return (
        <div className="col-xl-9">
            <div className="single_post">
                <h2 className="blog_title">
                    {title}
                </h2>
                <p className="blog_description">
                    {description}
                </p>
                <div className="blog_content">
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    <div ref={elementRef} className="blog_post_footer">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-md-8 mb-3 mb-md-0">
                                <div className="tags">
                                    <a href="#">General</a>
                                    <a href="#">Design</a>
                                    <a href="#">jQuery</a>
                                    <a href="#">Branding</a>
                                    <a href="#">Modern</a>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <ul className="social_icons  text-md-end">
                                    <li>
                                    <a href="#" className="sc_facebook">
                                        <i className="ion-social-facebook" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#" className="sc_twitter">
                                        <i className="ion-social-twitter" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#" className="sc_google">
                                        <i className="ion-social-googleplus" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#" className="sc_youtube">
                                        <i className="ion-social-youtube-outline" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#" className="sc_instagram">
                                        <i className="ion-social-instagram-outline" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="post_navigation bg_gray">
                <div className="row align-items-center justify-content-between p-4">
                <div className="col-5">
                    <a href="#">
                    <div className="post_nav post_nav_prev">
                        <i className="ti-arrow-left" />
                        <span>blanditiis praesentium</span>
                    </div>
                    </a>
                </div>
                <div className="col-2">
                    <a href="#" className="post_nav_home">
                    <i className="ti-layout-grid2" />
                    </a>
                </div>
                <div className="col-5">
                    <a href="#">
                    <div className="post_nav post_nav_next">
                        <i className="ti-arrow-right" />
                        <span>voluptatum deleniti</span>
                    </div>
                    </a>
                </div>
                </div>
            </div>
            <div className="related_post">
                <div className="content_title">
                <h5>Related posts</h5>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <div className="blog_post blog_style2 box_shadow1">
                    <div className="blog_img">
                        <a href="blog-single.html">
                        <img
                            src="/assets/images//blog_small_img2.jpg"
                            alt="blog_small_img2"
                        />
                        </a>
                    </div>
                    <div className="blog_content bg-white">
                        <div className="blog_text">
                        <h5 className="blog_title">
                            <a href="blog-single.html">
                            On the other hand we provide denounce
                            </a>
                        </h5>
                        <ul className="list_none blog_meta">
                            <li>
                            <a href="#">
                                <i className="ti-calendar" /> April 14, 2018
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ti-comments" /> 2 Comment
                            </a>
                            </li>
                        </ul>
                        <p>
                            If you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="blog_post blog_style2 box_shadow1">
                    <div className="blog_img">
                        <a href="blog-single.html">
                        <img
                            src="/assets/images//blog_small_img3.jpg"
                            alt="blog_small_img3"
                        />
                        </a>
                    </div>
                    <div className="blog_content bg-white">
                        <div className="blog_text">
                        <h5 className="blog_title">
                            <a href="blog-single.html">
                            Why is a ticket to Lagos so expensive?
                            </a>
                        </h5>
                        <ul className="list_none blog_meta">
                            <li>
                            <a href="#">
                                <i className="ti-calendar" /> April 14, 2018
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ti-comments" /> 2 Comment
                            </a>
                            </li>
                        </ul>
                        <p>
                            If you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <CommentArea post_Id = {params.id}/>
        </div>
    )
}

export default SinglePost