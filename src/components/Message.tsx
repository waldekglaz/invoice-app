import React from 'react'
import Image from '../assets/illustration-empty.svg'

export default function Message() {
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <img className="w-[200px] mb-[42px] " src={Image} alt="no ivoices" />
      <h1 className="text-2xl font-bold tracking-tighter mb-[23px]">There is nothing here</h1>
      <p className="text-[13px] text-slate-500">
        Create an invoice by clicking the
        <br /> New button and get started
      </p>
    </div>
  )
}
