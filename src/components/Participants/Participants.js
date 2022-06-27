import React, { useContext } from "react";
import Participant from "./Participant";
import MessageBox from "../Sidebar/MessageBox";
import ParticipantsBox from "../Sidebar/ParticipantsBox";
import { GlobalContext } from "../../context/globalState";
import classes from "./Participants.module.css";
import InfoBox from "../Sidebar/InfoBox";

const Participants = () => {
  const { participants, messageBox, participantsBox, infoBox } =
    useContext(GlobalContext);

  return (
    <div className={classes.wrapper}>
      <div className={classes.participants}>
        {participants.map((participant) => {
          return (
            <Participant
              key={participant.id}
              name={participant.name}
              avatarColor={participant.avatarColor}
            />
          );
        })}
      </div>
      {infoBox && <InfoBox />}
      {messageBox && <MessageBox />}
      {participantsBox && <ParticipantsBox />}
    </div>
  );
};

export default Participants;
