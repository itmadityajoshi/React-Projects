import React from "react";
import Button from './Button'

const Header = () => {
  return (
    <header>
        <h2 className="flex justify-between mb-[20px] items-center text-3xl"> Task Manager App</h2>
        <Button onclick={showForm} />
    </header>
  );
};

export default Header;
