import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainAbout() {
  return (
    <>
        <section className="tf-space flat-about-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-2-content-left wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms" style={{"visibility": "visible", "animationDuration": "1500ms", "animationDelay": "0ms", "animationName": "fadeInLeft"}}>
                            <div className="section-title st-2">
                                <h3 className="section-heading">Về Chúng Tôi</h3>
                                <div className="features-content-left">
                                    <h3>Trung Tâm Tư Vấn Hàng Đầu<br/>
                                        Chứng Chỉ - Tiêu Chuẩn Quốc Tế</h3>
                                </div>
                                <p>Triết lý kinh doanh của MasterCert là đồng hành và làm hài lòng khách hàng mọi nơi mọi lúc</p>
                            </div>
                            <div className="about-our-company">
                                <div className="icon-tick"></div>
                                <div className="content-box">
                                    <h4>Sứ Mệnh</h4>
                                    <p>Bằng kinh nghiệm và kiến thức tích lũy qua nhiều năm, MasterCert đã, đang và sẽ góp sức kiến tạo các doanh nghiệp Việt Nam nâng cao được chất lượng dịch vụ và đạt chuẩn mực quốc tế để hội nhập với thời đại nền kinh tế mở, kinh tế toàn cầu hóa.</p>
                                </div>
                            </div>
                            <div className="about-our-company">
                                <div className="icon-tick"></div>
                                <div className="content-box">
                                    <h4>Tầm Nhìn</h4>
                                    <p>MasterCert tiếp tục theo đuổi mục tiêu dài hạn trở thành doanh nghiệp hàng đầu tại Việt Nam về tư vấn, hỗ trợ trọn gói lấy chứng chỉ quốc tế ISO và các tiêu chuẩn, chứng chỉ bảo mật quốc tế.</p>
                                </div>
                            </div>
                            <div className="about-our-company">
                                <div className="icon-tick"></div>
                                <div className="content-box">
                                    <h4>Giá Trị Cốt Lõi</h4>
                                    <p>Kinh nghiệm – Kiến thức – Linh hoạt – Nhiệt thành – Khách hàng là trọng tâm.</p>
                                </div>
                            </div>
                            <div className="button-contact wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms" style={{"visibility": "visible", "animationDuration": "1500ms", "animationDelay": "500ms", "animationName": "fadeInUp"}}>
                                <NavLink to={'/'} className="button readmore btn-style3">Liên Hệ Chúng Tôi</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-2-content-right">
                            <div className="about-2-post wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms" style={{"visibility": "visible", "animationDuration": "1500ms", "animationDelay": "0ms", "animationName": "fadeInRight"}}>
                                <img src="assets/images/image-box/about-2-post@2x.jpg" alt="images"/>
                            </div>
                            <div className="about-counter-box tf-counter wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms" style={{"visibility": "visible", "animationDuration": "1500ms", "animationDelay": "500ms", "animationName": "fadeInUp"}}>
                                <div className="about-counter-inner">
                                    <div className="number-counter">
                                        <span>0</span>
                                        <span className="number" data-speed="1000" data-to="9" data-inviewport="yes">9</span>
                                    </div>
                                    <div className="heading-count">
                                        <h3>Năm<br/>
                                            Kinh Nghiệm</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="mark-about-post wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms" style={{"visibility": "visible", "animationDuration": "1500ms", "animationDelay": "300ms", "animationName": "fadeInDown"}}>
                                <img src="assets/images/mark-image/mark-about-2-post.png" alt="images"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="tf-space flat-counter tf-counter">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="about-counter-inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{"visibility": "visible", "animationDuration": "1500ms", "animationDelay": "0", "animationName": "fadeInUp"}}>
                        <div className="number-counter">
                            <span>0</span>
                            <span className="number" data-speed="1" data-to="9" data-inviewport="yes">9</span>
                        </div>
                        <div className="heading-count">
                            <h3>NĂM<br/>
                                KINH NGHIỆM</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="about-counter-inner wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style={{"visibility": "visible", "animationDuration": "1500ms", "animationDelay": "300", "animationName": "fadeInUp"}}>
                        <div className="number-counter">
                            <span className="number" data-speed="69" data-to="695" data-inviewport="yes">695</span>
                        </div>
                        <div className="heading-count">
                            <h3>KHÁCH HÀNG <br/>
                                TIN TƯỞNG</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="about-counter-inner wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms" style={{"visibility": "visible", "animationDuration": "1500ms", "animationDelay": "600", "animationName": "fadeInUp"}}>
                        <div className="number-counter">
                            <span className="number" data-speed="33" data-to="330" data-inviewport="yes">330</span>
                        </div>
                        <div className="heading-count">
                            <h3>DỰ ÁN <br/>
                                HOÀN THÀNH</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="about-counter-inner wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms" style={{"visibility": "visible", "animationDuration": "1500ms", "animationDelay": "900", "animationName": "fadeInUp"}}>
                        <div className="number-counter">
                            <span className="number" data-speed="2" data-to="25" data-inviewport="yes">25</span>
                        </div>
                        <div className="heading-count">
                            <h3>CHUYÊN GIA <br/>
                                TƯ VẤN</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}
