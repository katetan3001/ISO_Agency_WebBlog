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
                        <a href="http://blog.mastercert.vn/" className="btn-author section-14px-regular font-weight-500">{blog.info.category}</a>
                        <div className="post-author-inner">
                            <img src="assets/images/image-box/author-post.jpg" alt="author" />
                            <div className="author-content link-style-2">
                                <a href="http://blog.mastercert.vn/">{blog.info.author}</a><br/>
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
                            <a href="http://blog.mastercert.vn/">design</a>
                            <a href="http://blog.mastercert.vn/">ui/ux design</a>
                            <a href="http://blog.mastercert.vn/">graphics</a>
                            <a href="http://blog.mastercert.vn/">icon</a>
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
