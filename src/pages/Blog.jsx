import React from 'react'
import Footer from '../components/plugins/Footer'
import Title from '../components/plugins/Title'
import Header from '../components/plugins/Header'
import useScript from '../useScript';
import SideTabs from '../components/blog/SideTabs';
import BlogCard from '../components/blog/BlogCard';
import blogs from "../data/blogs.json"

export default function Blog() {
  useScript('assets/js/shortcodes.js');
  useScript('assets/js/swiper.js');
  return (
    <>
    <Header menuItem={4} />
    <Title title={"Tin Tức & Kiến Thức"} page={'Tin Tức'} />
    <section class="flat-blog">
      <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-12">
                <div class="post-wrap">
                    {blogs.grid.map((el, i) => <BlogCard key={i} thumbnail={el.info.thumbnail} tag={el.info.tag} date={el.info.date} author={el.info.author} title={el.info.title} />)}
                    <div class="themesflat-pagination clearfix">
                        <ul>
                            <li><a href="#" class="page-numbers current">01</a></li>
                            <li><a href="#" class="page-numbers">02</a></li>
                            <li><a href="#" class="page-numbers">03</a></li>
                            <li><a href="#" class="page-numbers">04</a></li>
                            <li><a href="#" class="page-numbers">05</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <SideTabs />
            </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}
