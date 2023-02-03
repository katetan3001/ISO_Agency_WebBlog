import React from 'react'

export default function FlatProgress() {
  return (
    <section className="tf-space flat-progress">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="progress-content-left wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="section-title">
                            <h3 className="section-heading">Annual Progress</h3>
                            <div className="features-content-left">
                                <h2>Our Business Growth is<br/>
                                    Really Incredible!</h2>
                            </div>
                            <p>Improve efficiency, provide a better customer experience with modern technology
                                services available around the world. Our skilled staff, combined with decades of
                                experience.</p>
                        </div>
                        <div className="content-progress-box">
                            <div className="progress-inner">
                                <div className="donat-bg" data-percent="70%">
                                    <div className="custom-donat"></div>
                                </div>
                                <div className="donat-headline">
                                    <h4>Business growth (2018)</h4>
                                    <span>70%</span>
                                </div>
                            </div>
                            <div className="progress-inner">
                                <div className="donat-bg" data-percent="85%">
                                    <div className="custom-donat"></div>
                                </div>
                                <div className="donat-headline">
                                    <h4>Investment growth (2020)</h4>
                                    <span>85%</span>
                                </div>
                            </div>
                            <div className="progress-inner">
                                <div className="donat-bg" data-percent="95%">
                                    <div className="custom-donat"></div>
                                </div>
                                <div className="donat-headline">
                                    <h4>Finnancial growth (2021)</h4>
                                    <span>95%</span>
                                </div>
                            </div>
                            <div className="progress-button wow fadeInUp" data-wow-delay="300ms"
                                data-wow-duration="1500ms">
                                <a href="service-details.html" className="button readmore">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="progress-content-right wow fadeInRight" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="progress-post">
                            <img src="assets/images/image-box/progress-post.png" alt="images"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
