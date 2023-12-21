import React from "react";
import styles from "./Date.module.css";

function Date() {
  const handleDateChange = (e) => {
    const input = e.target.value;
  };

  return (
    <div>
      <label>გამოქვეყნების თარიღი *</label>
      <input className={`input ${styles.dateInput}`} type="date" onChange={(e) => handleDateChange(e)} max="9999-12-31" />
    </div>
  );
}

export default Date;
