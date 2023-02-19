import React from 'react'

export default function FlatAbout() {
  return (
    <section className="tf-space flat-about">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="about-left-content wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="section-title">
                            <h3 className="section-heading">Về MasterCert</h3>
                            <h2>Năng Lực Được Chứng Minh Cùng Thành Tựu Và Thời Gian</h2>
                        </div>
                        <h3>Sứ mệnh</h3> <hr/> 
                        <p>Bằng kinh nghiệm và kiến thức tích lũy qua nhiều năm, MasterCert đã, đang và sẽ góp sức kiến tạo các doanh nghiệp Việt Nam nâng cao được chất lượng dịch vụ và đạt chuẩn mực quốc tế để hội nhập với thời đại nền kinh tế mở, kinh tế toàn cầu hóa.</p>
                        <h3>Tầm nhìn</h3> <hr/> 
                        <p className="font-weight-500">
                            MasterCert tiếp tục theo đuổi mục tiêu dài hạn trở thành doanh nghiệp hàng đầu tại Việt Nam về tư vấn, hỗ trợ trọn gói lấy chứng chỉ quốc tế ISO và các tiêu chuẩn, chứng chỉ bảo mật quốc tế.
                        </p>
                        <div className="progress-about">
                            <div className="couter">
                                <div className="chart" data-percent="100">
                                    <span className="percent">0</span>
                                </div>
                                <h3 className="heading-progress">Khách Hàng<br/>
                                    Thành Công</h3>
                            </div>
                        </div>
                        <div className="progress-about">
                            <div className="couter">
                                <div className="chart" data-percent="100">
                                    <span className="percent">0</span>
                                </div>
                                <h3 className="heading-progress">Hồ Sơ<br/>
                                    Đạt Chuẩn</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-right-content tf-counter wow fadeInRight" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="about-post">
                            <img src="assets/images/image-box/about-img-1@2x.jpg" alt="images"/>
                                <i className="ripple"></i>
                            <div className="about-counter-box wow fadeInUp" data-wow-delay="0ms"
                                data-wow-duration="1500ms">
                                <div className="about-counter-inner">
                                    <div className="number-counter">
                                        <span>0</span>
                                        <span className="number" data-speed="2000" data-to="9"
                                            data-inviewport="yes">9</span>
                                    </div>
                                    <div className="heading-count">
                                        <h3>Năm<br/>
                                            Kinh Nghiệm & Chuyên Môn</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
