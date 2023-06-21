import React from 'react'
import { useSelector } from 'react-redux';

const PostSidebar = () => {
    const { values, isLoading , numberValue} = useSelector(state => state.posts);
    const RecentPostList = () => {
        const PostItems = []
        for (let i = 0; i < 3; i++) {
            const post = values[i];
            // PostItems.push(<postItems key={post._id} {...post} />);
        }
        return PostItems;
    }
    return (
        <div className="col-lg-3 mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div className="sidebar">
            <div className="widget">
                <div className="search_form">
                <form>
                    <input
                    required=""
                    className="form-control"
                    placeholder="Search..."
                    type="text"
                    />
                    <button
                    type="submit"
                    title="Subscribe"
                    className="btn icon_search"
                    name="submit"
                    value="Submit"
                    >
                    <i className="ion-ios-search-strong" />
                    </button>
                </form>
                </div>
            </div>
            <div className="widget">
                <h5 className="widget_title">Recent Posts</h5>
                <ul className="widget_recent_post">
                    {RecentPostList()}
                    {/* <li>
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
                    <li>
                        <div className="post_footer">
                        <div className="post_img">
                            <a href="#">
                            <img
                                src="/assets/images/letest_post2.jpg"
                                alt="letest_post2"
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
                    <li>
                        <div className="post_footer">
                        <div className="post_img">
                            <a href="#">
                            <img
                                src="/assets/images/letest_post3.jpg"
                                alt="letest_post3"
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
                    </li> */}
                </ul>
            </div>
            <div className="widget">
                <h5 className="widget_title">Archive</h5>
                <ul className="widget_archive">
                <li>
                    <a href="#">
                    <span className="archive_year">June 2019</span>
                    <span className="archive_num">(12)</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className="archive_year">May 2019</span>
                    <span className="archive_num">(5)</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className="archive_year">March 2018</span>
                    <span className="archive_num">(6)</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className="archive_year">January 2018</span>
                    <span className="archive_num">(7)</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className="archive_year">April 2017</span>
                    <span className="archive_num">(10)</span>
                    </a>
                </li>
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
            <div className="widget">
                <h5 className="widget_title">tags</h5>
                <div className="tags">
                <a href="#">General</a>
                <a href="#">Design</a>
                <a href="#">jQuery</a>
                <a href="#">Branding</a>
                <a href="#">Modern</a>
                <a href="#">Blog</a>
                <a href="#">Quotes</a>
                <a href="#">Advertisement</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PostSidebar