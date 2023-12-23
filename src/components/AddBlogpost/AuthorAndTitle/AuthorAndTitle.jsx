import React, { useState, useEffect } from "react";

import { useBlogpost } from "../../../context/BlogpostContext";

// REGEX
const min4Symbol = /^.{4,}$/;
const min2Symbol = /^.{2,}$/;
const atLeast2Words = /^\S+(\s+\S+)+$/;
const georgianSymbols = /^[ქწერტყუიოპასდფგჰჯკლზხცვბნმჭღთშჟ₾ძჩN, ]+$/;

function AuthorAndTitle() {
  const { updateData } = useBlogpost();

  const [author, setAuthor] = useState(""); // User input

  const [symbolError, setSymbolError] = useState(false);
  const [wordsError, setWordsError] = useState(false);
  const [georgianSymbolsError, setGeorgianSymbolsError] = useState(false);

  const [title, setTitle] = useState(""); // User input
  const [titleError, setTitleError] = useState(false);

  useEffect(() => {
    // RESET
    setSymbolError(false);
    setWordsError(false);
    setGeorgianSymbolsError(false);

    // Minimum of 4 symbols
    if (author && !min4Symbol.test(author)) {
      setSymbolError(true);
    } else {
      setSymbolError(false);
    }

    // Minimum of 2 words
    if (author && !atLeast2Words.test(author)) {
      setWordsError(true);
    } else {
      setWordsError(false);
    }

    // Georgian symbols
    if (author && !georgianSymbols.test(author)) {
      setGeorgianSymbolsError(true);
    } else {
      setGeorgianSymbolsError(false);
    }

    // Update data if all the tests are passed
    if (author && min4Symbol.test(author) && georgianSymbols.test(author) && atLeast2Words.test(author)) {
      updateData({ author });
    } else {
      updateData({ author: "" });
    }
  }, [author]);

  useEffect(() => {
    // Minimum of 2 symbols
    if (title && !min2Symbol.test(title)) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    // Update data if all the tests are passed
    if (title && min2Symbol.test(title)) {
      updateData({ title });
    } else {
      updateData({ title: "" });
    }
  }, [title]);

  const authorInputError = symbolError || wordsError || georgianSymbolsError;
  const authorInputSuccess = author && !authorInputError;
  const authorSuccessColor = author ? "#14d81c" : "";
  const authorClassName = authorInputError ? "input input-error" : authorInputSuccess ? "input input-validated" : "input";

  const titleClassName = titleError ? "input input-error" : title && !titleError ? "input input-validated" : "input";

  const titleSuccessColor = title ? "#14d81c" : "";
  const errorColor = "#eb1819";

  return (
    <>
      <div>
        <label>ავტორი *</label>
        <input className={authorClassName} placeholder="შეიყვანეთ ავტორი" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <ul>
          <li style={symbolError ? { color: errorColor } : { color: authorSuccessColor }}>მინიმუმ 4 სიმბოლო</li>
          <li style={wordsError ? { color: errorColor } : { color: authorSuccessColor }}>მინიმუმ ორი სიტყვა</li>
          <li style={georgianSymbolsError ? { color: errorColor } : { color: authorSuccessColor }}>მხოლოდ ქართული სიმბოლოები</li>
        </ul>
      </div>

      <div>
        <label>სათაური *</label>
        <input className={titleClassName} placeholder="შეიყვანეთ სათაური" value={title} onChange={(e) => setTitle(e.target.value)} />
        <ul className="remove-bullet">
          <li style={titleError ? { color: errorColor } : { color: titleSuccessColor }}>მინიმუმ 2 სიმბოლო</li>
        </ul>
      </div>
    </>
  );
}

export default AuthorAndTitle;
