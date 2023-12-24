import React, { useEffect, useState } from "react";

import styles from "./Modal.module.css";
import CLOSE from "../../assets/close.png";
import ACCEPTED from "../../assets/tick-circle.png";
import ERROR from "../../assets/error-circle.png";

import { useApi } from "../../context/ApiProviderContext";
import { useLogin } from "../../context/LoginContext";
import { Link } from "react-router-dom";

function Modal({ setOpenModal, initialSuccess, content }) {
  const [email, setEmail] = useState(""); // User Input
  const [error, setError] = useState(""); // Regex validation error
  const [validated, setValidated] = useState(false); // Regex validation accepted
  const [success, setSuccess] = useState(initialSuccess); // Login success

  const { login } = useLogin(); // sign in function
  const { postData } = useApi();

  const redberryRegex = /^\s*[^@\s]+@redberry\.ge\s*$/;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (redberryRegex.test(email)) {
      const loginSuccess = await postData("/login", { email });

      if (loginSuccess) {
        setSuccess(true);
        login();
      }

      if (!loginSuccess) {
        setError("ელ-ფოსტა არ მოიძებნა");
      }
    }

    if (!redberryRegex.test(email)) {
      setError("მეილი უნდა მთავრდებოდეს @redberry.ge-თ");
    }
  };

  useEffect(() => {
    redberryRegex.test(email) ? setValidated(true) : setValidated(false);

    setError("");
  }, [email]);

  return (
    <div className={styles.blackBack}>
      <div className={styles.container}>
        {!success && (
          <form onSubmit={(e) => handleLogin(e)}>
            <h4>შესვლა</h4>

            <label>ელ-ფოსტა</label>
            <input
              placeholder="Example@redberry.ge"
              className={error ? "input input-error" : validated ? "input input-validated" : "input"}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && (
              <p className={styles.error}>
                <img src={ERROR} alt="error" />
                {error}
              </p>
            )}

            <button type="submit">შესვლა</button>
          </form>
        )}

        {success && (
          <form onSubmit={() => setOpenModal(false)} className={styles.successForm}>
            <img className={styles.accepted} src={ACCEPTED} alt="accepted" />
            <h3>{content.title}</h3>

            {content.subtitleHref ? (
              <Link to={content.subtitleHref}>
                <button className={styles.btn} type="submit">
                  {content.subtitle}
                </button>
              </Link>
            ) : (
              <button type="submit">{content.subtitle}</button>
            )}
          </form>
        )}

        <img className={styles.close} onClick={() => setOpenModal(false)} src={CLOSE} alt="close modal" />
      </div>
    </div>
  );
}

export default Modal;
