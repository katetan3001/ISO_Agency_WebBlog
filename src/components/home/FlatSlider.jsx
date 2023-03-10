import React from 'react'

export default function FlatSlider() {
  return (
    <section className="flat-slider">
    <div className="container-fluid">
        <div className="row">
            <div className="swiper-container mainslider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="slider-item">
                            <div className="slider-left">
                                <div className="slider-left-content">
                                    <h3>Cùng MasterCert</h3>
                                    <h2>Lấy Chứng Nhận Quốc Tế "dễ dàng và nhanh chóng"</h2>
                                    <p>Với những chuyên gia có "tiếng" trong lĩnh vực tiêu chuẩn quốc tế, MasterCert cam kết nhanh chóng hoàn thiện hồ sơ tài liệu, khắc phục các điểm chưa phù hợp với tiêu chuẩn và đồng hành cùng khách hàng đến khi lấy được chứng nhận.</p>
                                    <div className="button-slider">
                                        <a href="/lien-he" className="button readmore">Tư Vấn Miễn Phí</a>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-right">
                                <div className="image-slider">
                                    <img src="assets/images/image-slider/iso-9001.png" alt="images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="slider-item">
                            <div className="slider-left">
                                <div className="slider-left-content">
                                    <h3>Trung Tâm Tư Vấn Hàng Đầu Việt Nam</h3>
                                    <h2>Đưa doanh nghiệp vươn tầm thế giới</h2>
                                    <p>Bằng kinh nghiệm và kiến thức tích lũy qua nhiều năm, MasterCert đã, đang và sẽ góp sức kiến tạo các doanh nghiệp Việt Nam nâng cao được chất lượng dịch vụ và đạt chuẩn mực quốc tế để hội nhập với thời đại nền kinh tế mở, kinh tế toàn cầu hóa.</p>
                                    <div className="button-slider">
                                        <a href="/lien-he" className="button readmore">Tư Vấn Miễn Phí</a>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-right">
                                <div className="image-slider">
                                    <img src="assets/images/image-slider/iso-27001.png" alt="images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-button-next btn-slide-next"></div>
                <div className="swiper-button-prev btn-slide-prev active"></div>
            </div>
        </div>
    </div>
    </section>
  )
}
