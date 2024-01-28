import React, { useEffect, useState } from "react";
import BlogCardTemplete from './BlogCardTemplete'

export default function BlogCard({ todo }) {
  const [authorData, setAuthorData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // findaData
  const findData = async (id) => {
    const res = await fetch(
      `https://dbforassignment2023.onrender.com/user_data/${id}`
    );
    const result = await res.json();
    setAuthorData(result);
    setIsLoading(false);
  };

  useEffect(() => {
    findData(todo.author);
  }, [todo.author]);

  return (
    <BlogCardTemplete todo={todo} authorData={authorData} isLoading={isLoading}/>
  );
}
