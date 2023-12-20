import React, { useState } from "react";

import styles from "./Navbar.module.css";
import REDBERRY from "../../assets/REDBERRY.png";

import Modal from "../Modal";

import { useLogin } from "../../context/LoginContext";

function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  const { isLoggedIn } = useLogin();

  return (
    <div className={styles.container}>
      <img src={REDBERRY} alt="Redberry logo" />

      {!isLoggedIn && <button onClick={() => setOpenModal(true)}>შესვლა</button>}

      {isLoggedIn && <button>დაამატე ბლოგი</button>}

      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
}

export default Navbar;
