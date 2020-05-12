import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./myComponent/Card_in_office";
import { Remove } from "../redux/action/project1_Action";

export const Office = () => {
  const masiv = useSelector((state) => state.pr1.videos);
  const dispatch = useDispatch();

  const onRemove = (key) => {
    dispatch(Remove(key));
  };

  const videos = masiv.map((videos) => (
    <div key={videos.key}>
      <Card name={videos.name} rnd={videos.rnd} key={videos.key} />
      <button onClick={() => onRemove(videos.key)}>delete</button>
    </div>
  ));

  return (
    <div>
      My Office page
      {videos}
    </div>
  );
};
