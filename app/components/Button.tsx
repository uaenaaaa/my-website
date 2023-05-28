import React, { FC } from 'react'

interface ButtonProps {
  text: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  className?: string,

}

const Button: FC<ButtonProps> = ({text, onClick, className}) => {
  return <button onClick={onClick} className={className}>{text}</button>
}

export default Button