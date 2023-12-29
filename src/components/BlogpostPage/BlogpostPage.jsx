import React, { useEffect, useState } from "react";
import styles from "./BlogpostPage.module.css";

import { useParams } from "react-router-dom";
import { useApi } from "../../context/ApiProviderContext";

import RelatedBlogposts from "../RelatedBlogposts";

function BlogpostPage() {
  const [blogpost, setBlogpost] = useState(null);

  const { id } = useParams();
  const { initializeData } = useApi();

  const fetchData = async () => {
    await initializeData(`/blogs/${id}`, setBlogpost);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (blogpost) {
    const { id: blogId, title, author, categories, description, email, image, publish_date } = blogpost;

    return (
      <>
        {/* <img src="" alt="go back" /> */}

        <div className={styles.container}>
          <img src={image} alt="blog cover" />

          <div className={styles.metadata}>
            <h4>{author}</h4>
            <h6>
              {publish_date}
              {email && ` • ${email}`}
            </h6>
          </div>

          <h1 className={styles.title}>{title}</h1>

          <div className={styles.categories}>
            {categories?.map((category) => (
              <button key={category.id} className="category-btn" style={{ color: category.text_color, backgroundColor: category.background_color }}>
                {category.title}
              </button>
            ))}
          </div>

          <p className={styles.description}>{description}</p>
        </div>

        <RelatedBlogposts blogpost={blogpost} />
      </>
    );
  }
}

export default BlogpostPage;
