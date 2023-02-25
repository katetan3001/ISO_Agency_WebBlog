import React from 'react'
import Title from '../components/plugins/Title'
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
        <Title title={'Danh Sách Dịch Vụ'} page={'Dịch Vụ'} />
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
                    {services.map((el, i) => 
                    i=== 1 ? <ServiceCard key={i} active={true} cert={el.title} imgPath={el.post.thumbnail} link={el.post.link}/> : <ServiceCard key={i} active={false} cert={el.title} imgPath={el.post.thumbnail} link={el.post.link}/>)}
                </div>
            </div>
        </section>
        <Contact />
    </div>
    <Footer />
    </>
    )
}
