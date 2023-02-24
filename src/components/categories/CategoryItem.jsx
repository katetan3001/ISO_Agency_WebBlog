import React from 'react'

export default function CategoryItem({category, title, img, link, description}) {
    let className = "tf-col-4";
    const categoryItems = category ? category.map(el => (`tf-` + el)).join(' ') : 'tf-others';
    return (<div className={className + " " + categoryItems}>
    <div className="portfolio-box box-gallery">
        <div className="portfolio-media">
            <img src={img ? img : "assets/images/image-box/category-placeholder.jpg"} alt={img ? img.split("/")[img.split("/").length - 1] : "image_undefined"}/>
        </div>
        <div className="portfolio-layer-content">
            <div className="content">
                <a href={link ? ("/blog?" + link +"-0") : "/tin-tuc"}>{title.includes('Tư vấn trọn gói lấy ') ? title.replace('Tư vấn trọn gói lấy ', "") : title.replace('Tư vấn và đánh giá ', "")}</a>
                <p>{description}</p>
            </div>
        </div>
        <div className="portfolio-readmore">
            <a href={link ? ("/blog?" + link +"-0") : "/tin-tuc"} className="readmore"></a>
        </div>
    </div>
    </div>)
}
