import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex  items-center justify-between  container mx-auto mt-3">
        <div>
          <img src="/photos/brand_logo.png" alt="brand_logo" srcset="" />
        </div>

        <div>
          <ul className="flex gap-6 font-bold text-xl">
            <li href="#">HOME</li>
            <li href="#">LOCATION</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT US</li>
          </ul>
        </div>

        <div>
          <button className="bg-red-500 text-white text-xl font-[500] px-4 py-1.5"> Login </button>
        </div>

        
      </nav>
    </>
  );
};

export default Navbar;
