import React, { useEffect, useState } from "react";
import styles from "./RelatedBlogposts.module.css";

import { useApi } from "../../context/ApiProviderContext";

import Blogpost from "../Blogpost";

import arrowPrev from "../../assets/arrow-prev.png";
import arrowNext from "../../assets/arrow-next.png";
import arrowNextActive from "../../assets/arrow-next-active.png";
import arrowPrevActive from "../../assets/arrow-prev-active.png";

function RelatedBlogposts({ blogpost }) {
  const [blogposts, setBlogposts] = useState([]);
  const [similarBlogposts, setSimilarBlogposts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3); // Number of blog posts to display per page

  const { initializeData } = useApi();

  const fetchData = async () => {
    await initializeData("/blogs", setBlogposts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    function findSimilarObjects(initialObject, array) {
      const initialCategories = initialObject.categories.map((category) => category.id);

      const similarObjects = array.filter((obj) => {
        if (obj.id !== initialObject.id) {
          const objCategories = obj.categories.map((category) => category.id);
          return arrayContainsArray(objCategories, initialCategories);
        }
        return false;
      });

      return similarObjects;
    }

    function arrayContainsArray(superset, subset) {
      return subset.every((value) => superset.includes(value));
    }

    const result = findSimilarObjects(blogpost, blogposts);
    setSimilarBlogposts(result);
  }, [blogposts, blogpost]);

  const paginate = (pageNumber) => {
    const maxPage = Math.ceil(similarBlogposts.length / postsPerPage);

    if (pageNumber > 0 && pageNumber <= maxPage) {
      setCurrentPage(pageNumber);
    }
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = similarBlogposts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>მსგავსი სტატიები</h1>

        <div className={styles.arrows}>
          <img
            className={styles.paginationIMG}
            src={currentPage > 1 ? arrowPrevActive : arrowPrev}
            alt="prev"
            onClick={() => paginate(currentPage - 1)}
          />
          <img
            className={`${styles.paginationIMG}`}
            src={currentPage < Math.ceil(similarBlogposts.length / postsPerPage) ? arrowNextActive : arrowNext}
            alt="next"
            onClick={() => paginate(currentPage + 1)}
          />
        </div>
      </div>

      <div className={styles.similarsContainer}>
        {currentPosts.map((blogpost) => (
          <Blogpost key={blogpost.id} blog={blogpost} />
        ))}
      </div>
    </div>
  );
}

export default RelatedBlogposts;
