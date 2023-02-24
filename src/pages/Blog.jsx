import React from 'react'
import { useState, useEffect } from 'react'
import Footer from '../components/plugins/Footer'
import Title from '../components/plugins/Title'
import Header from '../components/plugins/Header'
import useScript from '../useScript';
import SideTabs from '../components/blog/SideTabs';
import BlogCard from '../components/blog/BlogCard';
import Paginate from '../components/blog/Paginate'
import blogs from "../data/blogs.json"

export default function Blog() {
  useScript('assets/js/shortcodes.js');
  useScript('assets/js/swiper.js');

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
 };

  return (
    <>
    <Header menuItem={4} />
    <Title title={"Tin Tức & Kiến Thức"} page={'Tin Tức'} />
    <section className="flat-blog">
      <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-12">
                <div className="post-wrap">
                    {currentPosts.map((el, i) => <BlogCard key={i} blogId={el.info.id} thumbnail={el.info.thumbnail} tag={el.info.tag} date={el.info.date} author={el.info.author} title={el.info.title} />)}
                    <Paginate
                        postsPerPage={postsPerPage}
                        totalPosts={blogs.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <SideTabs />
            </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}
