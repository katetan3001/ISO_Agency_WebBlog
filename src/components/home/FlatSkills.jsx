import React from 'react'

export default function FlatSkills() {
  return (
    <section className="tf-space flat-skill">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="about-left-content wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="section-title">
                            <h3 className="section-heading">Our Expertise</h3>
                            <h2>Our Expertise & Skills<br/>
                                to All Business</h2>
                        </div>
                        <p>Improve efficiency, provide a better customer experience with modern technology
                            services available around the world. Our skilled staff, combined with decades of
                            experience.
                        </p>
                        <div className="progress-about wow fadeInUp" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="couter">
                                <div className="chart" data-percent="85">
                                    <span className="percent">0</span>
                                </div>
                                <h3 className="heading-progress">Business<br/>
                                    strategy growth</h3>
                            </div>
                        </div>
                        <div className="progress-about wow fadeInUp" data-wow-delay="300ms"
                            data-wow-duration="1500ms">
                            <div className="couter">
                                <div className="chart" data-percent="75">
                                    <span className="percent">0</span>
                                </div>
                                <h3 className="heading-progress">Finance<br/>
                                    valuable ideas</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
