import React from "react";
import useFetch from "use-http";

import Categories from "../components/Categories";
import Blogposts from "../components/Blogposts";

import styles from "./home.module.css";
import blogCover from "../assets/blog-cover.png";

function Home() {
  const API_TOKEN = import.meta.env.VITE_TOKEN;
  const request_url = import.meta.env.VITE_REQUEST_URL;

  const { get, response } = useFetch(request_url, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  // GET fetch function (path - api path; setData - useState setter function)
  async function initializeData(path, setData) {
    const initialData = await get(path);
    if (response.ok) setData(initialData.data);
  }

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <h1>ბლოგი</h1>

        <img src={blogCover} alt="cover-image" />
      </div>

      <div className={styles.content}>
        <Categories initializeData={initializeData} />

        <Blogposts initializeData={initializeData} />
      </div>
    </div>
  );
}

export default Home;
