import React, { useEffect } from "react";
import style from "./BlogPage.module.css";

// IMPORT TEMPLETE
import Blog from "../../components/blog/Blog";

export default function BlogPage() {
  useEffect(() => {
    document.title = 'WorldCoder | Blog';
  }, []);
  return (
    <>
      <div className={style.pageContainer}>
        <Blog paginationSystem={true} contentPerPage="6" />
      </div>
    </>
  );
}
