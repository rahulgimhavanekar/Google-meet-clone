import React, { useReducer } from "react";

const participantsList = [
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
    id: 8,
    name: "John Doe",
    avatarColor: "#79d2b8",
  },
];

const initialState = {
  participants: participantsList,
  totalParticipants: participantsList.length,
  messageBox: false,
  participantsBox: false,
  infoBox: false,
};

export const GlobalContext = React.createContext(initialState);

const globalReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_CHAT":
      return {
        ...state,
        messageBox: true,
        participantsBox: false,
      };
    case "SHOW_PARTICIPANTS":
      return {
        ...state,
        participantsBox: true,
        messageBox: false,
      };
    case "SHOW_INFO":
      return {
        ...state,
        participantsBox: false,
        messageBox: false,
        infoBox: true,
      };
    case "HIDE_CHAT":
      return {
        ...state,
        messageBox: false,
      };
    case "HIDE_PARTICIPANTS":
      return {
        ...state,
        participantsBox: false,
      };
    case "HIDE_INFO":
      return {
        ...state,
        infoBox: false,
      };
    default:
      return state;
  }
};

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const showChat = () => {
    dispatch({ type: "SHOW_CHAT" });
  };

  const hideChat = () => {
    dispatch({ type: "HIDE_CHAT" });
  };

  const showParticipants = () => {
    dispatch({ type: "SHOW_PARTICIPANTS" });
  };

  const hideParticipants = () => {
    dispatch({ type: "HIDE_PARTICIPANTS" });
  };

  const showInfo = () => {
    dispatch({ type: "SHOW_INFO" });
  };

  const hideInfo = () => {
    dispatch({ type: "HIDE_INFO" });
  };

  return (
    <GlobalContext.Provider
      value={{
        participants: state.participants,
        totalParticipants: state.totalParticipants,
        messageBox: state.messageBox,
        participantsBox: state.participantsBox,
        showChat: showChat,
        hideChat: hideChat,
        showParticipants: showParticipants,
        hideParticipants: hideParticipants,
        showInfo: showInfo,
        hideInfo: hideInfo,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
