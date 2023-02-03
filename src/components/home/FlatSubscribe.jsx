import React from 'react'

export default function FlatSubscribe() {
  return (
    <section className="tf-space flat-subcribe">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="subcribe-content wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <h3>50% discount for your first consultancy</h3>
                        <h2>Join our newsletter and get...</h2>
                        <div className="widget-subcribe">
                            <form action="#" method="get" className="subcribe-form">
                                <input type="email" className="subcribe-form-footer"
                                    placeholder="Your email address" defaultValue="" name="s" required=""/>
                                <button className="btn-subcribe" type="submit" title="subcribe">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="subcribe-content-right">
                        <div className="subcribe-post">
                            <img src="assets/images/image-box/subcribe-post@2x.png" alt="images"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
