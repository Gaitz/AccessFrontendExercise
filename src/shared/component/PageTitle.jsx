import React from "react";
import styles from "./PageTitle.module.css";

const PageTitle = (props) => {
  return <h2 className={styles.pageTitle}>{props.children}</h2>;
};

export default PageTitle;
