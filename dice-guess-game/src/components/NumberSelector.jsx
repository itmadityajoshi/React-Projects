import React from "react";

const NumberSelector = ({selectedNumbers, SetselectedNumbers, error}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  console.log(selectedNumbers);

  // const isSelected = (props) =>{
  //   {(props)=> (props.isSelected ? bg=black : bg-white)
  // }
  return (
    <>

    <div>
    <p className="text-red-500 text-3xl mb-2 font-semibold ">{error}</p>

      <div className="flex gap-[24px] mr-10 ">
          {arrNumber.map((value, i)=> (
          <box className="border border-black w-24 h-24 items-center justify-center flex font-semibold text-5xl mb-5 hover:bg-black hover:text-white
         } 
          "
          // isSelected = {value === selectedNumbers}
          onClick={()=>SetselectedNumbers(value)}
          key={i}
          >
            {value}
          </box>
        ))}
      </div>

      <div className="text-center">
        <p className="text-2xl font-semibold">Select Number</p>
      </div>
    </div>

    </>
  );
};

export default NumberSelector;
