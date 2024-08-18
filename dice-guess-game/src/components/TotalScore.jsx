import React from "react";

const TotalScore = ({score}) => {
  return (
    <>
      <main>
        <div className="max-w-[400px] text-center   p-10">
          <h1 className="text-[100px]">{score}</h1>
          <p className="text-[24px] font-extrabold">Total Score</p>
        </div>
      </main>
    </>
  );
};

export default TotalScore;
