import React from 'react'

export default function BlogCard({thumbnail, tag, date, author, title, blogId}) {
  return (
    <article className="post-content-archive grow-up-hover">
        <div className="post-media">
            <img src={thumbnail} className="grow-up-hover" alt={"img-" + title}/>
            <div className="post-media-tags">
                <span>{tag}</span>
            </div>
        </div>
        <div className="post-content-wrap">
            <div className="post-meta link-style-3">
                <span className="date section-14px-regular-rubik"><a href={`/blog?${blogId}`}>{date}</a></span>
                <span className="author section-14px-regular-rubik"><a href={`/blog?${blogId}`}>{author}</a></span>
            </div>
            <div className="post-title section-22px-barlow link-style-2"><a
                    href={`/blog?${blogId}`}>{title}</a></div>
            <div className="post-readmore">
                <a href={`/blog?${blogId}`} className="read-more"></a>
            </div>
        </div>
    </article>
  )
}
