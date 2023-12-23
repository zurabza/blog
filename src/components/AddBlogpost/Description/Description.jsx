import React, { useEffect, useState } from "react";

// REGEX
const min2Symbol = /^.{2,}$/;

import { useBlogpost } from "../../../context/BlogpostContext";

function Description() {
  const { updateData } = useBlogpost();

  const [description, setDescription] = useState(""); // User input
  const [error, setError] = useState(false);

  useEffect(() => {
    // Minimum of 2 symbols
    if (description && !min2Symbol.test(description)) {
      setError(true);
    } else {
      setError(false);
    }

    if (description && min2Symbol.test(description)) {
      // Update data
      updateData({ description });
    } else {
      updateData({ description: "" });
    }
  }, [description]);

  const className = error ? "textarea input-error" : description && !error ? "textarea input-validated" : "textarea";

  return (
    <>
      <label>აღწერა *</label>
      <textarea className={className} placeholder="შეიყვანეთ აღწერა" value={description} onChange={(e) => setDescription(e.target.value)} />
      <ul className="remove-bullet">
        <li>მინიმუმ 2 სიმბოლო</li>
      </ul>
    </>
  );
}

export default Description;
