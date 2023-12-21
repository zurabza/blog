import React from "react";
import { Link } from "react-router-dom";

import styles from "./AddBlogpost.module.css";
import GoBackArrow from "../../assets/goback-arrow.png";

import FileUpload from "./FileUpload/FileUpload";
import AuthorAndTitle from "./AuthorAndTitle/AuthorAndTitle";
import Description from "./Description";
import Date from "./Date";
import Category from "./Category";
import Email from "./Email";

function AddBlogpost() {
  const submitBlogpost = () => {
    console.log("Initialized submition process");
  };

  return (
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.goBackArrow} src={GoBackArrow} alt="go back" />
      </Link>

      <div className={styles.inputsContainer}>
        <h1>ბლოგის დამატება</h1>

        <FileUpload />

        <div className={styles.inputWrapper}>
          <AuthorAndTitle />
        </div>

        <Description />

        <div className={`${styles.inputWrapper} marginbtm-075`}>
          <Date />
          <Category />
        </div>

        <div className={styles.inputWrapper}>
          <Email />

          <div>
            <button onClick={() => submitBlogpost()} className="submit-btn">
              გამოქვეყნება
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlogpost;
