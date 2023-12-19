import React, { useState, useEffect } from "react";
import useFetch from "use-http";

import blogCover from "../assets/blog-cover.png";
import Arrow from "../assets/Arrow.png";

import styles from "./home.module.css";

function Home() {
  const API_TOKEN = import.meta.env.VITE_TOKEN;
  const request_url = `https://api.blog.redberryinternship.ge/api`;

  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const { get, response } = useFetch(request_url, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  useEffect(() => {
    initializeCategories();
  }, []);

  async function initializeCategories() {
    const initialCategories = await get("/categories");
    if (response.ok) setCategories(initialCategories.data);
  }

  useEffect(() => {
    initializeBlogs();
  }, []);

  async function initializeBlogs() {
    const initialBlogs = await get(`/blogs`);
    console.log("blogs", initialBlogs);
    if (response.ok) setBlogs(initialBlogs.data);
  }

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <h1>ბლოგი</h1>

        <img src={blogCover} alt="cover-image" />
      </div>

      <div className={styles.content}>
        <div className={styles.filters}>
          {categories?.map((category) => (
            <button key={category.id} className={styles.filter} style={{ color: category.text_color, backgroundColor: category.background_color }}>
              {category.title}
            </button>
          ))}
        </div>

        <div className={styles.blogposts}>
          {blogs?.map((blog) => (
            <div key={blog.id} className={styles.blogpost}>
              <img src={blog.image} alt="blogpost-cover" />
              <h4 className={styles.author}>{blog.author}</h4>
              <h6 className={styles.date}>{blog.publish_date}</h6>

              <h2 className={styles.title}>{blog.title}</h2>

              <div className={styles.filters}>
                {blog.categories?.map((filter) => (
                  <button key={filter.id} className={styles.filter} style={{ color: filter.text_color, backgroundColor: filter.background_color }}>
                    {filter.name}
                  </button>
                ))}
              </div>

              <h3 className={styles.description}>{blog.description}</h3>

              <a>
                სრულად ნახვა <img src={Arrow} alt="arrow" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
