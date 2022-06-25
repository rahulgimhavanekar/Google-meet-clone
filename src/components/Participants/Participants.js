import React from "react";
import Participant from "./Participant";
import classes from "./Participants.module.css";

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
  {
    id: 5,
    name: "Anna Youngberg",
    avatarColor: "#673ab7",
  },
  {
    id: 6,
    name: "Sandra Harris",
    avatarColor: "#ff00ff",
  },
  {
    id: 7,
    name: "Robert Goodson",
    avatarColor: "#fc7e8a",
  },
  {
    id: 1,
    name: "Thomas Wagner",
    avatarColor: "#79d2b8",
  },
];

const Participants = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.participants}>
        {DUMMY_DATA.map((participant) => {
          return (
            <Participant
              key={participant.id}
              name={participant.name}
              avatarColor={participant.avatarColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Participants;
