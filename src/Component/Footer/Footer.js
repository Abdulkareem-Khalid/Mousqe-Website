import React from "react";
import styles from "./Footer.module.css";
import BlackLogo from "../Images/maamour-black-logo.png";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          src={BlackLogo}
          alt="شعار معمور"
          className={styles.BlackLogo}
        ></img>
        <h3 className={styles.title}>
          مسجد <span className={styles.titleCustom}>معمور</span>
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
