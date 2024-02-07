import React, { useState, useEffect } from "react";
import "./blog.css";
import BlogCard from "../components/BlogCard";
import blogData from "../../public/data/blogData";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  // const fetchData = () => {
  //   fetch("http://localhost:5173/data/blogData.json")
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data));
  // };

  useEffect(() => {
    setBlogs(blogData);
  }, []);
  return (
    <section className="blogs" id="blogs">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Our Blogs</h4>
        </div>
        <div className="row mt-5">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
        </div>
      </div>
    </section>
  );
}

export default Blog;
