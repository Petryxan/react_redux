import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <h1>{props.name}</h1>
      <h3>{props.rnd}</h3>
    </div>
  );
};

export default Card;
