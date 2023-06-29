import { useState } from 'react'
import Header from './components/Header'
import Message from './components/Message'
import Form from './components/Form'
import InvoiceCard from './components/InvoiceCard'
import InvoiceDetails from './components/InvoiceDetails'

const MOCK_DATA = [
  {
    id: 'RT3080',
    createdAt: '2021-08-18',
    paymentDue: '2021-08-19',
    description: 'Re-branding',
    paymentTerms: 1,
    clientName: 'Jensen Huang',
    clientEmail: 'jensenh@mail.com',
    status: 'paid',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '106 Kendell Street',
      city: 'Sharrington',
      postCode: 'NR24 5WQ',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Brand Guidelines',
        quantity: 1,
        price: 1800.9,
        total: 1800.9,
      },
    ],
    total: 1800.9,
  },
  {
    id: 'XM9141',
    createdAt: '2021-08-21',
    paymentDue: '2021-09-20',
    description: 'Graphic Design',
    paymentTerms: 30,
    clientName: 'Alex Grim',
    clientEmail: 'alexgrim@mail.com',
    status: 'pending',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '84 Church Way',
      city: 'Bradford',
      postCode: 'BD1 9PB',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Banner Design',
        quantity: 1,
        price: 156.0,
        total: 156.0,
      },
      {
        name: 'Email Design',
        quantity: 2,
        price: 200.0,
        total: 400.0,
      },
    ],
    total: 556.0,
  },
  {
    id: 'FV2353',
    createdAt: '2021-11-05',
    paymentDue: '2021-11-12',
    description: 'Logo Re-design',
    paymentTerms: 7,
    clientName: 'Anita Wainwright',
    clientEmail: '',
    status: 'draft',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    items: [
      {
        name: 'Logo Re-design',
        quantity: 1,
        price: 3102.04,
        total: 3102.04,
      },
    ],
    total: 3102.04,
  },
]
function App() {
  const [invoices, setInvoices] = useState(MOCK_DATA)
  const [isNewInvoiceClicked, setIsNewInvoiceClicked] = useState(false)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [invoiceDetails, setInvoiceDetails] = useState(null)

  const addClickHandler = () => {
    setIsNewInvoiceClicked(true)
  }
  const backClickHandler = () => {
    setIsNewInvoiceClicked(false)
  }
  const onCardClickHandler = (e) => {
    console.log(e.target.textContent)
    const invoiceData = invoices.find((invoice) => invoice.id === e.target.textContent)
    console.log(invoiceData)
    setIsDetailOpen(true)
    setInvoiceDetails(invoiceData)
  }
  return (
    <div className="font-spartan bg-slate-100 h-screen">
      <Header />
      <main className="bg-slate-100 px-6">
        {isDetailOpen && invoiceDetails && <InvoiceDetails onClick={() => setIsDetailOpen(false)} {...invoiceDetails} />}
        {!isNewInvoiceClicked && !isDetailOpen && (
          <div className="flex items-center justify-between py-9">
            <div>
              <h2 className="text-2xl font-bold">Invoices</h2>
              {invoices.length === 0 ? <p className="text-[13px] text-slate-500 mt-[-4px]">No invoices</p> : <p className="text-[13px] text-slate-500 mt-[-4px]">{invoices.length === 1 ? '1 invoice' : `${invoices.length} invoices`}</p>}
            </div>
            <select>
              <option>Filter</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Draft</option>
            </select>
            <div>
              <button onClick={addClickHandler}>New</button>
            </div>
          </div>
        )}
        {invoices.length > 0 && !isNewInvoiceClicked && !isDetailOpen && invoices.map((invoice) => <InvoiceCard key={invoice.id} {...invoice} onClick={onCardClickHandler} />)}
        {isNewInvoiceClicked && <Form onClick={backClickHandler} />}
        <div>{invoices.length === 0 && !isNewInvoiceClicked && <Message />}</div>
      </main>
    </div>
  )
}

export default App
