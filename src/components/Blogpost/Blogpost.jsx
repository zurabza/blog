import React from "react";
import styles from "./Blogpost.module.css";

import Arrow from "../../assets/Arrow.png";
import { Link } from "react-router-dom";

function Blogpost({ blog }) {
  return (
    <div className={styles.blogpost}>
      <img src={blog.image} alt="blogpost-cover" />
      <h4 className={styles.author}>{blog.author}</h4>
      <h6 className={styles.date}>{blog.publish_date}</h6>

      <h2 className={styles.title}>{blog.title}</h2>

      <div className={styles.filters}>
        {blog.categories?.map((category) => {
          return (
            <button key={category.id} className="category-btn" style={{ color: category.text_color, backgroundColor: category.background_color }}>
              {category.title}
            </button>
          );
        })}
      </div>

      <h3 className={styles.description}>{blog.description}</h3>

      <Link to={`/${blog.id}`}>
        სრულად ნახვა <img src={Arrow} alt="arrow" />
      </Link>
    </div>
  );
}

export default Blogpost;
