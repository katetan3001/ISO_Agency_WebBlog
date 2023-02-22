import React from 'react'

export default function BlogCard({thumbnail, tag, date, author, title}) {
  return (
    <article class="post-content-archive grow-up-hover">
        <div class="post-media">
            <img src={thumbnail} class="grow-up-hover" alt={"img-" + title}/>
            <div class="post-media-tags">
                <span>{tag}</span>
            </div>
        </div>
        <div class="post-content-wrap">
            <div class="post-meta link-style-3">
                <span class="date section-14px-regular-rubik"><a href="blog.html">{date}</a></span>
                <span class="author section-14px-regular-rubik"><a href="blog.html">{author}</a></span>
            </div>
            <div class="post-title section-22px-barlow link-style-2"><a
                    href="blog-details.html">{title}</a></div>
            <div class="post-readmore">
                <a href="blog-details.html" class="read-more"></a>
            </div>
        </div>
    </article>
  )
}
