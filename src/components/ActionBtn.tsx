import React from "react";
interface ActionBtnProps {
  onClick: () => void;
  btnText: string;
}

export default function ActionBtn({ onClick, btnText }: ActionBtnProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={` capitalize px-[12px] py-[8px] rounded-[20px] ${
        btnText === "edit" ? "text-slate-400 bg-slate-50" : ""
      } ${btnText === "delete" ? "text-white bg-red-500" : ""} ${
        btnText === "mark as paid" ? "text-white bg-violet-500" : ""
      }`}
    >
      {btnText}
    </button>
  );
}
