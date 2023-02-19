import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Title({title, page}) {
  return (
    <section className="flat-title-page parallax parallax-9 contact-page-title">
        <div className="container-fluid">
            <div className="row">
                <div className="breadcrumbs">
                    <h2 className="section-title-page">{title}</h2>
                    <div className="breadcrumb-trail link-style-2">
                        <NavLink className="home" to={'/'}>Home</NavLink><span>{page}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
