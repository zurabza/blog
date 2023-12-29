import React, { useState, useEffect } from "react";
import styles from "./Categories.module.css";

import { useApi } from "../../context/apiProviderContext";
import { useCategoryContext } from "../../context/categoriesFilterContext";

function Categories() {
  const [categories, setCategories] = useState([]);

  const { categories: filteredCategories, updateCategories } = useCategoryContext();
  const { initializeData } = useApi();

  useEffect(() => {
    initializeData("/categories", setCategories);
  }, []);

  const categoriesNotLoaded = categories.length == 0;

  const filterBlogposts = (newCategory) => {
    const isCategorySelected = filteredCategories.includes(newCategory);

    if (isCategorySelected) {
      const updatedCategories = filteredCategories.filter((category) => category !== newCategory);
      updateCategories(updatedCategories);
    } else {
      const updatedCategories = [...filteredCategories, newCategory];
      updateCategories(updatedCategories);
    }
  };

  return (
    <div className={styles.container}>
      {categories?.map((category) => (
        <button
          key={category.id}
          onClick={() => filterBlogposts(category)}
          className={`category-btn ${filteredCategories.includes(category) && styles.selected}`}
          style={{ color: category.text_color, backgroundColor: category.background_color, border: `2px solid ${category.background_color}` }}
        >
          {category.title}
        </button>
      ))}

      {categoriesNotLoaded &&
        loadingButtons.map((button, id) => (
          <button key={id} className={button.className}>
            {button.content}
          </button>
        ))}
    </div>
  );
}

const loadingButtons = [
  {
    className: `category-btn ${styles.loadingFilter}`,
    content: "...",
  },
  {
    className: `category-btn ${styles.loadingFilter} ${styles.green}`,
    content: "...",
  },
  {
    className: `category-btn ${styles.loadingFilter} ${styles.purple}`,
    content: "...",
  },
  {
    className: `category-btn ${styles.loadingFilter} ${styles.red}`,
    content: "...",
  },
  {
    className: `category-btn ${styles.loadingFilter} ${styles.lightGreen}`,
    content: "...",
  },
];

export default Categories;
