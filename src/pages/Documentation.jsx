import React from 'react'
import Footer from '../components/plugins/Footer'
import Header from '../components/plugins/Header'
import useScript from '../useScript';
export default function Documentation() {
  useScript('assets/js/shortcodes.js');
  useScript('assets/js/swiper.js');
  return (
    <>
    <Header menuItem={3} />
    <Footer />
    </>
  )
}
