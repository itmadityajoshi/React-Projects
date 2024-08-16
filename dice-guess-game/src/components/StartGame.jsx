import React from "react";

const StartGame = ({toggle}) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className=" ">
          <img src="/dice.png" alt="" />
        </div>

        <div className="items-center justify-center ">
          <h1 className="text-6xl font-bold mb-3">DICE GAME</h1>
          <button 
          className="bg-black text-white p-2 max-w-[220px] rounded hover:bg-white hover:text-black hover:border hover:border-black  "
          onClick={toggle}>
            Play Now
          </button>
        </div>
      </div>
    </>
  );
};

export default StartGame;
