// api.js
async function getDataByFetchApi(url, currentPage, todosPerPage, contentPerPage) {
    try {
      const res = await fetch(
        `${url}&_page=${currentPage}&_limit=${todosPerPage}`
      );
      const result = await res.json();
      const totalTodos = res.headers.get("x-total-count");
      const totalPages = Math.ceil(totalTodos / contentPerPage);
      return { result, totalPages };
    } catch (err) {
      throw err;
    }
  } 
  
  export default getDataByFetchApi;
  