import React from "react";
import classes from "./MainScreen.module.css";

const MainScreen = (props) => {
  return <main className={classes.main}>{props.children}</main>;
};

export default MainScreen;
