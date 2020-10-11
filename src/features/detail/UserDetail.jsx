import React, { useEffect } from "react";
import styles from "./UserDetail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./userDetailSlice";
import { Pending, PageTitle } from "../../shared/component";

const UserDetail = () => {
  const { userName } = useParams();
  const dispatch = useDispatch();
  const isPending = useSelector((state) => state.detail.isPending);
  const userInfo = useSelector((state) => state.detail.userInfo);
  const errorMessage = useSelector((state) => state.detail.errorMessage);

  useEffect(() => {
    dispatch(getUser(userName));
  }, [dispatch, userName]);

  return (
    <article className={styles.userDetailComponent}>
      <PageTitle>
        GitHub User: <em>{userName}</em> Detail
      </PageTitle>
      {isPending === true ? (
        <Pending />
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <div className={styles.userInfo}>
          <div className={styles.avatar}>
            <img src={userInfo.avatarUrl} alt="avatar" />
          </div>
          <p>name: {userInfo.name}</p>
          <p>bio: {userInfo.bio}</p>
          <p>login: {userInfo.login}</p>
          <p>siteAdmin: {userInfo.siteAdmin}</p>
          <p>location: {userInfo.location}</p>
          <p>blog: {userInfo.blog}</p>
        </div>
      )}
    </article>
  );
};
export default UserDetail;
