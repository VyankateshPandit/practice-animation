import React from "react";
import "./BlogSection.css";
import BlogSectionCard from "../../components/BlogSectionCard";
import BlogSectionStudentImg from "../../../assets/blog-section-student-img.svg";
function BlogSection() {
  const blogCardData = [
    {
      id: 1,
      img: BlogSectionStudentImg,
      author: "Jeremy Bear • 17 Jan 2025",
      cardHeading: "How To Stay Motivated During Your GMAT Preparation",
      cardBadegs: {
        badge1: "Strategy & Management",
        badge2: "Study Tips",
      },
    },
    {
      id: 2,
      img: BlogSectionStudentImg,
      author: "Jeremy Bear • 17 Jan 2025",
      cardHeading: "How To Stay Motivated During Your GMAT Preparation",
      cardBadegs: {
        badge1: "Strategy & Management",
        badge2: "Study Tips",
      },
    },
  ];
  return (
    <>
      <div className="blog-section-container">
        <div className="blog-text-section">
          <h1 className="blog-heading">
            Insights That Power Your Global Journey
          </h1>
          <p className="blog-desc">
            From exam prep to admissions, our blogs and guides simplify your
            path to international education.
          </p>
        </div>
        <div className="blog-card-section">
          {blogCardData.map((item, index) => (
            <BlogSectionCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogSection;
