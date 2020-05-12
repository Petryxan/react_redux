import React, { useState } from "react";

import styles from "../styles/MyComponentsStyles.module.css";
import Project1 from "./myComponent/project1";
import Project2 from "./myComponent/project2";

export const MyComponents = () => {
  const [project, setProject] = useState(false);
  const [project2, setProject2] = useState(false);
  // const [project3, setProject3] = useState(false);
  // const [project4, setProject4] = useState(false);

  return (
    <div className={styles.MyComponents}>
      <div className={styles.menu}>
        <li onClick={() => setProject(!project)}>Project 1</li>
        <li onClick={() => setProject2(!project2)}>Project 2</li>
        <li>Project 3</li>
        <li>Project 4</li>
        <li>Project 5</li>
        <li>Project 6</li>
      </div>
      <div className={styles.main}>
        <div>
          {project ? <Project1 /> : null}
          {project2 ? <Project2 /> : null}
        </div>
      </div>
    </div>
  );
};
