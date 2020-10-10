import React from "react";
import styles from "./UserDetail.module.css";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { userLogin } = useParams();

  return (
    <>
      <h2 className={styles.pageTitle}>
        GitHub User: <em>{userLogin}</em> Detail
      </h2>
    </>
  );
};
export default UserDetail;
