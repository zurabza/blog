import React from "react";
import styles from "./Date.module.css";

import { useBlogpost } from "../../../context/BlogpostContext";

function Date() {
  const { data, updateData } = useBlogpost();

  const handleDateChange = (e) => {
    const publish_date = e.target.value;
    updateData({ publish_date });
  };

  return (
    <div>
      <label>გამოქვეყნების თარიღი *</label>
      <input
        className={`input ${styles.dateInput} ${data.publish_date && "input-validated"}`}
        type="date"
        onChange={(e) => handleDateChange(e)}
        max="9999-12-31"
      />
    </div>
  );
}

export default Date;
