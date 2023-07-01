import React from 'react'

export default function InputField({ name, type, text }) {
  return (
    <div>
      <label>{text}</label>
      <input type={type} name={name} id="" />
    </div>
  )
}
