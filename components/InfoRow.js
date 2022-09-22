import React from "react";
import styles from "../styles/InfoRow.module.css";
const InfoRow = ({ icon, title, subtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src={icon} width={50} height={50} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <div className={styles.chevron}>
        <img src="/chevron-right.svg" width={30} height={30} />
      </div>
    </div>
  );
};
export default InfoRow;
