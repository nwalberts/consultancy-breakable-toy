/* eslint-disable react/button-has-type */
import React from "react";

import { Link } from "react-router-dom";

import "../../style/squids/squidPagination.pcss";

export const SquidPagination = ({ currentPageNumber, numberOfPages }) => {
  const pageLinks = Array.from({ length: numberOfPages }).map((nonValue, index) =>
    index + 1 === currentPageNumber ? (
      <span className="pagination__current-page">{index + 1}</span>
    ) : (
      <Link className="pagination__number" to={`/squids?pageNumber=${index + 1}`}>
        {index + 1}
      </Link>
    )
  );

  return (
    <div className="pagination">
      <div className="pagination__navigation">
        {currentPageNumber !== 1 ? (
          <>
            <Link to={`/squids?pageNumber=${1}`}>
              <i className="fa-solid fa-angles-left fa-xl pagination__arrows" />
            </Link>
            <Link to={`/squids?pageNumber=${currentPageNumber - 1}`}>
              <i className="fa-solid fa-angle-left fa-xl pagination__arrows" />
            </Link>
          </>
        ) : null}
        <span className="rainbow-text"> Squid Central </span>

        {currentPageNumber !== numberOfPages ? (
          <>
            <Link
              to={`/squids?pageNumber=${
                currentPageNumber !== numberOfPages ? currentPageNumber + 1 : numberOfPages
              }`}
            >
              <i className="fa-solid fa-angle-right fa-xl pagination__arrows" />
            </Link>
            <Link to={`/squids?pageNumber=${numberOfPages}`}>
              <i className="fa-solid fa-angles-right fa-xl pagination__arrows" />
            </Link>
          </>
        ) : null}
      </div>

      <div className="pagination__numbers">{pageLinks}</div>
    </div>
  );
};
