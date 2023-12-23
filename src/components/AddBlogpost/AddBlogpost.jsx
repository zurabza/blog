import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./AddBlogpost.module.css";
import GoBackArrow from "../../assets/goback-arrow.png";

import FileUpload from "./FileUpload/FileUpload";
import AuthorAndTitle from "./AuthorAndTitle/AuthorAndTitle";
import Description from "./Description";
import Date from "./Date";
import Category from "./Category";
import Email from "./Email";
import Modal from "../Modal";

import { useBlogpost } from "../../context/BlogpostContext";
import { useApi } from "../../context/ApiProviderContext";

function validateObject(obj, keyToExcludeFromValidation) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (
        key !== keyToExcludeFromValidation &&
        (value === null || value === undefined || value === "" || (Array.isArray(value) && value.length === 0))
      ) {
        return false;
      }

      if (key === keyToExcludeFromValidation && value !== undefined && typeof value !== "string") {
        return false;
      }
    }
  }
  return true;
}

function objectToFormData(obj) {
  var formData = new FormData();

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var value = obj[key];

      // If the value is an array, append each element with the same key
      if (Array.isArray(value)) {
        value.forEach(function (element, index) {
          formData.append(`${key}[${index}]`, element);
        });
      } else {
        // If the value is not an array, append it directly
        formData.append(key, value);
      }
    }
  }

  return formData;
}

function AddBlogpost() {
  const { data, resetData } = useBlogpost();
  const { postData } = useApi();

  const [validated, setValidated] = useState(false);

  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  useEffect(() => {
    if (validateObject(data, "email")) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [data]);

  const submitBlogpost = async () => {
    if (validated) {
      const formData = objectToFormData(data);
      const sendData = await postData("/blogs", formData);

      if (sendData) {
        setOpenSuccessModal(true);
        resetData();
      }
    }
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
            <button onClick={() => submitBlogpost()} className={`submit-btn ${validated && "active-btn"}`}>
              გამოქვეყნება
            </button>
          </div>
        </div>
      </div>

      {openSuccessModal && (
        <Modal
          setOpenModal={setOpenSuccessModal}
          initialSuccess={true}
          content={{ title: "ჩანაწი წარმატებით დაემატა", subtitle: "მთავარ გვერდზე დაბრუნება", subtitleHref: "/" }}
        />
      )}
    </div>
  );
}

export default AddBlogpost;
