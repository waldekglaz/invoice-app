import React from 'react'

export default function ActionBtn({ onClick, btnText }) {
  return (
    <button onClick={onClick} type="button" className={` capitalize px-[24px] py-[12px] rounded-full ${btnText === 'edit' ? 'text-slate-400 bg-slate-50' : ''} ${btnText === 'delete' ? 'text-white bg-red-500' : ''} ${btnText === 'mark as paid' ? 'text-white bg-violet-500' : ''}`}>
      {btnText}
    </button>
  )
}
