import React from "react";

export default function InputField({
  name,
  type,
  text,
  register,
  defaultValue,
}) {
  return (
    <div className="flex flex-col mb-6">
      <label className="mb-[9px]" htmlFor={name}>
        {text}
      </label>
      <input type={type} defaultValue={defaultValue} {...register(name)} />
    </div>
  );
}
