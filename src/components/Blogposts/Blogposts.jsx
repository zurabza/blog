import React, { useState, useEffect } from "react";

import styles from "./Blogposts.module.css";
import Arrow from "../../assets/Arrow.png";

import { useApi } from "../../context/apiProviderContext";

function Blogposts() {
  const [blogposts, setBlogposts] = useState([]);

  const { initializeData } = useApi();

  useEffect(() => {
    initializeData("/blogs", setBlogposts);
  }, []);

  return (
    <div className={styles.blogposts}>
      {blogposts?.map((blog) => (
        <div key={blog.id} className={styles.blogpost}>
          <img src={blog.image} alt="blogpost-cover" />
          <h4 className={styles.author}>{blog.author}</h4>
          <h6 className={styles.date}>{blog.publish_date}</h6>

          <h2 className={styles.title}>{blog.title}</h2>

          <div className={styles.filters}>
            {blog.categories?.map((filter) => (
              <button key={filter.id} className="category-btn" style={{ color: filter.text_color, backgroundColor: filter.background_color }}>
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
  );
}

export default Blogposts;
