import React from 'react'
import FlatAbout from '../components/home/FlatAbout'
import FlatFeatures from '../components/home/FlatFeatures'
import FlatSlider from '../components/home/FlatSlider'
import FlatWCU from '../components/home/FlatWCU'
import FlatWork from '../components/home/FlatWork'
import FlatLogoSlogan from '../components/home/FlatLogoSlogan'
import FlatLatest from '../components/home/FlatLatest'
import Header from '../components/plugins/Header'
import Footer from '../components/plugins/Footer'
import FlatTestimonial from '../components/home/FlatTestimonial'
import useScript from '../useScript'

export default function Home() {
  useScript('assets/js/swiper.js');
  useScript('assets/js/plugin.js');
  useScript('assets/js/shortcodes.js');
  useScript('assets/js/countto.js');
  return (
    <div id="page" className="clearfix">
        <Header menuItem={0}/>
        <FlatSlider />
        <FlatFeatures />
        <FlatAbout />
        <FlatWork />
        <FlatWCU />
        <FlatTestimonial />
        <FlatLogoSlogan />
        <FlatLatest />
        <Footer />
    </div>
  )
}
