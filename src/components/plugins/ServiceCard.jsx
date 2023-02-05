import React from 'react'
import { NavLink } from 'react-router-dom';
export default function ServiceCard({active, cert, imgPath}) {
  let className;
  active === true ? className = 'service-box active' : className = 'service-box';
  return (
    <div className="col-md-4">
    <div className={className}>
        <div className="services-post">
            <img src={imgPath} alt={imgPath.split('/')[4]} />
        </div>
        <div className="service-content">
            <div className="inner">
                <h4>Tư Vấn Trọn Gói</h4>
                <h3>{cert}</h3>
                <hr />
            </div>
            <NavLink to={"/"} className="readmore">Tìm Hiểu Thêm</NavLink>
        </div>
    </div>
    </div>
  )
}
