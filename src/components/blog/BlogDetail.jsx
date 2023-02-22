import React from 'react'
import blogs from '../../data/blogs.json';
import company from '../../data/company.json';
import Header from '../plugins/Header';
import Title from '../plugins/Title';
import SideTabs from './SideTabs';
export default function BlogDetail() {
  const id = window.location.href.split('?')[1];
  const blog = blogs.grid.filter(el => el.info.id === id)[0];
  return (
    <>
      <Header menuItem={4} />
      <Title title={"Tin Tức Chứng Chỉ"} page={"Blog"} />
      <section className="flat-blog blog-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
                <article className="post-content">
                    <h1 className="post-title">{blog.info.title}</h1>
                    <div className="post-author">
                        <a href="/tin-tuc" className="btn-author section-14px-regular font-weight-500">{blog.info.category}</a>
                        <div className="post-author-inner">
                            <img src="assets/images/image-box/author-post.jpg" alt="author" />
                            <div className="author-content link-style-2">
                                <a href="/tin-tuc">{blog.info.author}</a><br/>
                                <span>{blog.info.date}</span>
                            </div>
                        </div>
                    </div>
                    <p>Lorem available market standard dummy text available market industry Lorem Ipsum
                        simply dummy text of free available market.There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered alteration in some form,</p>
                    <p>Lorem available market standard dummy text available market industry Lorem Ipsum
                        simply dummy text of free available market.There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered alteration in some form, by
                        injected humour, or</p>
                    <div className="post-media">
                        <img src="assets/images/image-box/blog-single-post@2x.jpg" alt="images" />
                        <blockquote>
                            <h4>by D. jhon shikon milon</h4>
                            <p>Lorem Ipsum simply dummy text of free available market the typesetting
                                industry.</p>
                        </blockquote>
                    </div>
                    <h2 className="post-title">Committed Toproviding</h2>
                    <p>Lorem available market standard dummy text available market industry Lorem Ipsum
                        simply dummy text of free available market.There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    <ul className="post-list-quotes">
                        <li>
                            <p>Lorem available market</p>
                        </li>
                        <li>
                            <p>injected humour words which</p>
                        </li>
                        <li>
                            <p>Available market</p>
                        </li>
                    </ul>
                    <p>Lorem available market standard dummy text available market industry Lorem Ipsum
                        simply dummy text of free available market.There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered alteration in some form, by
                        injected humour, or</p>
                    <div className="post-media-box">
                        <div className="media">
                            <img src="assets/images/image-box/blog-single-post-2@2x.jpg" alt="images" />
                        </div>
                        <div className="media">
                            <img src="assets/images/image-box/blog-single-post-3@2x.jpg" alt="images" />
                        </div>
                        <div className="media">
                            <img src="assets/images/image-box/blog-single-post-4@2x.jpg" alt="images" />
                        </div>
                    </div>
                    <p>Lorem available market standard dummy available market industry Lorem Ipsum simply
                        dummy text available market.There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some form,</p>
                    <div className="post-tags">
                        <div className="inner-left">
                            <span>Tag:</span>
                            <a href="/tin-tuc">design</a>
                            <a href="/tin-tuc">ui/ux design</a>
                            <a href="/tin-tuc">graphics</a>
                            <a href="/tin-tuc">icon</a>
                        </div>
                        <div className="inner-right">
                            <ul className="widget-socials link-style-2">
                                <li><a href={company[0].lkdin} className="linked-in"></a></li>
                                <li><a href={company[0].fb} className="facebook"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="post-pagination">
                        <div className="prev-link">
                            <a href={`/blog?${blogs.grid[(blogs.grid.findIndex(el => el == blog)-1)].info.id}`} className="button readmore-prev btn-style2">{"<<"}</a>
                        </div>
                        <div className="next-link">
                            <a href={`/blog?${blogs.grid[(blogs.grid.findIndex(el => el == blog)+1)].info.id}`} className="button readmore">{">>"}</a>
                        </div>
                    </div>
                </article>
                {/* <div id="comments">
                    <h2 className="comments-title">Comments</h2>
                    <ol className="comment-list">
                        <li>
                            <div className="comment-avatar">
                                <img src="assets/images/image-box/comment-avatar-1.jpg" alt="images">
                            </div>
                            <div className="comment-content">
                                <div className="comment-meta">
                                    <div className="comment-time">December 7, 8.00</div>
                                    <div className="comment-author">D. jhon shikon milon</div>
                                </div>
                                <div className="comment-text">
                                    <p>Lorem available market standard dummy available market industry Lorem
                                        Ipsum simply dummy text available market.There are many variations
                                        of passages of Lorem Ipsum available,</p>
                                </div>
                                <div className="comment-reply">
                                    <a href="#" className="like">LIKE</a>
                                    <a href="#" className="reply">REPLY</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="comment-reply-box">
                                <div className="comment-avatar">
                                    <img src="assets/images/image-box/comment-avatar-2.jpg" alt="images">
                                </div>
                                <div className="comment-content">
                                    <div className="comment-meta">
                                        <div className="comment-time">December 7, 8.00</div>
                                        <div className="comment-author">D. jhon shikon milon</div>
                                    </div>
                                    <div className="comment-text">
                                        <p>Lorem available market standard dummy available market industry
                                            Lorem Ipsum simply dummy.</p>
                                    </div>
                                    <div className="comment-reply">
                                        <a href="#" className="like">LIKE</a>
                                        <a href="#" className="reply">REPLY</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="comment-avatar">
                                <img src="assets/images/image-box/comment-avatar-3.jpg" alt="images">
                            </div>
                            <div className="comment-content">
                                <div className="comment-meta">
                                    <div className="comment-time">December 7, 8.00</div>
                                    <div className="comment-author">D. jhon shikon milon</div>
                                </div>
                                <div className="comment-text">
                                    <p>Lorem available market standard dummy available market industry Lorem
                                        Ipsum simply dummy text available market.There are many variations
                                        of passages of Lorem Ipsum available,</p>
                                </div>
                                <div className="comment-reply">
                                    <a href="#" className="like">LIKE</a>
                                    <a href="#" className="reply">REPLY</a>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div id="respond" className="respond-comment">
                        <h2 className="comments-title">Leave A Reply</h2>
                        <form method="post" id="contactform" className="comment-form form-submit"
                            action="./contact/contact-process.php" accept-charset="utf-8"
                            novalidate="novalidate">
                            <div className="text-wrap clearfix">
                                <fieldset className="name-wrap">
                                    <input type="text" id="name" className="tb-my-input" name="name"
                                        tabindex="1" placeholder="Name*" value="" size="32"
                                        aria-required="true" required="">
                                </fieldset>
                                <fieldset className="email-wrap">
                                    <input type="email" id="email" className="tb-my-input" name="email"
                                        tabindex="2" placeholder="Email*" value="" size="32"
                                        aria-required="true" required="">
                                </fieldset>
                            </div>
                            <fieldset className="message-wrap">
                                <textarea id="comment-message" name="message" rows="16" tabindex="4"
                                    placeholder="write your comment" aria-required="true"></textarea>
                            </fieldset>
                            <button name="submit" type="submit" id="comment-reply"
                                className="button btn-submit-comment">POST COMMENT</button>
                        </form>
                    </div>
                </div> */}
            </div>
            <div className="col-lg-4 col-md-12">
              <SideTabs />
            </div>
          </div>
        </div>
      </section>
    </>
    )
}
