import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGitHubUsers, PER_PAGE } from "./userListSlice";
import styles from "./UserList.module.css";
import { Link } from "react-router-dom";
import { PageTitle, Pending } from "../../shared/component";
import ListPagination from "./ListPagination";

const UserList = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.list.users);
  const pageIndex = useSelector((state) => state.list.pageIndex);
  const isPending = useSelector((state) => state.list.isPending);

  useEffect(() => {
    dispatch(getGitHubUsers(pageIndex));
  }, [pageIndex, dispatch]);

  const anUserInfo = (user, order) => {
    return (
      <li className={styles.anUserInfo} key={user.id}>
        <Link to={`/${user.login}`}>
          <p>{order}</p>
          <div className={styles.avatar}>
            <img src={user.avatarUrl} alt="avatar" />
          </div>
          <p className={styles.userLogin}>{user.login}</p>
          <p className={styles.siteAdmin}>
            Site Admin: {user.siteAdmin ? "true" : "false"}
          </p>
        </Link>
      </li>
    );
  };

  return (
    <article className={styles.listComponent}>
      <PageTitle>GitHub User List</PageTitle>
      {isPending === true ? (
        <Pending />
      ) : (
        <>
          <ListPagination></ListPagination>
          <p>This page contains {users.length} items</p>
          <ul className={styles.userList}>
            {users.map((user, order) =>
              anUserInfo(user, pageIndex * PER_PAGE + order + 1)
            )}
          </ul>
        </>
      )}
    </article>
  );
};

export default UserList;
