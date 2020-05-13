import React from "react";
import { useSelector } from "react-redux";
import ComputerCard from "./ComputersCard";
import styles from "./computers.module.css";

const Computers = () => {
  const computersList = useSelector((state) => state.comp.computers);

  const comp = computersList.map((comp) => (
    <div key={comp.id}>
      <ComputerCard
        title={comp.title}
        model={comp.model}
        price={comp.price}
        parameters={comp.parameters}
        img={comp.img}
        id={comp.id}
        comp={comp}
      />
    </div>
  ));

  return <div className={styles.container}>{comp}</div>;
};

export default Computers;
