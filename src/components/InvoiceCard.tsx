import { MouseEventHandler } from 'react'
import StatusDisplay from './StatusDisplay'
import Card from './Card'
import { dateGenerator } from '../utils/utils'
import {Link} from "react-router-dom"
interface InvoiceCardProps {
  id: string
  clientName: string
  paymentDue: string
  total: number
  status: string
  onClick: MouseEventHandler
}

export default function InvoiceCard({ id, clientName, paymentDue, total, status, onClick }: InvoiceCardProps) {
  return (
    <Card>
      <div className="flex justify-between mb-6">
        <Link to={`/invoices/${id}`} className="text-violet-300">
          <span>
            #
            <span onClick={onClick} className="font-bold cursor-pointer text-black hover:text-violet-700">
              {id}
            </span>
          </span>
        </Link>

        <span className="text-violet-300">{clientName}</span>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="block text-violet-300">Due {dateGenerator(paymentDue)}</span>
          <span className="font-bold">£ {total}</span>
        </div>
        <StatusDisplay statusType={status} />
      </div>
    </Card>
  )
}
