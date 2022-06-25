import React from "react";
import classes from "./Participant.module.css";

const Participant = ({ name, avatarColor }) => {
  return (
    <div className={classes.participant}>
      <div className={classes.avatar} style={{ backgroundColor: avatarColor }}>
        <h1>{name.slice(0, 1)}</h1>
      </div>
      <div className={classes.name}>{name}</div>
    </div>
  );
};

export default Participant;
