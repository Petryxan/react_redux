import React from "react";
import styles from "./computers.module.css";

const ComputerCard = (props) => {


 
  return (
    // <div className={styles.container}>
    <div className={styles.main}>
      <div>{props.title}</div>
      <div>{props.model}</div>
      <img src={props.img} alt={props.title}/>
      <div>{props.parameters}</div>
      <div>{props.price}</div>
     
     
    </div>
    // </div>
  );
};
export default ComputerCard;
