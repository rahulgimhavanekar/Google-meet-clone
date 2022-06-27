import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import classes from "./InfoBox.module.css";

const InfoBox = () => {
  const { hideInfo } = useContext(GlobalContext);

  return (
    <div className={classes.box}>
      <div className={classes.heading}>
        <p>Your meeting's ready</p>
        <span className="material-icons-outlined" onClick={(e) => hideInfo()}>
          close
        </span>
      </div>
      <button className={classes.add}>
        <span className="material-icons-outlined">person_add_alt</span> Add
        Others
      </button>
      <p className={classes.note}>
        Or share this meeting link with others you want in the meeting
      </p>
      <div className={classes.meeting_link}>
        meeting.google.com/zoz-pmqv-wnu{" "}
        <span className="material-icons-outlined">content_copy</span>
      </div>
      <p className={classes.note}>
        People who use this meeting link must get your permission before they
        can join.
      </p>
      <p className={classes.note}>Joined as thomaswagner@gmail.com</p>
    </div>
  );
};

export default InfoBox;
