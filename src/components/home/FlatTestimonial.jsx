import React from 'react'
import testimonial from '../../data/testimonials.json'
import Swiper from '../plugins/Swiper'
export default function FlatTestimonial() {
  return (
    <section className="tf-space flat-testimonial">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12">
                    <div className="section-title text-center wow fadeInDown" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <h3 className="section-heading">Các Khách Hàng Nổi Bật</h3>
                        <div className="features-content-left">
                            <h2>Những Doanh Nghiệp Lớn Đã Tin Tưởng Chúng Tôi<br/>
                                Và Họ Hài Lòng</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="testimonial-content-left">
                        <div className="testimonial-post">
                            <div className="main-post wow fadeInLeft" data-wow-delay="0ms"
                                data-wow-duration="1500ms">
                                <img src="assets/images/image-box/testimonial-post-1@2x.jpg" alt="images"/>
                            </div>
                            <div className="mark-post-1">
                                <img src="assets/images/mark-image/mark-post-testimonial.png" alt="images"/>
                            </div>
                            <div className="mark-post-2">
                                <img src="assets/images/mark-image/mark-testimonial-2.png" alt="images"/>
                            </div>
                            <div className="testimonial-btn-slider">
                                <div className="swiper-button-next btn-custom-carousel-next"></div>
                                <div className="swiper-button-prev btn-custom-carousel-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="testimonial-content-right wow fadeInRight" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="swiper-container slider-vertical">
                            <div className="swiper-wrapper">
                                {
                                    testimonial.map((el, i) => {
                                        return <Swiper 
                                        key={i}
                                        type='testimonials'
                                        title={el.title}
                                        description={el.testimonial}
                                        imgPath={el.ref}
                                        />
                                    })
                                }
                                {/* <div className="swiper-slide">
                                    <div className="testimonial-slide-box">
                                        <div className="testimonal-content">
                                            <p>Improve efficiency, provide a better customer experience with
                                                modern technology services available around the world. Our
                                                skilled staff, combined with decades of experience.</p>
                                        </div>
                                        <div className="testimonal-icon">
                                            <span className="icon-tes"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-slide-box">
                                        <div className="testimonal-content">
                                            <p>Improve efficiency, provide a better customer experience with
                                                modern technology services available around the world. Our
                                                skilled staff, combined with decades of experience.</p>
                                        </div>
                                        <div className="testimonal-icon">
                                            <span className="icon-tes"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-slide-box">
                                        <div className="testimonal-content">
                                            <p>Improve efficiency, provide a better customer experience with
                                                modern technology services available around the world. Our
                                                skilled staff, combined with decades of experience.</p>
                                        </div>
                                        <div className="testimonal-icon">
                                            <span className="icon-tes"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-slide-box">
                                        <div className="testimonal-content">
                                            <p>Improve efficiency, provide a better customer experience with
                                                modern technology services available around the world. Our
                                                skilled staff, combined with decades of experience.</p>
                                        </div>
                                        <div className="testimonal-icon">
                                            <span className="icon-tes"></span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
