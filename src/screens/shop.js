import React, { useState } from "react";

import styles from "../styles/MyComponentsStyles.module.css";
import Computers from "./myComponent/Computers";
import Project2 from "./myComponent/project2";

export const Shop = () => {
  const [visible, setVisible] = useState("comp1");

  return (
    <div className={styles.MyComponents}>
      <div className={styles.menu}>
        <li onClick={() => setVisible("comp1")}>Computers</li>
        <li onClick={() => setVisible("comp2")}>Microfones</li>
        <li onClick={() => setVisible("comp2")}>Lighting</li>
        <li onClick={() => setVisible("comp2")}>Cameras</li>
        <li onClick={() => setVisible("comp2")}>Microfones</li>
        <li onClick={() => setVisible("comp2")}>Microfones</li>
        <li onClick={() => setVisible("comp2")}>Microfones</li>
      </div>
      <div className={styles.main}>
        <div>
          {visible === "comp1" ? <Computers /> : null}
          {visible === "comp2" ? <Project2 /> : null}
        </div>
      </div>
    </div>
  );
};
