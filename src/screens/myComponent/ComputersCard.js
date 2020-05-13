import React from "react";
import styles from "./computers.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Bay } from "../../redux/action/shopAction";
import { MoneyOff } from "../../redux/action/project1_Action";

const ComputerCard = (props) => {
  const money = useSelector((state) => state.pr1.money);
  const dispatch = useDispatch();

  const bayHandler = () => {
  
    if (props.price > money) {
      alert("No more money");
    } else {
      dispatch(Bay(props.comp));
      dispatch(MoneyOff(props.comp));
    }
  };

  return (
    // <div className={styles.container}>
    <div className={styles.main}>
      <div>{props.title}</div>
      <div>{props.model}</div>
      <img src={props.img} alt={props.title} />
      <div>{props.parameters}</div>
      <div>{props.price}</div>
      <button onClick={() => bayHandler(props.comp)}>Bay</button>
    </div>
    // </div>
  );
};
export default ComputerCard;
