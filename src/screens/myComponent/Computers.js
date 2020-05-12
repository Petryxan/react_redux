import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ComputerCard from "./ComputersCard";
import styles from "./computers.module.css";
import { Bay } from "../../redux/action/shopAction";
import { MoneyOff } from "../../redux/action/project1_Action";

const Computers = () => {
  const computersList = useSelector((state) => state.comp.computers);
  const money = useSelector((state) => state.pr1.money);
  const dispatch = useDispatch();
 

  const bayHandler = (comp) => {

    console.log(comp.id)
    
    if (comp.price > money) {
      alert("No more money")
    } else {
      dispatch(Bay(comp));
      dispatch(MoneyOff(comp));
    }
  };

  const comp = computersList.map((comp) => (
    <div key={comp.id}>
      <ComputerCard
        title={comp.title}
        model={comp.model}
        price={comp.price}
        parameters={comp.parameters}
        img={comp.img}
        id={comp.id}
        bayHandlerAA={bayHandler}
      />
      <button onClick={() => bayHandler(comp)}>Bay</button>
    </div>
  ));

  return <div className={styles.container}>{comp}</div>;
};

export default Computers;
