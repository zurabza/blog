import React, { useState, useEffect } from "react";

import styles from "./Email.module.css";
import ERROR from "../../../assets/error-circle.png";

// REGEX
const redberryRegex = /^\s*[^@\s]+@redberry\.ge\s*$/;

import { useBlogpost } from "../../../context/BlogpostContext";

function Email() {
  const { updateData } = useBlogpost();

  const [email, setEmail] = useState(""); // User input
  const [error, setError] = useState(false);

  useEffect(() => {
    if (email && redberryRegex.test(email)) {
      // Update data
      updateData({ email });
    } else {
      updateData({ email: "" });
    }

    // Should end with @redberry.ge
    if (email && !redberryRegex.test(email)) {
      setError(true);
      updateData({ email: false });
    } else {
      setError(false);
    }
  }, [email]);

  const className = error ? "input input-error" : email && !error ? "input input-validated" : "input";

  return (
    <div>
      <label>ელ-ფოსტა</label>
      <input className={className} placeholder="Example@redberry.ge" value={email} onChange={(e) => setEmail(e.target.value)} />
      {error && (
        <p className={styles.error}>
          <img src={ERROR} alt="error" />
          მეილი უნდა მთავრდებოდეს @redberry.ge-ით
        </p>
      )}
    </div>
  );
}

export default Email;
