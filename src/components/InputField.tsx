import React from "react";

export default function InputField({
  name,
  type,
  text,
  register,
  defaultValue,
}) {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input type={type} defaultValue={defaultValue} {...register(name)} />
    </div>
  );
}
