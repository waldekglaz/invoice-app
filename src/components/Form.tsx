import { MouseEventHandler, useState } from 'react'
import GoBackBtn from './GoBackBtn'
import InputField from './InputField'
import { useForm } from 'react-hook-form'
import { invoiceNumberGenerator, todayDateGenerator } from '../utils/utils'
interface FormProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  onSave: any
}

export default function Form({ onClick, onSave }: FormProps) {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    const invoiceData = {
      id: invoiceNumberGenerator(),
      createdAt: todayDateGenerator(),
      paymentDue: '2021-11-12',
      description: 'Logo Re-design',
      paymentTerms: 7,
      clientName: 'data.clientName',
      clientEmail: 'data.clientEmail',
      status: 'draft',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: 'clientStreet',
        city: 'clientCity',
        postCode: 'clientPostcode',
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
    // onSave(invoiceData)
    console.log(data)
  }

  return (
    <div>
      <GoBackBtn onClick={onClick} />
      <h2>New invoice</h2>
      Bill From
      {/* <form onSubmit={(e) => onSave(e, invoiceData)}> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <TextInput name="client-street" type="text" text="Street Address" value={clientStreet} onChange={onClientStreetChange} />
        <div className="flex">
          {' '}
          <TextInput name="client-city" type="text" text="City" value={clientCity} onChange={onClientCityChange} />
          <TextInput name="client-post-code" type="text" text="Post Code" value={clientPostcode} onChange={onClientPostcodeChange} />
          <TextInput name="client-name" type="text" text="Client's Name" value={clientName} onChange={onClientNameChange} />
          <TextInput name="client-email" type="text" text="Client's Email" value={clientEmail} onChange={onClientEmailChange} />
        </div> */}
        {/* <InputField text="Street Address" type="text" {...register('street')} /> */}
        <label htmlFor="clientEmail">Client Email</label>
        <input defaultValue="" {...register('clientEmail')} />
        <button type="submit" className="bg-blue-500">
          Save & Send
        </button>
      </form>
      Bill To
    </div>
  )
}
