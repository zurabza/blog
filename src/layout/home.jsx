import React from "react";

import Categories from "../components/Categories";
import Blogposts from "../components/Blogposts";

import styles from "./home.module.css";
import blogCover from "../assets/blog-cover.png";

function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <h1>ბლოგი</h1>

        <img src={blogCover} alt="cover-image" />
      </div>

      <div className={styles.content}>
        <Categories />

        <Blogposts />
      </div>
    </div>
  );
}

export default Home;
