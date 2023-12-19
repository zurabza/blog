import React, { useState } from "react";
import useFetch from "use-http";

import defaultBlogpostImg from "../assets/default-for-blogpost.jpg";

import blogCover from "../assets/blog-cover.png";
import Arrow from "../assets/Arrow.png";

import styles from "./home.module.css";

function Home() {
  const [categories, setCategories] = useState([])

  const { loading, error, data = [] } = useFetch("https://example.com/todos", options, []);

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <h1>ბლოგი</h1>

        <img src={blogCover} alt="cover-image" />
      </div>

      <div className={styles.content}>
        <div className={styles.filters}>
          <button className={styles.filter}>მარკეტი</button>
          <button className={styles.filter}>მარკეტი</button>
          <button className={styles.filter}>მარკეტი</button>
          <button className={styles.filter}>მარკეტი</button>
          <button className={styles.filter}>მარკეტი</button>
          <button className={styles.filter}>აპლიკაცია</button>
          <button className={styles.filter}>ხეოლვნური ინტელექტი</button>
          <button className={styles.filter}>UI/UX</button>
        </div>

        <div className={styles.blogposts}>
          <div className={styles.blogpost}>
            <img src={defaultBlogpostImg} alt="blogpost-cover" />
            <h4 className={styles.name}>ლილე კვარაცხელია</h4>
            <h6 className={styles.date}>02.11.2023</h6>

            <h2 className={styles.title}>EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h2>

            <div className={styles.filters}>
              <button className={styles.filter}>UI/UX</button>
              <button className={styles.filter}>კვლევა</button>
              <button className={styles.filter}>Figma</button>
            </div>

            <h3 className={styles.description}>6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...</h3>

            <a>
              სრულად ნახვა <img src={Arrow} alt="arrow" />
            </a>
          </div>

          <div className={styles.blogpost}>
            <img src={defaultBlogpostImg} alt="blogpost-cover" />
            <h4 className={styles.name}>ლილე კვარაცხელია</h4>
            <h6 className={styles.date}>02.11.2023</h6>

            <h2 className={styles.title}>EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h2>

            <div className={styles.filters}>
              <button className={styles.filter}>UI/UX</button>
              <button className={styles.filter}>კვლევა</button>
              <button className={styles.filter}>Figma</button>
            </div>

            <h3 className={styles.description}>6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...</h3>

            <a>
              სრულად ნახვა <img src={Arrow} alt="arrow" />
            </a>
          </div>

          <div className={styles.blogpost}>
            <img src={defaultBlogpostImg} alt="blogpost-cover" />
            <h4 className={styles.name}>ლილე კვარაცხელია</h4>
            <h6 className={styles.date}>02.11.2023</h6>

            <h2 className={styles.title}>EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h2>

            <div className={styles.filters}>
              <button className={styles.filter}>UI/UX</button>
              <button className={styles.filter}>კვლევა</button>
              <button className={styles.filter}>Figma</button>
            </div>

            <h3 className={styles.description}>6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...</h3>

            <a>
              სრულად ნახვა <img src={Arrow} alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
