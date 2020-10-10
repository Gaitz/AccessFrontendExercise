import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGitHubUsers, PER_PAGE } from "./userListSlice";
import styles from "./UserList.module.css";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.list.users);
  const pageIndex = useSelector((state) => state.list.pageIndex);
  const isPending = useSelector((state) => state.list.isPending);

  useEffect(() => {
    dispatch(getGitHubUsers());
  }, [dispatch]);

  const anUserInfo = (user, order) => {
    return (
      <li key={user.id}>
        <p>{order}</p>
        <div className={styles.avatar}>
          <img src={user.avatar_url} alt="avatar" />
        </div>
        <p className={styles.userLogin}>{user.login}</p>
        <p className={styles.siteAdmin}>
          Site Admin: {user.site_admin ? "true" : "false"}
        </p>
      </li>
    );
  };

  return (
    <article className={styles.listComponent}>
      <h2 className={styles.pageTitle}>User List</h2>
      {isPending === true ? (
        <p>Waiting for request</p>
      ) : (
        <>
          <div className={styles.paginatedBlock}>
            <p>
              This page contains {users.length} items, Current page index:{" "}
              {pageIndex}
            </p>
            <button
              onClick={(event) => {
                event.preventDefault();
                dispatch(getGitHubUsers());
              }}
            >
              Get Next Page
            </button>
          </div>
          <ul className={styles.userList}>
            {users.map((user, order) =>
              anUserInfo(user, (pageIndex - 1) * PER_PAGE + order + 1)
            )}
          </ul>
        </>
      )}
    </article>
  );
};

export default UserList;
