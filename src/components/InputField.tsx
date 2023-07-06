import React from 'react'

export default function InputField({ name, type, text, register, defaultValue }) {
  return (
    <div className="flex flex-col mb-6">
      <label className="mb-[9px] text-xs text-[#7E88C3]" htmlFor={name}>
        {text}
      </label>
      <input className="pl-[20px] pt-[18px] pb-[15px] pr-[18px] text-sm font-bold tracking-tight" type={type} defaultValue={defaultValue} {...register(name)} />
    </div>
  )
}
