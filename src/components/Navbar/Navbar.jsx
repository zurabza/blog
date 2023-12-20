import React, { useState } from "react";

import styles from "./Navbar.module.css";
import REDBERRY from "../../assets/REDBERRY.png";

import Modal from "../Modal";

function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.container}>
      <img src={REDBERRY} alt="Redberry logo" />

      <button onClick={() => setOpenModal(!openModal)}>შესვლა</button>

      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
}

export default Navbar;
