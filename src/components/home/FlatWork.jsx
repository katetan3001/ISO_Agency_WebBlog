import React from 'react'
import Swiper from '../plugins/Swiper'
import services from '../../data/services.json'
import { NavLink } from 'react-router-dom';
export default function FlatWork() {
    console.log(services);
    return (
    <section className="tf-space flat-work">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="section-title wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <NavLink to={'/dich-vu'}><h3 className="section-heading">{'Các dịch vụ của MasterCert >>'}</h3></NavLink>
                        <div className="features-content-left">
                            <h2>Tìm Hiểu Các Dịch Vụ Đào Tạo, Tư Vấn Nổi Bật</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-12" style={{marginTop: "30px", marginBottom: "30px"}}>
                    <div className="swiper-button-next btn-custom-carousel-next"></div>
                    <div className="swiper-button-prev btn-custom-carousel-prev"></div>
                </div>
                <div className="col-md-12">
                    <div className="swiper-container carousel-2 work-carousel">
                        <div className="swiper-wrapper">
                            {services[0].card.map((e, i) => {return i === 1 ? <Swiper 
                            key={i}
                            active={true}
                            type={'services'}
                            title={e.title}
                            imgPath={e.icon}
                            /> : <Swiper 
                            key={i}
                            active={false}
                            type={'services'}
                            title={e.title}
                            imgPath={e.icon}
                            />;})}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
