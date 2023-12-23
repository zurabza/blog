import React, { useState, useRef, useEffect } from "react";
import styles from "./FileUpload.module.css";
import uploadImg from "../../../assets/folder-add.png";
import imgIcon from "../../../assets/gallery.png";
import closeIcon from "../../../assets/close.png";

import { useBlogpost } from "../../../context/BlogpostContext";

function FileUpload() {
  const { updateData } = useBlogpost();

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleSpanClick = () => {
    // Trigger the file input click when the span is clicked
    fileInputRef.current.click();
  };

  useEffect(() => {
    updateData({ image: selectedFile });
  }, [selectedFile]);

  const handleFileDelete = () => {
    setSelectedFile(null);
  };

  return (
    <div className={selectedFile ? styles.uploaded : styles.container} onDragOver={handleDragOver} onDrop={handleDrop}>
      <label>ატვირთეთ ფოტო</label>
      <div className={styles.upload}>
        {!selectedFile && (
          <>
            <img src={uploadImg} alt="upload" />
            <p>
              ჩააგდეთ ფაილი აქ ან <span onClick={handleSpanClick}>აირჩიეთ ფაილი</span>
            </p>
            <input type="file" onChange={handleFileChange} accept="image/*" style={{ display: "none" }} ref={fileInputRef} />
          </>
        )}

        {selectedFile && (
          <>
            <div className={styles.picAndName}>
              <img src={imgIcon} alt="img" />
              <p>{selectedFile.name}</p>
            </div>
            <img onClick={handleFileDelete} src={closeIcon} alt="delete" />
          </>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
