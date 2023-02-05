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
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div id="page" className="clearfix">
        <Helmet>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/wow.min.js"></script>
        <script src="assets/js/plugin.js"></script>
        <script src="assets/js/jquery-validate.js"></script>
        <script src="assets/js/countto.js"></script>
        <script src="assets/js/jquery.fancybox.js"></script>
        <script src="assets/js/shortcodes.js"></script>
        <script src="assets/js/main.js"></script>
        <script src="assets/js/swiper-bundle.min.js"></script>
        <script src="assets/js/swiper.js"></script>
        </Helmet>
        <Header />
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
