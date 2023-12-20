import React from "react";

import styles from "./Navbar.module.css";
import REDBERRY from "../../assets/REDBERRY.png";

function Navbar() {
  return (
    <div className={styles.container}>
      <img src={REDBERRY} alt="Redberry logo" />

      <button>შესვლა</button>
    </div>
  );
}

export default Navbar;
