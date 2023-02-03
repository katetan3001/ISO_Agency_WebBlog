import React from 'react'

export default function FlatWCU() {
  return (
    <section className="tf-space flat-wcu">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="section-title wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <h3 className="section-heading">Vì Sao Lựa Chọn MasterCert?</h3>
                        <div className="features-content-left">
                            <h2>Những Lý Do Khiến MasterCert Là Lựa Chọn Số 1</h2>
                        </div>
                        <p>MasterCert tự tin mang đến cho quý khách hàng những dịch vụ tối ưu nhất. Bất kỳ yêu cầu nào của quý khách hàng, MasterCert đều có thể đáp ứng, đơn giản hóa toàn bộ quá trình, đảm bảo vận hành ổn định với giá thành cực kỳ hợp lý.</p>
                    </div>
                    <div className="wcu-list-services wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="master-icon-box">
                            <span className="icon icon-express"></span>
                            <h3>Nhanh Nhất</h3>
                        </div>
                        <div className="master-icon-box">
                            <span className="icon-2 icon-achievement"></span>
                            <h3>Đơn Giản Nhất</h3>
                        </div>
                        <div className="master-icon-box">
                            <span className="icon-2 icon-wallet"></span>
                            <h3>Chi Phí Minh Bạch Nhất</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="wcu-content-right">
                        <div className="contact-request">
                            <h2>Đăng Kí Tư Vấn Miễn Phí</h2>
                            <hr/>
                            <hr/>
                            <form method="post" id="contactform" className="comment-form form-submit"
                                action="./contact/contact-process.php" acceptCharset="utf-8"
                                noValidate="noValidate">
                                <div className="text-wrap clearfix">
                                    <fieldset className="name-wrap">
                                        <input type="text" className="tb-my-input" name="name" tabIndex="1"
                                            placeholder="Họ Và Tên" defaultValue="" size="32" aria-required="true"
                                            required=""/>
                                    </fieldset>
                                    <fieldset className="email-wrap">
                                        <input type="tel" id="tel" className="tb-my-input" name="tel"
                                            tabIndex="2" placeholder="Số Điện Thoại" defaultValue="" size="32"
                                            aria-required="true" required=""/>
                                    </fieldset>
                                    <fieldset className="name-wrap">
                                        <input type="text" className="tb-my-input" name="business" tabIndex="1"
                                            placeholder="Tên Doanh Nghiệp" defaultValue="" size="32" aria-required="true"
                                            required=""/>
                                    </fieldset>
                                    <fieldset className="email-wrap">
                                        <select className="input-contact input-select valid" name="services"
                                            id="services">
                                            <option defaultValue="0">Tư Vấn Chứng Chỉ ISO 9001</option>
                                            <option defaultValue="1">Tư Vấn Chứng Chỉ ISO 20000</option>
                                            <option defaultValue="2">Tư Vấn Chứng Chỉ ISO 22000</option>
                                            <option defaultValue="3">Tư Vấn Chứng Chỉ ISO 27001</option>
                                            <option defaultValue="4">Tư Vấn Chứng Chỉ ISO 27017</option>
                                            <option defaultValue="5">Tư Vấn Chứng Chỉ ISO PCI-DSS</option>
                                            <option defaultValue="6">Tư Vấn Chứng Chỉ ISO 14001</option>
                                            <option defaultValue="7">Tư Vấn Chứng Chỉ ISO 45001</option>
                                            <option defaultValue="8">Tư Vấn Chứng Chỉ ISO 22301</option>
                                            <option defaultValue="9">Tư Vấn Chứng Chỉ SOC</option>
                                            <option defaultValue="10">Tư vấn và đánh giá An toàn và Bảo mật thông tin</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <button name="submit" type="submit" id="comment-reply"
                                    className="button btn-submit-comment readmore">Gửi Thông Tin</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
