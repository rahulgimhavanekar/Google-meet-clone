import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import classes from "./MessageBox.module.css";

const DUMMY_MESSAGES = [
  {
    id: 1,
    time: "3:17 PM",
    user: "Thomas Wagner",
    text: "Hey",
  },
  {
    id: 2,
    time: "3:18 PM",
    user: "Anna Youngberg",
    text: "Have you completed the assignment?",
  },
  {
    id: 3,
    time: "3:21 PM",
    user: "Sandra Harris",
    text: "Some minor changes are yet to be done.",
  },
];

const MessageBox = () => {
  const { hideChat } = useContext(GlobalContext);

  return (
    <div className={classes.box}>
      <div className={classes.content}>
        <div className={classes.heading}>
          <p>In-call messages</p>
          <span
            class="material-icons-outlined"
            onClick={(e) => {
              hideChat();
            }}
          >
            close
          </span>
        </div>
        <div className={classes.note}>
          Messages can only be seen by people in the call and are deleted when
          call ends
        </div>
        <div className={classes.messsages}>
          {DUMMY_MESSAGES.map((message) => {
            return (
              <div key={message.id} className={classes.message}>
                <span className={classes.user}>{message.user}</span>
                <span className={classes.time}>{message.time}</span>
                <p className={classes.text}>{message.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.input_group}>
        <input
          type="text"
          className={classes.field}
          placeholder="Send message to everyone"
        />
        <span class={`material-icons-outlined ${classes.icon}`}>send</span>
      </div>
    </div>
  );
};

export default MessageBox;
