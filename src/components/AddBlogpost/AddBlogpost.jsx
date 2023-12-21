import React from "react";

import styles from "./AddBlogpost.module.css";
import uploadImg from "../../assets/folder-add.png";
import GoBackArrow from "../../assets/goback-arrow.png";

function AddBlogpost() {
  return (
    <div className={styles.container}>
      <img className={styles.goBackArrow} src={GoBackArrow} alt="go back" />

      <div className={styles.inputsContainer}>
        <h1>ბლოგის დამატება</h1>

        <label>ატვირთეთ ფოტო</label>
        <div className={styles.upload}>
          <img src={uploadImg} alt="upload" />
          <p>
            ჩააგდეთ ფაილი აქ ან <span>აირჩიეთ ფაილი</span>
          </p>
        </div>

        <div className={styles.inputWrapper}>
          <div>
            <label>ავტორი *</label>
            <input className={styles.input} placeholder="შეიყვანეთ ავტორი" />
            <ul>
              <li>მინიმუმ 4 სიმბოლო</li>
              <li>მინიმუმ ორი სიტყვა</li>
              <li>მხოლოდ ქართული სიმბოლოები</li>
            </ul>
          </div>
          <div>
            <label>სათაური *</label>
            <input className={styles.input} placeholder="შეიყვანეთ სათაური" />
            <ul className={styles.removeBullet}>
              <li>მინიმუმ 2 სიმბოლო</li>
            </ul>
          </div>
        </div>

        <label>აღწერა *</label>
        <textarea className={styles.textarea} placeholder="შეიყვანეთ აღწერა" />
        <ul className={styles.removeBullet}>
          <li>მინიმუმ 2 სიმბოლო</li>
        </ul>

        <div className={`${styles.inputWrapper} marginbtm-075`}>
          <div>
            <label>გამოქვეყნების თარიღი *</label>
            <input className={styles.input} />
          </div>
          <div>
            <label>კატეგორია *</label>
            <input className={styles.input} placeholder="აირჩიეთ კატეგორია" />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <div>
            <label>ელ-ფოსტა</label>
            <input className={styles.input} placeholder="Example@redberry.ge" />
          </div>
          <div>
            <button>გამოქვეყნება</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlogpost;
