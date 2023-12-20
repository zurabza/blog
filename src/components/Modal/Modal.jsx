import React, { useState } from "react";

import styles from "./Modal.module.css";
import CLOSE from "../../assets/close.png";
import ACCEPTED from "../../assets/tick-circle.png";

function Modal({ success = true, setOpenModal }) {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.blackBack}>
      <div style={success ? { display: "flex" } : {}} className={styles.container}>
        {!success && (
          <>
            <h4>შესვლა</h4>

            <label>ელ-ფოსტა</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

            <button>შესვლა</button>
          </>
        )}

        {success && (
          <>
            <img className={styles.accepted} src={ACCEPTED} alt="accepted" />
            <h3>წარმატებული ავტორიზაცია</h3>

            <button>კარგი</button>
          </>
        )}

        <img className={styles.close} onClick={() => setOpenModal(false)} src={CLOSE} alt="close modal" />
      </div>
    </div>
  );
}

export default Modal;
