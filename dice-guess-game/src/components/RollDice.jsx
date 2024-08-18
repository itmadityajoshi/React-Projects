import React from "react";


const RollDice = ({currentDice, rollDice}) => {



  return (
    <main className="flex items-center flex-col">
      <div className="cursor-pointer " onClick={() => rollDice()}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p className="text-[24px]">Click on Dice to roll</p>
    </main>
  );
};

export default RollDice;
