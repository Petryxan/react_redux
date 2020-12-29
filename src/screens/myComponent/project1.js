import React, { useState } from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AddName, Remove, Check } from "../../redux/action/project1_Action";
import classes from "./styles.module.css";

const Project1 = () => {
  const [value, setValue] = useState("");

  const text = useSelector(state => state.pr1.videos);
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (value.trim()) {
      setValue("");
      dispatch(AddName(value));
    } else {
      console.log("введіть");
    }
  };

  const onRemove = key => {
    dispatch(Remove(key));
  };

  const onChangeCheckbox = check => {
    dispatch(Check(check));
  };

  const video = text.map(video => (
    <div key={video.key}>
      <li>
        <div className={styles.listVideo}>
          <div onClick={() => onRemove(video.key)}>{video.name}</div>
          <div>{video.rnd}</div>
          <div>{video.checked}</div>
        </div>
        <input type="checkbox" onChange={onChangeCheckbox} />
      </li>
    </div>
  ));
  return (
    <div>
      <div className={styles.project1}>Project1</div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={value}
            placeholder="Input Name"
            onChange={onChangeHandler}
          />
          <button>Input name</button>
        </form>
        <div className={classes.li}>{video}</div>
      </div>
    </div>
  );
};
export default Project1;
