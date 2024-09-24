import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>Nice to meet you 👋</h1>
        <h1 className={styles.title}>Hi, I'm Suvajit Pradhan</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 years of experience using React and
          ExpressJS. Reach out if you'd like to learn more!
        </p>
        <Link to="mailto:suvajit6053.bca22@chitkarauniversity.edu.in" className={styles.contactBtn}>
          Connect
        </Link>
      </div>
      <img
        src={getImageUrl("hero/heroimage2.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
