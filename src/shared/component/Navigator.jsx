import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Navigator.module.css";

const Navigator = () => {
  const [userName, setUserName] = useState("");
  const history = useHistory();

  return (
    <nav className={styles.navigator}>
      <ul>
        <li>
          <Link to="/">Back to List</Link>
        </li>
        <li>
          <form
            data-testid="searchForm"
            onSubmit={(event) => {
              event.preventDefault();
              history.push(`/${userName}`);
            }}
          >
            <label htmlFor="userName">Search user by account: </label>
            <input
              type="search"
              name="userName"
              id="userName"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <button type="submit">go</button>
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
