import React from 'react'
import features from "../../data/features.json"
import { NavLink } from 'react-router-dom'
export default function Features() {
    return (
        <>
        <section className="tf-space flat-client">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="client-title-left">
                            <div className="section-title st-2 wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeInDown"}}>
                                <h3 className="section-heading no-bd">Điểm Khác Biệt So Với Thị Trường</h3>
                                <div className="features-content-left">
                                    <h3>Chỉ Có Tại MasterCert</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="swiper-container carousel client-carousel swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                            <div className="swiper-wrapper" id="swiper-wrapper-71b16f12b88de541" aria-live="polite" style={{transform: "translate3d(-1582.67px, 0px, 0px)", transitionDuration: "0ms"}}>
                                <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="0" role="group" aria-label="1 / 3" style={{width: "365.667px", marginRight: 30 + "px"}}>
                                    <div className="client-content-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeInUp"}}>
                                        <p>{features[0].about[0]}
                                        </p>
                                        <div className="list-review">
                                            <ul>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                            </ul>
                                        </div>
                                        <div className="top item-shape item-shape1"></div>
                                        <div className="top item-shape item-shape2"></div>
                                        <div className="bottom item-shape item-shape1"></div>
                                        <div className="bottom item-shape item-shape2"></div>
                                    </div>
                                </div>
                                <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="1" role="group" aria-label="2 / 3" style={{width: "365.667px", marginRight: 30 + "px"}}>
                                    <div className="client-content-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeInUp"}}>
                                        <p>{features[0].about[1]}</p>
                                        <div className="list-review">
                                            <ul>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                            </ul>
                                        </div>
                                        <div className="top item-shape item-shape1"></div>
                                        <div className="top item-shape item-shape2"></div>
                                        <div className="bottom item-shape item-shape1"></div>
                                        <div className="bottom item-shape item-shape2"></div>
                                    </div>
                                </div>
                                <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="2" role="group" aria-label="3 / 3" style={{width: "365.667px", marginRight: 30 + "px"}}>
                                    <div className="client-content-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeInUp"}}>
                                            <p>{features[0].about[2]}</p>
                                            <div className="list-review">
                                                <ul>
                                                    <li className="star-rate"></li>
                                                    <li className="star-rate"></li>
                                                    <li className="star-rate"></li>
                                                    <li className="star-rate"></li>
                                                    <li className="star-rate"></li>
                                                </ul>
                                            </div>
                                            <div className="top item-shape item-shape1"></div>
                                            <div className="top item-shape item-shape2"></div>
                                            <div className="bottom item-shape item-shape1"></div>
                                            <div className="bottom item-shape item-shape2"></div>
                                    </div>
                                </div>
                                <div className="swiper-slide " data-swiper-slide-index="0" role="group" aria-label="1 / 3" style={{width: "365.667px", marginRight: 30 + "px"}}>
                                    <div className="client-content-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeInUp"}}>
                                        <p>{features[0].about[3]}
                                        </p>
                                        <div className="list-review">
                                            <ul>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                            </ul>
                                        </div>
                                        <div className="top item-shape item-shape1"></div>
                                        <div className="top item-shape item-shape2"></div>
                                        <div className="bottom item-shape item-shape1"></div>
                                        <div className="bottom item-shape item-shape2"></div>
                                    </div>
                                </div>
                                <div className="swiper-slide " data-swiper-slide-index="1" role="group" aria-label="2 / 3" style={{width: "365.667px", marginRight: 30 + "px"}}>
                                    <div className="client-content-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeInUp"}}>
                                        <p>{features[0].about[4]}</p>
                                        <div className="list-review">
                                            <ul>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                            </ul>
                                        </div>
                                        <div className="top item-shape item-shape1"></div>
                                        <div className="top item-shape item-shape2"></div>
                                        <div className="bottom item-shape item-shape1"></div>
                                        <div className="bottom item-shape item-shape2"></div>
                                    </div>
                                </div>
                                <div className="swiper-slide " data-swiper-slide-index="2" role="group" aria-label="3 / 3" style={{width: "365.667px", marginRight: 30 + "px"}}>
                                    <div className="client-content-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeInUp"}}>
                                        <p>{features[0].about[5]}</p>
                                        <div className="list-review">
                                            <ul>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                                <li className="star-rate"></li>
                                            </ul>
                                        </div>
                                        <div className="top item-shape item-shape1"></div>
                                        <div className="top item-shape item-shape2"></div>
                                        <div className="bottom item-shape item-shape1"></div>
                                        <div className="bottom item-shape item-shape2"></div>
                                    </div>
                                </div>
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                        <div className="swiper-button-next btn-custom-carousel-next" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-3dec42f43ae78c35"></div>
                        <div className="swiper-button-prev btn-custom-carousel-prev" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-3dec42f43ae78c35"></div>
                    </div>                    
                </div>
            </div>
        </section>
        <section className="tf-space flat-service-details" >
            <div className='container'>
                <div className='row'>
                <div className="col-md-4">
                        <div className="client-title-left">
                            <div className="section-title st-2 wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeInDown"}}>
                                <h3 className="section-heading no-bd">Dịch Vụ Nổi Bật</h3>
                                <div className="features-content-left">
                                    <h3>Các Dịch Vụ Tư Vấn Chuyên Biệt Tại MasterCert</h3>
                                </div>
                                <div className="button-footer" style={{marginTop: "40px"}}>
                                <NavLink to={'/dich-vu'} className="button readmore">Xem Tất Cả Dịch Vụ</NavLink>
                                 </div>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 col-md-12 side-bar wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeInDown"}}>
                    <ul className="list-menu">
                        <li><NavLink to={"/dich-vu"}>Tư vấn trọn gói ISO 9001 <span className="readmore"></span></NavLink>
                        </li>
                        <li className="active"><NavLink to={"/dich-vu"}>Tư vấn trọn gói ISO 14001 <span className="readmore active"></span></NavLink></li>
                        <li><NavLink to={"/dich-vu"}>Tư vấn trọn gói ISO 45001 <span className="readmore"></span></NavLink>
                        </li>
                        <li><NavLink to={"/dich-vu"}>Tư vấn trọn gói ISO 20000 <span className="readmore"></span></NavLink>
                        </li>
                        <li><NavLink to={"/dich-vu"}>Tư vấn trọn gói ISO 22000 <span className="readmore"></span></NavLink>
                        </li>
                        <li><NavLink to={"/dich-vu"}>Tư vấn trọn gói ISO 22301 <span className="readmore"></span></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12 side-bar wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeInDown"}}>
                    <ul className="list-menu">
                        <li><NavLink to={"/dich-vu"}>Tư vấn trọn gói ISO 27001 <span className="readmore"></span></NavLink>
                        </li>
                        <li className="active"><NavLink to={"/dich-vu"}>Tư vấn trọn gói ISO 27017 <span className="readmore active"></span></NavLink></li>
                        <li><NavLink to={"/dich-vu"}>Tư vấn trọn gói PCI DSS <span className="readmore"></span></NavLink>
                        </li>
                        <li><NavLink to={"/dich-vu"}>Tư vấn trọn gói <br/> cấp chứng chỉ SOC <span className="readmore"></span></NavLink>
                        </li>
                        <li><NavLink to={"/dich-vu"}>Tư vấn, đánh giá An toàn & <br/> Bảo mật thông tin <span className="readmore"></span></NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
