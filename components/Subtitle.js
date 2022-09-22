import React from "react";
import styles from "../styles/Subtitle.module.css";

const Subtitle = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Subtitle;
