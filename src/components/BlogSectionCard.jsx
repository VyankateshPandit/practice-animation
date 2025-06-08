import React from "react";
import "./BlogSectionCard.css";
import BlogSectionArrowUpRight from "../../assets/blog-section-arrow-up-right.svg";
function BlogSectionCard({ data }) {
  return (
    <>
      <div className="blog-card-container">
        <img src={data.img} alt="" className="blog-card-img" />
        <div className="blog-card-content">
          <h1 className="blog-author">{data.author}</h1>
          <div className="blog-headingAndArrow-section">
            <div className="blog-card-heading">{data.cardHeading}</div>
            <img
              src={BlogSectionArrowUpRight}
              alt=""
              className="blog-arrow"
            ></img>
          </div>
        </div>
        <div className="blog-card-badges">
          <h4 className="blog-card-badge-1">{data.cardBadegs.badge1}</h4>
          <h4 className="blog-card-badge-2">{data.cardBadegs.badge2}</h4>
        </div>
      </div>
    </>
  );
}

export default BlogSectionCard;
