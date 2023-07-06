import React from 'react'

export default function Filter({ filter, onChange }) {
  return (
    <select className="p-1 bg-slate-100" value={filter} onChange={onChange}>
      <option value="all">All</option>
      <option value="paid">Paid</option>
      <option value="pending">Pending</option>
      <option value="draft">Draft</option>
    </select>
  )
}
