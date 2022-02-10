import React from 'react'

const Button = (props) => {
  const { text } = props
  return (
    <div>
       <button type="submit" className="btn btn-dark">{text}</button>
    </div>
  )
}

export default Button