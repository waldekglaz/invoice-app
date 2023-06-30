import React from 'react'

export default function TextInput({ name, type, text, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} id="" value={value} onChange={onChange} />
    </div>
  )
}
