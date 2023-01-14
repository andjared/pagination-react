import React from "react";

const Pagination = ({ pagesCount, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if (currentPage < pagesCount) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <nav className="pagination">
      <button
        onClick={prevPage}
        className={`btn ${currentPage === 1 && "disabled"}`}
      >
        Prev
      </button>
      {pageNumbers.map((page) => (
        <button
          onClick={() => setCurrentPage(page)}
          key={page}
          className={`btn ${page === currentPage && "active"}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={nextPage}
        className={`btn ${currentPage === pagesCount && "disabled"}`}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
