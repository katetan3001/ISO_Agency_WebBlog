import React from 'react'
import useScript from '../useScript';
import Header from '../components/plugins/Header'
import Title from '../components/plugins/Title'
import services from '../data/services.json'
import Footer from '../components/plugins/Footer'
import CategoryItem from '../components/categories/CategoryItem'
export default function Categories() {
  useScript('assets/js/jquery.easing.js');
  useScript('assets/js/jquery.isotope.min.js');
  return (
    <>
        <Header menuItem={2} />
        <Title title={'Danh Mục Dịch Vụ'} page={'Danh Mục'} />
        <section className="tf-space flat-portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="portfolio-menu">
                            <ul className="flat-filter-isotope link-style-7">
                                <li className='active'><a href="/danh-muc" data-filter="*">Tất Cả Dịch Vụ</a></li>
                                <li><a href="/danh-muc" data-filter=".tf-telecom">CNTT - Viễn Thông</a></li>
                                <li><a href="/danh-muc" data-filter=".tf-payment">Ngân Hàng - Thanh Toán</a></li>
                                <li><a href="/danh-muc" data-filter=".tf-manufacture">Sản Xuất - Công Nghiệp</a></li>
                                <li><a href="/danh-muc" data-filter=".tf-others">Ngành Nghề Khác</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="fl-gallery isotope-gl">
                      {services[0].detailed.map((el, i) => {
                        return <CategoryItem key={i} category={el.category} title={el.title} img={el.post.thumbnail} link={el.post.link} description={el.description} />
                      })}
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}
