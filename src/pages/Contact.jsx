import React from 'react'
import Header from '../components/plugins/Header'
import Title from '../components/plugins/Title'
import company from '../data/company.json'
import Footer from '../components/plugins/Footer'

export default function Contact() {
  return (
    <> 
        <Header menuItem={0} />
        <Title title={'Liên Hệ Chúng Tôi'} page={'Liên Hệ'} />
        <section className="tf-space flat-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="section-title link-style-2">
                            <h3 className="section-heading">Liên Hệ Chúng Tôi</h3>
                            <div className="features-content-left">
                                <h2>Gửi Thắc Mắc<br/>
                                Tới Chuyên Gia</h2>
                            </div>
                            <div className="contact-icon-box wow fadeInUp" data-wow-delay="0ms"
                                data-wow-duration="1500ms">
                                <div className="icon meta-address"></div>
                                <div className="content">
                                    <h4>{company[0].adress}</h4>
                                </div>
                            </div>
                            <div className="contact-icon-box wow fadeInUp" data-wow-delay="300ms"
                                data-wow-duration="1500ms">
                                <div className="icon meta-mail"></div>
                                <div className="content">
                                    <a href={"mailto:" + company[0].email[0]}>
                                        <h4>{company[0].email[0]}</h4>
                                    </a>
                                </div>
                                <div className="content">
                                    <a href={"mailto:" + company[0].email[1]}>
                                        <h4>{company[0].email[1]}</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="contact-icon-box wow fadeInUp" data-wow-delay="600ms"
                                data-wow-duration="1500ms">
                                <div className="icon meta-phone"></div>
                                <div className="content">
                                    <a href={"tel:"+ company[0].tel[0]}>
                                        <h4>{company[0].tel[0]}</h4>
                                    </a>
                                </div>
                                <div className="content">
                                    <a href={"tel:"+ company[0].tel[1]}>
                                        <h4>{company[0].tel[1]}</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="title">
                            <h3>Đừng Ngại Để Lại Lời Nhắn,<br/>
                                Chúng Tôi Hỗ Trợ 24/7</h3>
                        </div>
                        <div className="contact-form wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms"
                            id="comments">
                            <form method="post" id="contactform" className="comment-form form-submit"
                                action="./contact/contact-process.php" acceptCharset="utf-8"
                                noValidate="noValidate">
                                <div className="text-wrap clearfix">
                                    <fieldset className="name-wrap">
                                        <input type="text" id="name" className="tb-my-input" name="name" tabIndex="1"
                                            placeholder="Tên Hoặc Doanh Nghiệp" defaultValue="" size="32" aria-required="true" required=""/>
                                    </fieldset>
                                    <fieldset className="email-wrap">
                                    <input type="number" id="phone" className="tb-my-input" name="phone"
                                        tabIndex="2" placeholder="Số Điện Thoại" defaultValue="" size="32"
                                        aria-required="true" required/>
                                    </fieldset>
                                </div>
                                <fieldset className="message-wrap">
                                    <textarea id="comment-message" name="message" rows="13" tabIndex="4"
                                        placeholder="Lời Nhắn Của Bạn" aria-required="true"></textarea>
                                </fieldset>
                                <button name="submit" type="submit" id="comment-reply"
                                    className="button btn-style4 btn-submit-comment">Gửi Lời Nhắn</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}
