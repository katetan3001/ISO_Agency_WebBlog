import React from 'react'
import Footer from '../components/plugins/Footer'
import Header from '../components/plugins/Header'

export default function Services() {
  return (
    <>
    <Header menuItem={2}/>
    <div>
      <section class="flat-title-page parallax parallax-3">
          <div class="container-fluid">
              <div class="row">
                  <div class="breadcrumbs">
                      <h2 class="section-title-page">Services we're offering</h2>
                      <div class="breadcrumb-trail link-style-4">
                          <a class="home" href="index.html">Home</a><span>Service</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section class="tf-space flat-service">
          <div class="container">
              <div class="row">
                  <div class="col-md-6">
                      <div class="section-title wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                          <div class="features-content-left">
                              <h2>Our Business & Financial<br />
                                  Consulting Services</h2>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="service-content-right wow fadeInDown" data-wow-delay="0ms"
                          data-wow-duration="1500ms">
                          <p>Improve efficiency, provide a better customer experience with modern technology
                              services available around the world. Our skilled staff, combined with decades of
                              experience.</p>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="service-box">
                          <div class="services-post">
                              <img src="assets/images/image-box/services-post-1@2x.jpg" alt="images" />
                          </div>
                          <div class="service-content">
                              <div class="inner">
                                  <h4>Consulting</h4>
                                  <h3>Financial Advices</h3>
                                  <hr />
                              </div>
                              <a href="service-details.html" class="readmore">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="service-box active">
                          <div class="services-post">
                              <img src="assets/images/image-box/services-post-2@2x.jpg" alt="images" />
                          </div>
                          <div class="service-content">
                              <div class="inner">
                                  <h4>Corporate</h4>
                                  <h3>Business Growth</h3>
                                  <hr />
                              </div>
                              <a href="service-details.html" class="readmore">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="service-box">
                          <div class="services-post">
                              <img src="assets/images/image-box/services-post-3@2x.jpg" alt="images" />
                          </div>
                          <div class="service-content">
                              <div class="inner">
                                  <h4>Financial</h4>
                                  <h3>Planning Strategies</h3>
                                  <hr/>
                              </div>
                              <a href="service-details.html" class="readmore">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="service-box">
                          <div class="services-post">
                              <img src="assets/images/image-box/services-post-4@2x.jpg" alt="images"/>
                          </div>
                          <div class="service-content">
                              <div class="inner">
                                  <h4>Investment</h4>
                                  <h3>Financial Advices</h3>
                                  <hr/>
                              </div>
                              <a href="service-details.html" class="readmore">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="service-box">
                          <div class="services-post">
                              <img src="assets/images/image-box/services-post-5@2x.jpg" alt="images"/>
                          </div>
                          <div class="service-content">
                              <div class="inner">
                                  <h4>Management</h4>
                                  <h3>Marketing Research</h3>
                                  <hr />
                              </div>
                              <a href="service-details.html" class="readmore">Read More</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="service-box">
                          <div class="services-post">
                              <img src="assets/images/image-box/services-post-6@2x.jpg" alt="images"/>
                          </div>
                          <div class="service-content">
                              <div class="inner">
                                  <h4>Consulting</h4>
                                  <h3>Audit & Assurance</h3>
                                  <hr />
                              </div>
                              <a href="service-details.html" class="readmore">Read More</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section class="tf-space flat-contact-request">
          <div class="container">
              <div class="row">
                  <div class="col-md-5">
                      <div class="section-title wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                          <div class="features-content-left">
                              <h2>Need Any Business<br />
                                  Consulting Facilities?</h2>
                          </div>
                          <div class="contact-request-form">
                              <form method="post" class="contact-request" accept-charset="utf-8">
                                  <div class="text-wrap clearfix">
                                      <fieldset class="name-wrap">
                                          <input type="text" id="name" class="tb-my-input" name="name"
                                              tabindex="1" placeholder="Name" value="" size="32"
                                              aria-required="true" required/>
                                      </fieldset>
                                      <fieldset class="email-wrap">
                                          <input type="text" id="phone" class="tb-my-input" name="phone"
                                              tabindex="2" placeholder="Phone Number" value="" size="32"
                                              aria-required="true" required/>
                                      </fieldset>
                                  </div>
                                  <button name="submit" type="submit" id="comment-reply"
                                      class="button readmore btn-submit-comment">Request A Call Back</button>
                              </form>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-7">
                      <div class="contact-request-content">
                          <div class="post">
                              <img src="assets/images/image-box/contact-request-post@2x.jpg" alt="images"/>
                              <a href="https://www.youtube.com/embed/xC4ze0p0b5Y"
                                  class="about-video video lightbox-image">
                                  <i class="ripple"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
    <Footer />
    </>
  )
}
