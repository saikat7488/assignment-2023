import { useEffect, useState } from "react";

const useFetchHook = (url, contentPerPage, currentPage) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState(null);
  const todosPerPage = contentPerPage;
 
  useEffect(() => {
    const getDataByFetchApi = async () => {
      try {
        const res = await fetch(
          `${url}?_page=${currentPage}&_limit=${todosPerPage}`
        );
        const result = await res.json();
        // TotalNumberOfItem
        const totalTodos = res.headers.get("x-total-count");
        const totalPages = Math.ceil(totalTodos / todosPerPage);
        setPageCount(totalPages);
        setTodos(result);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    getDataByFetchApi();
  }, [url, currentPage, todosPerPage]);

  return {
    isLoading,
    todos,
    error,
    pageCount,
  }
};

export default useFetchHook;

// const { isLoading, todos, error, pageCount,} = useFetchHook(`http://localhost:4000/paginationData`,contentPerPage,currentPage);
