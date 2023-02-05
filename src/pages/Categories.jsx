import React from 'react'
import Footer from '../components/plugins/Footer'
import useScript from '../useScript';
export default function Categories() {
  useScript('assets/js/shortcodes.js');
  useScript('assets/js/swiper.js');
  return (
    <>
    <Footer />
    </>
  )
}
