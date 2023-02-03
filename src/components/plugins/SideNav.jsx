import React from 'react'

export default function SideNav() {
  return (
    <div className="side-menu__block">
    <div className="side-menu__block-overlay custom-cursor__overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
    </div>
    <div className="side-menu__block-inner">
        <div className="side-menu__top justify-content-end">
            <a href="#" className="side-menu__toggler side-menu__close-btn"><img
                    src="assets/icon/close-1-1.png" alt="close" /></a>
        </div>
        <div className="side-menu__top-introduce">
            <a href="index.html" rel="home" className="main-logo">
                <img src="assets/images/logo/logo.png" alt="logo" />
            </a>
            <p>MasterCert tiếp tục theo đuổi mục tiêu dài hạn trở thành doanh nghiệp hàng đầu tại Việt Nam về tư vấn, hỗ trợ trọn gói lấy chứng chỉ quốc tế ISO và các tiêu chuẩn, chứng chỉ bảo mật quốc tế.</p>
            <hr/>
        </div>
        <div className="side-menu__top-search">
            <div className="widget widget-search">
                <h3 className="widget-title section-24px-barlow">
                    Tìm Chứng Chỉ
                </h3>
                <form action="#" method="get" role="search" className="search-form">
                    <input type="search" className="search-field" placeholder="Tìm Chứng Chỉ..." defaultValue="" name="s"
                        title="Search for" required=""/>
                    <button className="search search-submit" type="submit" title="Search"></button>
                </form>
            </div>
        </div>
        <hr/>
        <div className="side-menu__top-category">
            <div className="widget widget-category">
                <h3 className="widget-title section-24px-barlow">
                    Chứng chỉ theo ngành nghề
                </h3>
                <ul>
                    <li className="cat-item active"><a href="blog.html">CNTT - Viễn Thông </a><span>8</span></li>
                    <li className="cat-item"><a href="blog.html">Ngân Hàng - Thanh Toán</a><span>6</span>
                    </li>
                    <li className="cat-item"><a href="blog.html">Sản Xuất-Công Nghiệp</a><span>2</span></li>
                    <li className="cat-item"><a href="blog.html">Công Ty-Tổ Chức Khác</a><span>12</span></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
)
}
