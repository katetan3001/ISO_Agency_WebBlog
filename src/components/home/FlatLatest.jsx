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
                            <p>Cùng nhau tìm hiểu, nghiên cứu, trao đổi và chia sẻ những kiến thức của bản thân để đưa cộng đồng lĩnh vực tiêu chuẩn quốc tế ở Việt Nam ngày càng phát triển, các công ty ở Việt Nam ngày càng đạt đẳng cấp và chất lượng thế giới</p>
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
                            <a href="blog-details.html" className="heading">Điểm thay đổi, cải tiến của ISO 27001:2022 so với phiên bản 2013</a>
                            <div className="latest-content-bottom">
                                <div className="post-readmore">
                                    <a href="blog-details.html" className="read-more"><span className="text">Read
                                            More</span></a>
                                </div>
                                <span className="post-tag">ISO 27001</span>
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
                            <a href="blog-details.html" className="heading">Các doanh nghiệp nào nên triển khai PCI DSS?</a>
                            <div className="latest-content-bottom">
                                <div className="post-readmore">
                                    <a href="blog-details.html" className="read-more"><span className="text">Read
                                            More</span></a>
                                </div>
                                <span className="post-tag">PCI DSS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
