import React from "react";

import styles from "./FileUpload.module.css";
import uploadImg from "../../../assets/folder-add.png";

function FileUpload() {
  return (
    <>
      <label>ატვირთეთ ფოტო</label>
      <div className={styles.upload}>
        <img src={uploadImg} alt="upload" />
        <p>
          ჩააგდეთ ფაილი აქ ან <span>აირჩიეთ ფაილი</span>
        </p>
      </div>
    </>
  );
}

export default FileUpload;
