import React, { useState, useEffect } from "react";
import styles from "./Category.module.css";

import DownArrow from "../../../assets/arrow-down.png";
import DELETE from "../../../assets/close-white.png";

import { useApi } from "../../../context/ApiProviderContext";
import { useBlogpost } from "../../../context/BlogpostContext";

function Category() {
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [addedCategories, setAddedCategories] = useState([]);

  const { initializeData } = useApi();
  const { updateData } = useBlogpost();

  useEffect(() => {
    initializeData("/categories", setCategories);
  }, []);

  useEffect(() => {
    // If dropdown is closed, remove :focus
    !dropdownOpen && document.getElementById("dropdownInput").blur();

    document.addEventListener("click", function (event) {
      const inputDiv = document.getElementById("inputDiv");

      // If clicked outside dropdown, close dropdown 
      if (inputDiv && !inputDiv.contains(event.target)) {
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

  useEffect(() => {
    const categoriesIds = addedCategories.map((category) => category.id);
    updateData({ categories: categoriesIds });
  }, [addedCategories]);

  const inputClassname = addedCategories.length > 0 ? "bluefocus input input-validated" : "input";

  return (
    <div className={styles.container}>
      <label>კატეგორია *</label>
      <div id="inputDiv" className={styles.dropdown}>
        <input
          readOnly
          onClick={() => setDropdownOpen(!dropdownOpen)}
          id="dropdownInput"
          className={inputClassname}
          placeholder={addedCategories.length > 0 ? "" : "აირჩიეთ კატეგორია"}
        />
        <img className={styles.DownArrow} src={DownArrow} alt="open/close" />

        {addedCategories.length > 0 && (
          <div className={styles.added}>
            {addedCategories.map((category, id) => (
              <button key={id} className="category-btn" style={{ color: category.text_color, backgroundColor: category.background_color }}>
                {category.title}
                <img onClick={() => handleCategoryDelete(category)} src={DELETE} alt="delete" />
              </button>
            ))}
          </div>
        )}
      </div>

      {dropdownOpen && (
        <div className={styles.dropdownCategories}>
          {categories.map((category, id) => (
            <button
              key={id}
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
