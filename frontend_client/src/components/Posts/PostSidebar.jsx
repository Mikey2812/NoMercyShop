import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecentPost from './RecentPost';
import { getRecentPost, changePage, getAllTopics } from '../../redux/actions/posts';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import PostTags from './PostTags';
import { Link } from 'react-router-dom';

const PostSidebar = () => {
    const { recentPosts, topics } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(getRecentPost());
    },[]);

    useEffect(()=>{
        dispatch(getAllTopics());
    })
    const formik = useFormik({
        initialValues: {
            search: '',
        },

        validationSchema: Yup.object().shape({
            search: Yup.string()
        }),

        onSubmit: async values => {
            if(values !== ''){
                dispatch(changePage(1));
                navigate(`/posts?search=${values.search}`);
            }
            else{
                navigate('/posts');
            }
        }
    });

    return (
        <div className="col-lg-3 mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div className="sidebar">
                <div className="widget">
                    <div className="search_form">
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="search"
                            placeholder="Search values"
                            value={formik.values.search}
                            onChange={formik.handleChange}
                        />
                        <button
                            type="submit"
                            className="btn icon_search"
                        >
                                <i className="ion-ios-search-strong" />
                        </button>
                    </form>
                    {   formik.errors.search &&
                                formik.touched.search &&
                                (<span className='text-danger'>{formik.errors.search}</span>) }
                    </div>
                </div>
            <div className="widget">
                <h5 className="widget_title">Recent Posts</h5>
                <ul className="widget_recent_post">
                    {
                        recentPosts.slice(0, 3).map(post => (
                            <RecentPost key={post._id} {...post} />
                        ))
                    }
                </ul>
            </div>
            <div className="widget">
                <h5 className="widget_title">Topic</h5>
                <ul className="widget_archive">
                {
                    topics.map(topic => (
                        <li key={topic.name}>
                            <Link to={`/topics/${topic._id}`}>
                                <span className="archive_year">{topic.name}</span>
                                <span className="archive_num">({topic.numberPost})</span>
                            </Link>
                        </li>
                    ))
                }
                </ul>
            </div>
            <div className="widget">
                <div className="shop_banner">
                <div className="banner_img overlay_bg_20">
                    <img
                    src="/assets/images/sidebar_banner_img.jpg"
                    alt="sidebar_banner_img"
                    />
                </div>
                <div className="shop_bn_content2 text_white">
                    <h5 className="text-uppercase shop_subtitle">
                    New Collection
                    </h5>
                    <h3 className="text-uppercase shop_title">Sale 30% Off</h3>
                    <a
                    href="#"
                    className="btn btn-white rounded-0 btn-sm text-uppercase"
                    >
                    Shop Now
                    </a>
                </div>
                </div>
            </div>
            <div className="widget">
                <h5 className="widget_title">Recent Tweets</h5>
                <ul className="widget_tweet_feed">
                <li>
                    <span className="tweet_date">06 months ago</span>
                    Big, fierce, possibly feathered and tiny hands. Learn how to
                    draw the world's most famous dinosaur.
                    <a href="https:/t.co/60SVUYJR2s" target="_blank">
                    https:/t.co/60SVUYJR2s
                    </a>
                </li>
                <li>
                    <span className="tweet_date">08 months ago</span>
                    These puns would look pretty pawfect on your t-shirt for
                    #international. Go ahead and make your own
                    <a href="https:/t.co/3hlppIV5AH">http:/enva.to/of3xI </a>
                </li>
                </ul>
            </div>
            <PostTags/>
            </div>
        </div>
    )
}

export default PostSidebar