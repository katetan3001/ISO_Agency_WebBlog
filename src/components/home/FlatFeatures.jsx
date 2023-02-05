import React from 'react'
import Swiper from '../plugins/Swiper'
import features from '../../data/features.json'

export default function FlatFeatures() {
  return (
    <section className="tf-space flat-features">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="features-content wow fadeInDown" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="section-title">
                            <h3 className="section-heading">Điều Gì Đặc Biệt Ở MasterCert?</h3>
                            <div className="features-content-left">
                                <h2>Đưa Doanh Nghiệp Của Bạn Lên Một Tầm Cao Mới</h2>
                            </div>
                        </div>
                        <div className="features-content-right">
                            <p>MasterCert luôn mang đến cho khách hàng những tiếp cận “mới mẻ” và “hiệu quả” đối với quy trình hiện có, cập nhật nhanh chóng nhất bởi các chuyên gia hàng đầu</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="swiper-container carousel">
                        <div className="swiper-wrapper">
                            {
                                features[0].home.map((el, i) => i === 1 ? <Swiper 
                                key={i}
                                type='features'
                                title={el.title}
                                active={true}
                                description={el.description}
                                imgPath = {el.icon}
                                img = {el.img}
                                /> : <Swiper 
                                key={i}
                                type='features'
                                title={el.title}
                                active={false}
                                description={el.description}
                                imgPath = {el.icon}
                                img = {el.img}
                                />)
                            }
                        </div>
                        <div className="swiper-pagination features-bullet"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
