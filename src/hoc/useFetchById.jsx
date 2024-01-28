import { useEffect, useState } from "react";

const useFetchById = (url) => {
  const [todoById, setTodoById] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorById, setEerrorById] = useState(null);
 
  useEffect(() => {
    const getDataByFetchApi = async () => {
      try {
        const res = await fetch(
          `${url}`
        );
        const result = await res.json();
        setTodoById(result);
        setIsLoading(false);
      } catch (err) {
        setEerrorById(err);
      }
    };
    getDataByFetchApi();
  }, [url]);

  return {
    isLoading,
    todoById,
    errorById,
  }
};

export default useFetchById;

// const { isLoading, todos, error, pageCount,} = useFetchHook(`http://localhost:4000/paginationData`,contentPerPage,currentPage);
