import React, { useState, useEffect } from "react";

import styles from "./Blogposts.module.css";

import { useApi } from "../../context/ApiProviderContext";
import { useCategoryContext } from "../../context/categoriesFilterContext";
import Blogpost from "../Blogpost";

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
      {filteredBlogposts
        ?.filter((blog) => new Date(blog.publish_date) < new Date())
        .map((blog) => (
          <Blogpost key={blog.id} blog={blog} />
        ))}
    </div>
  );
}

export default Blogposts;
