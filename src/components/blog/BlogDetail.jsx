import React from "react";
import blogs from "../../data/blogs.json";
import company from "../../data/company.json";
import Header from "../plugins/Header";
import Title from "../plugins/Title";
import SideTabs from "./SideTabs";

export function renderBlog(tag, content, key) {
  switch (tag) {
    case "h2":
      return <h2 key={key} className="post-title">{content.text}</h2>;
    case "h3": 
      return <h3 key={key} className="post-title"> {content.text} </h3>;
    case "h4": 
    return <h4 key={key} className="post-title"> {content.text} </h4>
    case "p":
      return <p key={key}>{content.text}</p>;
    case "post-media":
      return content.quote || content.text ? (
        <div className="post-media" key={key}>
          <img src={content.img} alt={content.img} />
          <blockquote>
            <h4>{content.quote ? content.quote : " -------- "}</h4>
            <p>{content.text ? content.text : " -------- "}</p>
          </blockquote>
        </div>
      ) : (
        <div className="post-media" key={key}>
          <img src={content.img} alt={content.img} />
        </div>
      );
    case "post-title":
      return <h2 key={key} className="post-title">{content.text}</h2>;
    case "post-list-quotes":
      return (
        <ul key={key} className="post-list-quotes">
          {content.list.map((el, index) => {
            return (
              <li key={index}>
                <p>{el}</p>
              </li>
            );
          })}
        </ul>
      )
    case "post-media-box":
    return (
        <div key={key} className="post-media-box">
            {
            content.img.map((el, index) => {return (
                <div key={index} className="media">
                <img
                    src={el}
                    alt={el}
                />
                </div>
            )})
            }
        </div>)
    default:
    return (<div>Not Found</div>)
  }
}

export default function BlogDetail() {
  const id = window.location.href.split("?")[1];
  const post = blogs.filter((el) => el.info.id === id)[0];
  return (
    <>
      <Header menuItem={4} />
      <Title title={"Tin Tức Chứng Chỉ"} page={"Blog"} />
      <section className="flat-blog blog-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <article className="post-content">
                <h1 className="post-title">{post.info.title}</h1>
                <div className="post-author">
                  <a
                    href="/tin-tuc/"
                    className="btn-author section-14px-regular font-weight-500"
                  >
                    {post.info.category}
                  </a>
                  <div className="post-author-inner">
                    <img
                      src="assets/images/image-box/author-post.jpg"
                      alt="author"
                    />
                    <div className="author-content link-style-2">
                      <a href="/tin-tuc/">{post.info.author}</a>
                      <br />
                      <span>{post.info.date}</span>
                    </div>
                  </div>
                </div>
                {post.blog.map((el, index) => renderBlog(el.tag, el.content, index))}
                <div className="post-tags">
                  <div className="inner-left">
                    <span>Tag:</span>
                    <a href="/tin-tuc/">ISO9001</a>
                    <a href="/tin-tuc/">CNTT - Viễn Thông</a>
                    <a href="/tin-tuc/">Sản Xuất - Công Nghiệp</a>
                    <a href="/tin-tuc/">Ngân Hàng</a>
                  </div>
                  <div className="inner-right">
                    <ul className="widget-socials link-style-2">
                      <li>
                        <a href={company[0].lkdin} className="linked-in"></a>
                      </li>
                      <li>
                        <a href={company[0].fb} className="facebook"></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="post-pagination">
                  <div className="prev-link">
                    <a
                      href={`/blog?${
                        blogs[blogs.findIndex((el) => el === post) ? blogs.findIndex((el) => el === post) - 1 : 0]
                          .info.id
                      }`}
                      className="button readmore-prev btn-style2"
                    >
                      {"<<"}
                    </a>
                  </div>
                  <div className="next-link">
                    <a
                      href={`/blog?${
                        blogs[blogs.findIndex((el) => el === post) + 1]
                          .info.id
                      }`}
                      className="button readmore"
                    >
                      {">>"}
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-12">
              <SideTabs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
