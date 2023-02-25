import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from "../plugins/Nav"
import SideNav from "../plugins//SideNav"
import company from "../../data/company.json"

export default function Header({menuItem}) {
    return (
    <div id="site-header-wrap">
                <header id="site-header">
                    <div id="site-logo" className="clearfix">
                        <div id="site-logo-inner">
                            <NavLink to="/home" className="main-logo">
                                <img src="assets/images/logo/logo-light.png" alt="consalti" width="183" height="48"
                                    data-retina="assets/images/logo/logo-light@3x.png" data-width="183"
                                    data-height="48" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="header-box">
                        <div id="top-bar">
                            <div id="top-bar-inner">
                                <div className="top-bar-content">
                                    <div className="top-bar-left">
                                        <span className="map section-14px-regular">{company[0].adress}</span>
                                        <span className="mail section-14px-regular"><a
                                                href="mailto:contact@mastercert.vn">{company[0].email[0]}</a></span>
                                    </div>
                                    <div className="top-bar-right">
                                        <span className="phone section-14px-regular"><a href="tel:0903190491">{company[0].tel[1]}</a></span>
                                        <div className="socials-header">
                                            <ul className="widget-socials link-style-3">
                                                <li><a href={company[0].fb} className="facebook"></a></li>
                                                <li><a href={company[0].lkdin} className="linked-in"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Nav index={menuItem} />
                    </div>
                </header>
                <SideNav />
    </div>
    )
}
