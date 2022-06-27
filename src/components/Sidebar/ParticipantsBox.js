import React from "react";
import classes from "./ParticipantsBox.module.css";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Thomas Wagner",
    avatarColor: "#4285f4",
  },
  {
    id: 2,
    name: "William Compton",
    avatarColor: "#ea4335",
  },
  {
    id: 3,
    name: "Joan Morton",
    avatarColor: "#fbbc05",
  },
  {
    id: 4,
    name: "Debbie Flemings",
    avatarColor: "#34a853",
  },
];

const ParticipantsBox = () => {
  return (
    <div className={classes.box}>
      <div className={classes.heading}>
        <p>People</p>
        <span class="material-icons-outlined">close</span>
      </div>
      <div className={classes.add_people}>
        <span class="material-icons-outlined">person_add_alt</span>
        <p>Add people</p>
      </div>
      <div className={classes.input_group}>
        <span class={`material-icons-outlined ${classes.icon}`}>search</span>
        <input
          type="text"
          placeholder="Search for People"
          className={classes.field}
        />
      </div>
      <div>
        <p>In call</p>
        {DUMMY_DATA.map((participant) => {
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
