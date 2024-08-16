import React, { useState } from "react";
import StartGame from "./components/StartGame";
import PlayGame from "./components/PlayGame";

const App = () => {
  const [isGameOn, setIsGameOn] = useState(true);

  const toggleGamePlay = () => {
    setIsGameOn(() => !isGameOn);
  };
  return <>{isGameOn ? <PlayGame /> : <StartGame toggle={toggleGamePlay} />}</>;
};

export default App;
