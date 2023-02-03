import React from 'react'

export default function FlatLatest() {
  return (
    <section className="tf-space flat-latest">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <div className="latest-content-wrap wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="section-title">
                            <h3 className="section-heading">Kho Kiến Thức Doanh Nghiệp</h3>
                            <div className="features-content-left">
                                <h2>Thông Tin Về Các<br/>
                                Chứng Chỉ Quốc Tế Mới Nhất</h2>
                            </div>
                            <p>Improve efficiency, provide a better customer experience with modern technology
                                services around the world. Our skilled staff, combined</p>
                            <a href="blog.html" className="button readmore">View All blog</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="latest-content-box wow fadeInUp" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="latest-post">
                            <img src="assets/images/image-box/latest-post-1@2x.jpg" alt="images"/>
                            <div className="post-date">25 JUN
                                2021</div>
                        </div>
                        <div className="latest-content link-style-2">
                            <a href="blog-details.html" className="heading">We would love to share a
                                similar experience</a>
                            <div className="latest-content-bottom">
                                <div className="post-readmore">
                                    <a href="blog-details.html" className="read-more"><span className="text">Read
                                            More</span></a>
                                </div>
                                <span className="post-tag">Digital</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="latest-content-box wow fadeInUp" data-wow-delay="300ms"
                        data-wow-duration="1500ms">
                        <div className="latest-post">
                            <img src="assets/images/image-box/latest-post-2@2x.jpg" alt="images"/>
                            <div className="post-date">25 JUN
                                2021</div>
                        </div>
                        <div className="latest-content link-style-2">
                            <a href="blog-details.html" className="heading">In this context our main
                                approach was to build</a>
                            <div className="latest-content-bottom">
                                <div className="post-readmore">
                                    <a href="blog-details.html" className="read-more"><span className="text">Read
                                            More</span></a>
                                </div>
                                <span className="post-tag">Digital</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
