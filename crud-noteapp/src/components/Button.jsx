import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button className="btn" onClick={handleClick}>{text}</button>
    </div>
  )
}

export default Button