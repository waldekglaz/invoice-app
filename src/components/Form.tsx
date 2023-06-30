import { MouseEventHandler, useState } from 'react'
import GoBackBtn from './GoBackBtn'
import TextInput from './TextInput'
import { invoiceNumberGenerator, todayDateGenerator } from '../utils/utils'
interface FormProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  onSave: any
}

export default function Form({ onClick, onSave }: FormProps) {
  const [clientStreet, setClientStreet] = useState('')
  const [clientCity, setClientCity] = useState('')
  const [clientPostcode, setClientPostcode] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const onClientStreetChange = (e) => {
    setClientStreet(e.target.value)
  }
  const onClientCityChange = (e) => {
    setClientCity(e.target.value)
  }
  const onClientPostcodeChange = (e) => {
    setClientPostcode(e.target.value)
  }
  const onClientNameChange = (e) => {
    setClientName(e.target.value)
  }
  const onClientEmailChange = (e) => {
    setClientEmail(e.target.value)
  }
  const invoiceData = {
    id: invoiceNumberGenerator(),
    createdAt: todayDateGenerator(),
    paymentDue: '2021-11-12',
    description: 'Logo Re-design',
    paymentTerms: 7,
    clientName: clientName,
    clientEmail: clientEmail,
    status: 'draft',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: clientStreet,
      city: clientCity,
      postCode: clientPostcode,
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Logo Re-design',
        quantity: 1,
        price: 3102.04,
        total: 3102.04,
      },
    ],
    total: 5445,
  }
  return (
    <div>
      <GoBackBtn onClick={onClick} />
      <h2>New invoice</h2>
      Bill From
      <form onSubmit={(e) => onSave(e, invoiceData)}>
        <TextInput name="client-street" type="text" text="Street Address" value={clientStreet} onChange={onClientStreetChange} />
        <div className="flex">
          {' '}
          <TextInput name="client-city" type="text" text="City" value={clientCity} onChange={onClientCityChange} />
          <TextInput name="client-post-code" type="text" text="Post Code" value={clientPostcode} onChange={onClientPostcodeChange} />
          <TextInput name="client-name" type="text" text="Client's Name" value={clientName} onChange={onClientNameChange} />
          <TextInput name="client-email" type="text" text="Client's Email" value={clientEmail} onChange={onClientEmailChange} />
        </div>

        <button type="submit" className="bg-blue-500">
          Save & Send
        </button>
      </form>
      Bill To
    </div>
  )
}
