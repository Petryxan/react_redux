import React, { useState } from "react";
// import { Switch, Route, Redirect, NavLink } from "react-router-dom";
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
        <li>
         
          <button onClick={() => setProject(!project)}>Project 1</button>
        </li>
        <li>
       
          <button onClick={() => setProject2(!project2)}>Project 2</button>
        </li>
        <li>Project 3</li>
        <li>Project 4</li>
        <li>Project 5</li>
        <li>Project 6</li>
        {/* <Switch> */}

        {/* { this.state.isLoggedIn ? <Route path="/about" component={About}/> : null } */}

        {/* <Route path="/myComponents/project1" component={Project1}/> */}
        {/* <Route path="/cars" component={Cars}/> */}
        {/* <Redirect to={'/'}/> */}
        {/*<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />*/}
        {/* </Switch> */}
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
