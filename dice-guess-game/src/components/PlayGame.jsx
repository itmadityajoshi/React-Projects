import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

const PlayGame = () => {
  const [selectedNumbers, SetselectedNumbers] = useState();

  const [currentDice, setCurrentDice] = useState(1);

  const [score, setScore] = useState(0);

  const [error, setError]  = useState('')

  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumbers) {
     setError('You have not selected any Numbers')
      return;
    }
    setError("")
    
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumbers == randomNumber) {
      setScore((prev) => randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumbers={selectedNumbers}
          SetselectedNumbers={SetselectedNumbers}
          error={error}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
    </>
  );
};

export default PlayGame;
