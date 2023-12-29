import React, { useState, useEffect } from "react";
import styles from "./Date.module.css";

import { useBlogpost } from "../../../context/BlogpostContext";

function Date() {
  const { data, updateData } = useBlogpost();

  const storedPublishDate = localStorage.getItem("blogpostPublishDate") || "";
  const [publishDate, setPublishDate] = useState(storedPublishDate);

  useEffect(() => {
    // Update data when component mounts
    if (storedPublishDate) {
      updateData({ publish_date: storedPublishDate });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDateChange = (e) => {
    const newPublishDate = e.target.value;
    setPublishDate(newPublishDate);
    updateData({ publish_date: newPublishDate });
    // Save to local storage
    localStorage.setItem("blogpostPublishDate", newPublishDate);
  };

  return (
    <div>
      <label>გამოქვეყნების თარიღი *</label>
      <input
        className={`input ${styles.dateInput} ${publishDate && "input-validated"}`}
        type="date"
        value={publishDate}
        onChange={(e) => handleDateChange(e)}
        max="9999-12-31"
      />
    </div>
  );
}

export default Date;