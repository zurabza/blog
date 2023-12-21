import React, { useState, useEffect } from "react";
import styles from "./Category.module.css";

import DownArrow from "../../../assets/arrow-down.png";
import DELETE from "../../../assets/close-white.png";

import { useApi } from "../../../context/ApiProviderContext";

function Category() {
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [addedCategories, setAddedCategories] = useState([]);

  const { initializeData } = useApi();

  useEffect(() => {
    initializeData("/categories", setCategories);
  }, []);

  useEffect(() => {
    // If dropdown is closed, remove :focus
    !dropdownOpen && document.getElementById("dropdownInput").blur();

    document.addEventListener("click", function (event) {
      var inputDiv = document.getElementById("inputDiv");

      // If clicked outside dropdown, close dropdown
      if (!inputDiv.contains(event.target)) {
        setDropdownOpen(false);
      }
    });
  }, [dropdownOpen]);

  const handleCategoryClick = (categoryToAdd) => {
    setAddedCategories([...addedCategories, categoryToAdd]);

    // Filter out category, which has been added to the new list, from the old list
    const updatedInitialCategories = categories.filter((category) => category !== categoryToAdd);
    setCategories(updatedInitialCategories);
  };

  const handleCategoryDelete = (categoryToDelete) => {
    // Filter out the category to delete from addedCategories
    const updatedCategories = addedCategories.filter((category) => category !== categoryToDelete);

    // Add the deleted category back to the categories state
    setCategories([...categories, categoryToDelete]);

    // Update addedCategories state
    setAddedCategories(updatedCategories);
  };

  return (
    <div className={styles.container}>
      <label>კატეგორია *</label>
      <div id="inputDiv" className={styles.dropdown}>
        <input
          onClick={() => setDropdownOpen(!dropdownOpen)}
          id="dropdownInput"
          readOnly
          className="input"
          placeholder={addedCategories.length > 0 ? "" : "აირჩიეთ კატეგორია"}
        />
        <img className={styles.DownArrow} src={DownArrow} alt="open/close" />

        {addedCategories.length > 0 && (
          <div className={styles.added}>
            {addedCategories.map((category) => (
              <button key={category.id} className="category-btn" style={{ color: category.text_color, backgroundColor: category.background_color }}>
                {category.title}
                <img onClick={() => handleCategoryDelete(category)} src={DELETE} alt="delete" />
              </button>
            ))}
          </div>
        )}
      </div>

      {dropdownOpen && (
        <div className={styles.dropdownCategories}>
          {categories.map((category) => (
            <button
              key={category.id}
              className="category-btn"
              onClick={() => handleCategoryClick(category)}
              style={{ color: category.text_color, backgroundColor: category.background_color }}
            >
              {category.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
