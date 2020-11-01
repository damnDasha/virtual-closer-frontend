import React from "react";

const VirtualContext = React.createContext({
  events: [],
  outfit: [],
  addOutfit: () => {},
  deleteOutfit: () => {},
  addEvent: () => {},
});

export default VirtualContext;
