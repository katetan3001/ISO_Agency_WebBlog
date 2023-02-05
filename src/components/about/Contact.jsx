import React from 'react'

export default function Contact() {
  return (
    <section className="tf-space flat-contact-request">
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <div className="section-title wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="features-content-left">
                        <h2>Cần Tư Vấn Một<br />
                            Chứng Chỉ Khác?</h2>
                    </div>
                    <div className="contact-request-form">
                        <form method="post" className="contact-request" acceptCharset="utf-8">
                            <div className="text-wrap clearfix">
                                <fieldset className="name-wrap">
                                    <input type="text" id="name" className="tb-my-input" name="name"
                                        tabIndex="1" placeholder="Họ Và Tên" defaultValue="" size="32"
                                        aria-required="true" required/>
                                </fieldset>
                                <fieldset className="email-wrap">
                                    <input type="text" id="email" className="tb-my-input" name="email"
                                        tabIndex="2" placeholder="Email" defaultValue="" size="32"
                                        aria-required="true" required/>
                                </fieldset>
                                <fieldset className="email-wrap">
                                    <input type="number" id="phone" className="tb-my-input" name="phone"
                                        tabIndex="2" placeholder="Số Điện Thoại" defaultValue="" size="32"
                                        aria-required="true" required/>
                                </fieldset>
                            </div>
                            <button name="submit" type="submit" id="comment-reply"
                                className="button readmore btn-submit-comment">Đăng Kí Dịch Vụ Đặc Biệt</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-7">
                <div className="contact-request-content">
                    <div className="post">
                        <img src="assets/images/image-box/contact-request-post@2x.jpg" alt="images"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
