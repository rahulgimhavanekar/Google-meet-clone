import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import classes from "./Footer.module.css";

const Footer = () => {
  const [streamState, setStreamState] = useState({
    mic: true,
    video: true,
  });

  const { showChat, showParticipants } = useContext(GlobalContext);

  const micClickHandler = () => {
    setStreamState((prevState) => {
      return { ...prevState, mic: !prevState.mic };
    });
  };

  const videoClickHandler = () => {
    setStreamState((prevState) => {
      return { ...prevState, video: !prevState.video };
    });
  };

  const todayDate = new Date().toLocaleTimeString([], {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  const micClasses = streamState.mic
    ? `${classes.mid_icon}`
    : `${classes.mid_icon} ${classes.off}`;

  const videoClasses = streamState.video
    ? `${classes.mid_icon}`
    : `${classes.mid_icon} ${classes.off}`;

  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <p>{todayDate} | zoz-pmqv-wnu</p>
      </div>
      <div className={classes.middle}>
        <div className={micClasses} onClick={micClickHandler}>
          <span className={`material-icons ${classes.md_light} `}>
            {streamState.mic ? "mic" : "mic_off"}
          </span>
        </div>
        <div className={videoClasses} onClick={videoClickHandler}>
          <span className={`material-icons-outlined ${classes.md_light}`}>
            {streamState.video ? "videocam" : "videocam_off"}
          </span>
        </div>
        <div className={classes.mid_icon}>
          <span className={`material-icons-outlined ${classes.md_light}`}>
            closed_caption_off
          </span>
        </div>
        <div className={classes.mid_icon}>
          <span className={`material-icons-outlined ${classes.md_light}`}>
            present_to_all
          </span>
        </div>
        <div className={classes.mid_icon}>
          <span className={`material-icons-outlined ${classes.md_light}`}>
            more_vert
          </span>
        </div>
        <div className={`${classes.mid_icon} ${classes.phone}`}>
          <span className={`material-icons ${classes.md_light}`}>call_end</span>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.right_icon}>
          <span className={`material-icons-outlined ${classes.md_light}`}>
            info
          </span>
        </div>
        <div className={classes.right_icon} onClick={(e) => showParticipants()}>
          <span className={`material-icons-outlined ${classes.md_light}`}>
            people
          </span>
        </div>
        <div className={classes.right_icon} onClick={(e) => showChat()}>
          <span className={`material-icons-outlined ${classes.md_light}`}>
            chat
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
