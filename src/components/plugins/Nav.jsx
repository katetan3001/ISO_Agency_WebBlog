import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav({index}) {
  let className = [['menu-item'],['menu-item'],['menu-item', 'menu-item-has-children'],['menu-item'],['menu-item'],['menu-item'],]
  switch (index) {
    case 0: className[0].push('current-menu-item')
    break;
    case 1: className[1].push('current-menu-item')
    break;
    case 2: className[2].push('current-menu-item')
    break;
    case 3: className[3].push('current-menu-item')
    break;
    case 4: className[4].push('current-menu-item')
    break;
    case 5: className[5].push('current-menu-item')
    break;
    default: console.log(className);
    break
  };
  console.log(className);

  return (
    <div id="site-header-inner">
    <div className="wrap-inner clearfix">
        <div className="mobile-button">
            <span></span>
        </div>
        <nav id="main-nav" className="main-nav">
            <ul id="menu-primary-menu" className="menu">
                <li className={className[0].join(' ')}>
                <NavLink to='/home'>Home</NavLink>
                </li>
                <li className={className[1].join(' ')}>
                    <NavLink to='/ve-chung-toi'>Về Chúng Tôi</NavLink>
                </li>
                <li className={className[2].join(' ')}>
                    <NavLink to='/dich-vu'>Danh sách dịch vụ</NavLink>
                    <ul className="sub-menu">
                        <li className="menu-item"><NavLink to='/dich-vu'>Tư vấn trọn gói ISO 9001:2015</NavLink></li>
                        <li className="menu-item"><NavLink to='/dich-vu'>Tư vấn trọn gói ISO 22000:2018</NavLink></li>
                        <li className="menu-item"><NavLink to='/dich-vu'>Tư vấn trọn gói ISO 20000:2018</NavLink></li>
                        <li className="menu-item"><NavLink to='/dich-vu'>Tư vấn trọn gói ISO 22301:2019</NavLink></li>
                        <li className="menu-item"><NavLink to='/dich-vu'>Tư vấn trọn gói ISO 27001:2022</NavLink></li>
                        <li className="menu-item"><NavLink to='/dich-vu'>Tư vấn trọn gói ISO 27017:2015</NavLink></li>
                        <li className="menu-item"><NavLink to='/dich-vu'>Tư vấn trọn gói PCI DSS</NavLink></li>
                        <li className="menu-item"><NavLink to='/dich-vu'>Tư vấn trọn gói SWIFT</NavLink></li>
                        <li className="menu-item"><NavLink to='/dich-vu'>Tư vấn trọn gói SOC v1,2,3</NavLink></li>
                    </ul>
                </li>
                <li className={className[3].join(' ')}>
                    <NavLink to='/tai-lieu'>Tài liệu</NavLink>
                </li>
                <li className={className[4].join(' ')}>
                    <NavLink to='/tin-tuc'>Tin tức</NavLink>
                </li>
                <li className={className[5].join(' ')}>
                    <NavLink to='/kien-thuc'>Kiến thức về tiêu chuẩn</NavLink>
                </li>
            </ul>
        </nav>
    </div>
    <div id="site-header-right">
        <div className="header-search flat-show-search">
            <a href="#" className="header-search-trigger show-search"></a>
            <div className="widget widget-search top-search">
                <form action="#" method="get" role="search" className="search-form">
                    <input type="search" id="s" className="search-field"
                        placeholder="Tìm Từ Khoá" defaultValue="" name="s" title="Search for"
                        required="" />
                    <button className="search search-submit" type="submit" title="Search"></button>
                </form>
            </div>
        </div>
        <div className="header-menu">
            <a href="#" className="header-menu-trigger"></a>
            <div className="mobile-nav-toggler">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
        <div className="button-header">
            <a href="contact.html">Liên Hệ Ngay</a>
        </div>
    </div>
    </div>
  )
}
