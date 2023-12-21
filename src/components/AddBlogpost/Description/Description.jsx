import React from "react";

function Description() {
  return (
    <>
      <label>აღწერა *</label>
      <textarea className="textarea" placeholder="შეიყვანეთ აღწერა" />
      <ul className="remove-bullet">
        <li>მინიმუმ 2 სიმბოლო</li>
      </ul>
    </>
  );
}

export default Description;
