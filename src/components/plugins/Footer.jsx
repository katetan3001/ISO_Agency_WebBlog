import React from 'react'
import company from '../../data/company.json'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <footer id="footer" className="clearfix">
            <div id="footer-top" className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-schedule">
                            <div className="heading-schedule">
                                <h2 className="section-40px-barlow font-weight-500">Bạn cần được tư vấn ngay ?</h2>
                            </div>
                            <div className="button-footer">
                                <a href="contact.html" className="button readmore">Đặt Tư Vấn Miễn Phí</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-widgets" className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="logo-footer">
                            <a href="index.html" rel="home" className="main-logo">
                                <img src="assets/images/logo/logo-dark.png" alt="images"/>
                            </a>
                        </div>
                        <p className="text-widget">Chúng tôi tư vấn, hỗ trợ phù hợp với tất cả các tổ chức đánh giá lấy chứng nhận quốc tế (BSI, Tuvnord, SISA, Bureau Veritas, ControlCase, CMC, FPT, Crossbowlabs, ….)</p>
                        <div className="widget-social">
                            <ul>
                                <li><a href="#" className="facebook-icon"></a></li>
                                <li><a href="#" className="linked-icon"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="footer-widgets-nav-menu text-white">
                            <div className="menu-1">
                                <h3 className="widget-title-link-wrap">Về MasterCert</h3>
                                <div className="widget-links">
                                    <ul className="link-wrap">
                                        <li><a><NavLink to={"/ve-chung-toi"}/> Giới Thiệu </a></li>
                                        <li><a><NavLink to={"/dich-vu"} /> Dịch Vụ </a></li>
                                        <li><a><NavLink to={"/dich-muc"} /> Danh Mục </a></li>
                                    </ul>
                                    <ul className="link-wrap">
                                        <li><a><NavLink to={"/tai-lieu"}/>Tài Liệu</a></li>
                                        <li><a><NavLink to={"/kien-thuc"} />Kiến Thức</a></li>
                                        <li><a><NavLink to={"/tin-tuc"} />Tin Tức</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="menu-2">
                                <h3 className="widget-title-link-wrap">Bài Viết Hữu Ích</h3>
                                <ul className="link-wrap menu2">
                                    {company[1].footerBlogs.map((el, i) => <li><a href={el.link}>{el.title}</a></li>)}
                                </ul>
                            </div>
                            <div className="menu-3">
                                <h3 className="widget-title-link-wrap style-2">Liên Hệ Văn Phòng</h3>
                                <ul className="widget-list-contact link-style-4">
                                    <li>
                                        <span className="meta-address">{company[0].adress}</span>
                                    </li>
                                    <li><a href={'mailto:' + company[0].email}
                                            className="meta-mail">{company[0].email}</a>
                                    </li>
                                    <li><a href={'tel:' + company[0].tel} className="meta-phone">{company[0].tel}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div id="bottom" className="clearfix has-spacer">
            <div id="bottom-bar-inner" className="container">
                <div className="bottom-bar-inner-wrap">
                    <div className="bottom-bar-content-left link-style-4">
                        <div id="copyright"><span className="text">Copyright © 2023 MasterCert</span>
                        </div>
                    </div>
                    <div className="bottom-bar-content-right">
                        <div className="widget-links-bottom link-style-4"> Tổ chức Tư Vấn Chứng Nhận Quốc tế</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
