import React, { useState } from "react";

const Colors = () => {
  //   const bgColors = [
  //     {
  //       Mindaro: "#D9E76C",
  //     },
  //     {
  //       Cream: "#AC3931"
  //     },
  //     {
  //       'Emerlad': "#32DE8A",
  //     },
  //     {
  //       'Blue': "#279AF1",
  //     },
  //     {
  //       'Blue': "#AC3931",
  //     },
  //     {
  //       'GhostWhite ': "#F7F7FF",
  //     },
  //   ];

  const [color, setColor] = useState("red");
  return (
    <>
      <div className="w-screen h-screen " style={{ background: color }}>
        <div className="flex flex-col  gap-4 items-center max-w-[200px] ">
          <button
            className="border border-black text-3xl p-2 rounded-lg bg-red-500 mt-5"
            onClick={() => setColor("red")}
          >
            Bg-red
          </button>
          <button
            className="border border-black text-3xl p-2 rounded-lg bg-blue-500"
            onClick={() => setColor("blue")}
          >
            Bg-blue
          </button>

          <button
            className="border border-black text-3xl p-2 rounded-lg bg-teal-500"
            onClick={() => setColor("teal")}
          >
            Bg-Teal
          </button>

          <button
            className="border border-black text-3xl p-2 rounded-lg bg-cyan-500"
            onClick={() => setColor("Cyan")}
          >
            Bg-Cyan
          </button>

          <button
            className="border border-black text-3xl p-2 rounded-lg bg-orange-500"
            onClick={() => setColor("orange")}
          >
            Bg-Orge
          </button>

          <button
            className="border border-black text-3xl p-2 rounded-lg bg-green-500"
            onClick={() => setColor("green")}
          >
            Bg-Slate
          </button>

          <button
            className="border border-black text-3xl p-2 rounded-lg bg-yellow-500"
            onClick={() => setColor("yellow")}
          >
            Bg-yellow
          </button>
        </div>
      </div>
    </>
  );
};

export default Colors;
