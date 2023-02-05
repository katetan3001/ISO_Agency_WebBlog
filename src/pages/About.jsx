import React from 'react'
import Footer from '../components/plugins/Footer'
import Header from '../components/plugins/Header'
import MainAbout from '../components/about/MainAbout'
import Features from '../components/about/Features'
import { NavLink } from 'react-router-dom'
import FlatLogoSlogan from '../components/home/FlatLogoSlogan'
import useScript from '../useScript'

export default function About() {
  useScript('assets/js/swiper.js');
  return (
    <>
        <Header menuItem={1} />
        <section className="flat-title-page parallax parallax-2">
          <div className="container-fluid">
              <div className="row">
                  <div className="breadcrumbs">
                      <h2 className="section-title-page">Giới Thiệu MasterCert</h2>
                      <div className="breadcrumb-trail link-style-4">
                          <NavLink to={"/"}>Home</NavLink><span>Về Chúng Tôi</span>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        <MainAbout /> 
        <Features />
        <div className="row align-items-center" style={{"backgroundColor": "#F6F6F6"}}>
          <div className="col-md-12" style={{"marginTop": "80px"}}>
              <div className="section-title text-center wow fadeInDown" data-wow-delay="0ms"
                  data-wow-duration="1500ms">
                  <h3 className="section-heading">Các Khách Hàng Nổi Bật</h3>
                  <div className="features-content-left">
                      <h2>Những Doanh Nghiệp Lớn Đã Tin Tưởng Chúng Tôi<br/>
                          Và Họ Hài Lòng</h2>
                  </div>
              </div>
          </div>
        </div>
        <FlatLogoSlogan />
        <Footer />
    </>
  )
}
