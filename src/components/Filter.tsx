import React from 'react'

export default function Filter({ filter, onChange }) {
  return (
    <select value={filter} onChange={onChange}>
      <option value="all">All</option>
      <option value="paid">Paid</option>
      <option value="pending">Pending</option>
      <option value="draft">Draft</option>
    </select>
  )
}
