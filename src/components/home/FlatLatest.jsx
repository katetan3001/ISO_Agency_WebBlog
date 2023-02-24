import React from 'react'
import blogs from "../../data/blogs.json"

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
                            <a href="blog.html" className="button readmore">Xem Tất Cả</a>
                        </div>
                    </div>
                </div>
                {blogs.map((el, index) => 
                    <div key={index} className="col-md-4">
                        <div className="latest-content-box wow fadeInUp" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="latest-post">
                                <img src={el.info['latest-thumb']} alt="images"/>
                                <div className="post-date">{el.info.date.split(",")[0].split(" ")[0].slice(0,3).toLocaleUpperCase()} <br/> {el.info.date.split(",")[0].split(" ")[1]}</div>
                            </div>
                            <div className="latest-content link-style-2">
                                <a href={"/blog?"+el.info.id} className="heading">{el.info.title.length > 45 ? el.info.title.slice(0, 45)+" ..." : el.info.title}</a>
                                <div className="latest-content-bottom">
                                    <div className="post-readmore">
                                        <a href={"/blog?"+el.info.id} className="read-more"><span className="text">Xem Thêm</span></a>
                                    </div>
                                    <span className="post-tag">{el.info.category}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}
