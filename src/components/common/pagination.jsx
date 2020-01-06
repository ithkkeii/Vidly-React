import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({
  pageSize,
  itemsCount,
  currentPage,
  onPageChange,
  onPageIncrement
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  // No pagination
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);
  //   if (currentPage === pages[pages.length - 1])
  return (
    <React.Fragment>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {pages.map(page => (
            <li
              key={page}
              className="page-item"
              onClick={() => {
                onPageChange(page);
              }}
            >
              <a className="page-link" href="#">
                {page}
              </a>
            </li>
          ))}
          <li className="page-item" onClick={onPageIncrement}>
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageIncrement: PropTypes.func.isRequired
};

export default Pagination;
