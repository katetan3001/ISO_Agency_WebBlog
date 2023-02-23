import React from 'react'
import blogs from "../../data/blogs.json"
export default function SideTabs() {
  return (
    <aside className="side-bar">
        <div className="widget widget-search">
            <h3 className="widget-title section-24px-barlow">
                Search
            </h3>
            <form action="#" method="get" role="search" className="search-form">
                <input type="search" className="search-field" placeholder="Nhập Từ Khoá..." defaultValue=""
                    name="iso 9001" title="Tìm Kiếm Tin Tức" required=""/>
                <button className="search search-submit" type="submit" title="Tìm Kiếm"></button>
            </form>
        </div>
        <div className="widget widget-category">
            <h3 className="widget-title section-24px-barlow">
                Danh Mục Bài Đăng
            </h3>
            <ul>
                <li className="cat-item active"><a href="http://blog.mastercert.vn/">ISO 9001:2015</a><span>36</span></li>
                <li className="cat-item"><a href="http://blog.mastercert.vn/">ISO 14001:2015</a><span>32</span></li>
                <li className="cat-item"><a href="http://blog.mastercert.vn/">ISO 20000:2018</a><span>26</span></li>
                <li className="cat-item"><a href="http://blog.mastercert.vn/">ISO 22301:2019</a><span>16</span></li>
                <li className="cat-item"><a href="http://blog.mastercert.vn/">ISO 27001:2022</a><span>32</span></li>
                <li className="cat-item"><a href="http://blog.mastercert.vn/">ISO 27002:2022</a><span>32</span></li>
                <li className="cat-item"><a href="http://blog.mastercert.vn/">ISO 27017:2015</a><span>16</span></li>
                <li className="cat-item"><a href="http://blog.mastercert.vn/">PCI - DSS</a><span>26</span></li>
                <li className="cat-item"><a href="http://blog.mastercert.vn/">SWIFT</a><span>26</span></li>
                <li className="cat-item"><a href="http://blog.mastercert.vn/">SOC v1,2,3</a><span>16</span></li>
            </ul>
        </div>
        <div className="widget widget-recent-post">
            <h3 className="widget-title section-24px-barlow">
                Tin Tức Mới Nhất
            </h3>
            <ul className="recent-news link-style-2">
                {blogs.list.map((el, i) => {
                    return (                
                    <li key={i}>
                        <div className="thumb"><img src={el.thumbnail} alt={"thumb-"+ i}/></div>
                        <div className="texts">
                            <h3><a href={el.link}>{el.title}</a></h3>
                            <span className="post-date">{el.date}</span>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div>
        <div className="widget widget-tag-cloud">
            <h3 className="widget-title section-24px-barlow">
                Các Tag Phổ Biến
            </h3>
            <div className="tag-cloud">
                <a href="http://blog.mastercert.vn/" className="tag-cloud-links active section-16px-regular">Công Nghệ Thông Tin</a>
                <a href="http://blog.mastercert.vn/" className="tag-cloud-links section-16px-regular">Ngân Hàng</a>
                <a href="http://blog.mastercert.vn/" className="tag-cloud-links section-16px-regular">Thanh Toán</a>
                <a href="http://blog.mastercert.vn/" className="tag-cloud-links section-16px-regular">Công Nghiệp Sản Xuất</a>
                <a href="http://blog.mastercert.vn/" className="tag-cloud-links section-16px-regular">Chế Biến Thực Phẩm</a>
            </div>
        </div>
    </aside>
  )
}
