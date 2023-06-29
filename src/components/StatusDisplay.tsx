import React from 'react'

export default function StatusDisplay({ statusType }) {
  return <span className={`capitalize w-[104px] h-[40px] leading-[40px] text-center rounded-md  ${statusType === 'paid' ? 'bg-green-50 text-green-500' : ''} ${statusType === 'pending' ? 'bg-orange-50 text-orange-500' : ''} ${statusType === 'draft' ? 'bg-slate-50 text-slate-500' : ''}`}>&#x25CF; {statusType}</span>
}
