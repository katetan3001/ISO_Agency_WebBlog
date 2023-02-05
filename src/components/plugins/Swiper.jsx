import { UNSAFE_convertRoutesToDataRoutes } from '@remix-run/router';
import React from 'react'

function Swiper({active, type, title, description, imgPath, clickPath, img}) {
  let className;
  if (type === 'features')  
  {
    active === true ? className = ['features-box active wow fadeInUp', "box-content active"] : className = ['features-box', "box-content"] ;
    return (
        <div className="swiper-slide">
        <div className={className[0]} data-wow-delay="300ms"
            data-wow-duration="1000ms">
            <div className="item-shape item-shape1"></div>
            <div className="item-shape item-shape2"></div>
            <div className="features-box-inner">
                <div className="icon-features">
                    <span className={imgPath}></span>
                </div>
                <h3 className="headline">{title}</h3>
                <p>{description}</p>                
            </div>
            <div className={className[1]}>
                <div className="content-post">
                    <img src={img}
                        alt={img.split('/')[4]}/>
                    <div className="post-readmore">
                        <a href="service-details.html" className="read-more"><span className="text">Xem Thêm</span></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
  }
  else if (type === 'services')
  {
    active === true ? className = 'work-box active wow' : className = 'work-box';
    return (<div className="swiper-slide">
            <div className={className} data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="work-icon">
                    <div className="master-icon-box">
                        <div className="icon-wrap">
                            <img src={imgPath} style={{width: '100px'}} alt={imgPath.split('/')[4]}/>
                        </div>
                        <div className="text-wrap">
                            <h3 className="headline">{title}</h3>
                            <a href={clickPath} className="url-wrap readmore">Xem Thêm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  else if (type === 'testimonials')
  {
    active = false;
    className = '';
    return (
        <div className="swiper-slide">
        <div className="testimonial-slide-box">
            <div className="testimonal-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <p><b>{imgPath }</b></p>
            </div>
            <div className="testimonal-icon">
                <span className="icon-tes"></span>
            </div>
        </div>
        </div>
    )
  }
}

export default Swiper