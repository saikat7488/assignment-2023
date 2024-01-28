import React, { memo } from "react";
import style from "./ReactPaginationComponent.module.css";
import ReactPagination from "react-paginate";

const ReactPaginationComponent = ({
  currentPage,
  pageCount,
  handlePageClick,
}) => {
  // Code
  const adjustedPage = Math.min(currentPage - 1, pageCount - 1);

  return (
    <>
      <ReactPagination
        forcePage={adjustedPage}
        // ContainerClassName
        containerClassName={style.paginationContainer}
        // Prev
        previousLabel={""}
        previousClassName={`${style.previousClassName} ${
          currentPage === 1 ? style.activeBtn : ""
        }`}
        previousLinkClassName={`${style.previousLinkClassName}`}
        // Next
        nextLabel={""}
        nextClassName={`${style.nextClassName} ${
          currentPage === pageCount ? style.activeBtn : ""
        }`}
        nextLinkClassName={style.nextLinkClassName}
        // Break
        breakLabel={"---"}
        breakClassName={style.breakClassName}
        breakLinkClassName={style.breakLinkClassName}
        // Page
        pageCount={pageCount}
        pageClassName={`${style.pageClassName}`}
        pageLinkClassName={style.pageLinkClassName}
        // How Much page display before and after breakLabel
        marginPagesDisplayed={3}
        // How Much page display when click breakLabel
        pageRangeDisplayed={3}
        activeClassName={`${style.activeBtn}`}
        // onPageChange Handler  -> data -> data.selected
        onPageChange={handlePageClick}
      />
    </>
  );
};
export default memo(ReactPaginationComponent);
