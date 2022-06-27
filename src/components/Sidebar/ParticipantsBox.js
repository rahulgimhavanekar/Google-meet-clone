import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import classes from "./ParticipantsBox.module.css";

const ParticipantsBox = () => {
  const { participants, hideParticipants } = useContext(GlobalContext);

  return (
    <div className={classes.box}>
      <div className={classes.heading}>
        <p>People</p>
        <span
          className="material-icons-outlined"
          onClick={(e) => {
            hideParticipants();
          }}
        >
          close
        </span>
      </div>
      <div className={classes.add_people}>
        <span className="material-icons-outlined">person_add_alt</span>
        <p>Add people</p>
      </div>
      <div className={classes.input_group}>
        <span className={`material-icons-outlined ${classes.icon}`}>
          search
        </span>
        <input
          type="text"
          placeholder="Search for People"
          className={classes.field}
        />
      </div>
      <div>
        <p>In call</p>
        {participants.map((participant) => {
          return (
            <div key={participant.id} className={classes.participant}>
              <div
                className={classes.avatar}
                style={{ backgroundColor: participant.avatarColor }}
              >
                {participant.name.slice(0, 1)}
              </div>
              <p>{participant.name}</p>
              <span className="material-icons-outlined">mic_off</span>
              <span className="material-icons-outlined">push_pin</span>
              <span className="material-icons-outlined">more_vert</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParticipantsBox;
