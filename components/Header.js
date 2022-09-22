import React from "react";
import styles from "../styles/Header.module.css";

const Header = ({ children }) => {
  return <h1 className={styles.header}>{children}</h1>;
};

export default Header;
