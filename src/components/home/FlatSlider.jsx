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
                                    <h2>Minh Chứng Giá Trị Khắp Mọi Nơi</h2>
                                    <p>Bằng kinh nghiệm và kiến thức tích lũy qua nhiều năm, MasterCert đã, đang và sẽ góp sức kiến tạo các doanh nghiệp Việt Nam nâng cao được chất lượng dịch vụ và đạt chuẩn mực quốc tế để hội nhập với thời đại nền kinh tế mở, kinh tế toàn cầu hóa.</p>
                                    <div className="button-slider">
                                        <a href="contact.html" className="button readmore">Tư Vấn Miễn Phí</a>
                                        <a href="https://www.youtube.com/embed/xC4ze0p0b5Y"
                                            className="video button btn-slider readmore lightbox-image">Khảo Sát Thử</a>
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
                                    <h2>Chứng Chỉ Quốc Tế Trong Tầm Tay</h2>
                                    <p>Bằng kinh nghiệm và kiến thức tích lũy qua nhiều năm, MasterCert đã, đang và sẽ góp sức kiến tạo các doanh nghiệp Việt Nam nâng cao được chất lượng dịch vụ và đạt chuẩn mực quốc tế để hội nhập với thời đại nền kinh tế mở, kinh tế toàn cầu hóa.</p>
                                    <div className="button-slider">
                                        <a href="contact.html" className="button readmore">Tư Vấn Miễn Phí</a>
                                        <a href="https://www.youtube.com/embed/xC4ze0p0b5Y" className="video button btn-slider readmore lightbox-image"> Kiểm Tra Thử </a>
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
                    <div className="swiper-slide">
                        <div className="slider-item">
                            <div className="slider-left">
                                <div className="slider-left-content">
                                    <h3>Tiêu Chuẩn Toàn Cầu</h3>
                                    <h2>Một Lần Đánh Giá Duy NhấtZ</h2>
                                    <p>Bằng kinh nghiệm và kiến thức tích lũy qua nhiều năm, MasterCert đã, đang và sẽ góp sức kiến tạo các doanh nghiệp Việt Nam nâng cao được chất lượng dịch vụ và đạt chuẩn mực quốc tế để hội nhập với thời đại nền kinh tế mở, kinh tế toàn cầu hóa.</p>
                                    <div className="button-slider">
                                        <a href="contact.html" className="button readmore">Tư Vấn Miễn Phí</a>
                                        <a href="https://www.youtube.com/embed/xC4ze0p0b5Y" className="video button btn-slider readmore lightbox-image"> Kiểm Tra Thử </a>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-right">
                                <div className="image-slider">
                                    <img src="assets/images/image-slider/pci-dss.png" alt="images"/>
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
