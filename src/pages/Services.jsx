import React from 'react'
import Footer from '../components/plugins/Footer'
import Header from '../components/plugins/Header'
import ServiceCard from '../components/plugins/ServiceCard'
import services from '../data/services.json'
import Contact from '../components/about/Contact'
import useScript from '../useScript';
export default function Services() {
    useScript('assets/js/shortcodes.js');
    useScript('assets/js/swiper.js');
    return (
    <>
    <Header menuItem={2}/>
    <div>
        <section className="flat-title-page parallax parallax-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="breadcrumbs">
                        <h2 className="section-title-page">Danh Sách Dịch Vụ</h2>
                        <div className="breadcrumb-trail link-style-4">
                            <a className="home" href="index.html">Home</a><span>Dịch Vụ</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="tf-space flat-service">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section-title wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="features-content-left">
                                <h2>Trung Tâm Tư Vấn Chứng Chỉ Quốc Tế<br />
                                    Hàng Đầu Dành Cho Doanh Nghiệp</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-content-right wow fadeInDown" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <p>Triết lý kinh doanh của MasterCert là đồng hành và làm hài lòng khách hàng mọi nơi mọi lúc. Hỗ trợ trọn gói lấy chứng chỉ quốc tế ISO và các tiêu chuẩn, chứng chỉ bảo mật quốc tế.</p>
                        </div>
                    </div>
                    {services[0].card.map((el, i) => 
                    i=== 1 ? <ServiceCard key={i} active={true} cert={el.title} imgPath={el.imgPath} /> : <ServiceCard key={i} active={false} cert={el.title} imgPath={el.imgPath} />)}
                </div>
            </div>
        </section>
        <Contact />
    </div>
    <Footer />
    </>
    )
}
