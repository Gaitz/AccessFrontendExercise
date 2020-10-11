import React from "react";
import styles from "./ListPagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { appendPageIndex, goToPageIndex } from "./userListSlice";

const ListPagination = () => {
  const dispatch = useDispatch();

  const pageIndex = useSelector((state) => state.list.pageIndex);
  const currentPage = pageIndex + 1;

  return (
    <div className={styles.paginatedBlock}>
      <p>
        Page Index:{" "}
        {Array(currentPage)
          .fill(currentPage)
          .map((v, i) => {
            const isDisabled = i === pageIndex;
            return (
              <a
                key={i}
                href={`/page/${i}`}
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(goToPageIndex(i));
                }}
                className={`${styles.pageIndexLink} ${
                  isDisabled ? styles.disabledLink : ""
                }`}
              >
                {i}
              </a>
            );
          })}
      </p>
      <button
        onClick={(event) => {
          event.preventDefault();
          dispatch(appendPageIndex(1));
        }}
      >
        Get Next Page
      </button>
    </div>
  );
};

export default ListPagination;
