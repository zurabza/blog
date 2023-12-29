import React, { useState, useEffect } from "react";

import styles from "./Blogposts.module.css";
import Arrow from "../../assets/Arrow.png";

import { useApi } from "../../context/ApiProviderContext";
import { Link } from "react-router-dom";
import { useCategoryContext } from "../../context/categoriesFilterContext";

function Blogposts() {
  const [blogposts, setBlogposts] = useState([]);
  const [filteredBlogposts, setFilteredBlogposts] = useState([]);

  const { initializeData } = useApi();

  const { categories: filteredCategories } = useCategoryContext();

  const fetchData = async () => {
    await initializeData("/blogs", setBlogposts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredBlogposts = blogposts.filter((obj) =>
      obj.categories.some((category) => filteredCategories.some((secondCategory) => secondCategory.id === category.id))
    );

    const finalBlogpostsArr = filteredCategories.length > 0 ? filteredBlogposts : blogposts;

    setFilteredBlogposts(finalBlogpostsArr);
  }, [blogposts, filteredCategories]);

  return (
    <div className={styles.blogposts}>
      {filteredBlogposts?.map((blog) => (
        <div key={blog.id} className={styles.blogpost}>
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
      ))}
    </div>
  );
}

export default Blogposts;
