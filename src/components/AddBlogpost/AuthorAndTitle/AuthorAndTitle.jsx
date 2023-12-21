import React from "react";

function AuthorAndTitle() {
  return (
    <>
      <div>
        <label>ავტორი *</label>
        <input className="input" placeholder="შეიყვანეთ ავტორი" />
        <ul>
          <li>მინიმუმ 4 სიმბოლო</li>
          <li>მინიმუმ ორი სიტყვა</li>
          <li>მხოლოდ ქართული სიმბოლოები</li>
        </ul>
      </div>
      <div>
        <label>სათაური *</label>
        <input className="input" placeholder="შეიყვანეთ სათაური" />
        <ul className="remove-bullet">
          <li>მინიმუმ 2 სიმბოლო</li>
        </ul>
      </div>
    </>
  );
}

export default AuthorAndTitle;
