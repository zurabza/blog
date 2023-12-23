import React, { useState } from "react";
import Modal from "../Modal";

import styles from "./Navbar.module.css";
import REDBERRY from "../../assets/REDBERRY.png";

import { useLogin } from "../../context/LoginContext";

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  const { isLoggedIn } = useLogin();

  const location = useLocation();
  const atHomeRoute = location.pathname == "/";

  return (
    <div style={atHomeRoute ? {} : { justifyContent: "center" }} className={styles.container}>
      <Link to="/">
        <img src={REDBERRY} alt="Redberry logo" />
      </Link>

      {atHomeRoute && !isLoggedIn && <button onClick={() => setOpenModal(true)}>შესვლა</button>}

      {atHomeRoute && isLoggedIn && (
        <Link to="/add">
          <button>დაამატე ბლოგი</button>
        </Link>
      )}

      {openModal && <Modal setOpenModal={setOpenModal} initialSuccess={false} content={{ title: "წარმატებული ავტორიზაცია", subtitle: "კარგი" }} />}
    </div>
  );
}

export default Navbar;
