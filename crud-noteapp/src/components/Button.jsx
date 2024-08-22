import React from 'react'

const Button = ({text, handleClick}) => {
  return (
    <div>
        <button className="btn" onClick={handleClick}>{text}</button>
    </div>
  )
}

export default Button