
import GoBackBtn from "./GoBackBtn";
import Card from "./Card";
import StatusDisplay from "./StatusDisplay";
import { dateGenerator } from "../utils/utils";
import ActionBtn from "./ActionBtn";
import { useParams } from "react-router-dom";


interface InvoiceDetailsProps {
  status: string;
  id: string;
  description: string;
}

export default function InvoiceDetails( props
  // {
  // onClick,
  // status,
  
  // description,
  // senderAddress,
  // createdAt,
  // paymentDue,
  // clientName,
  // clientEmail,
  // items,
  // total,
  // clientAddress,
  // onDelete,
  // onEdit

// }: InvoiceDetailsProps
) {
  const params = useParams()
  console.log(params.invoiceId)
  console.log(props)
  return (
    <>
      {/* <div className="px-6 py-[33px]">
        <GoBackBtn onClick={onClick} />
        <Card className="">
          <div className="flex justify-between items-center">
            Status <StatusDisplay statusType={status} />
          </div>
        </Card>
        <Card className="text-slate-500 text-sm">
          <h2>
            #<span className="text-black font-bold text-base">{id}</span>
          </h2>
          <p className="mb-8">{description}</p>
          <address className="not-italic mb-8">
            {senderAddress.street}
            <br />
            {senderAddress.city}
            <br />
            {senderAddress.postCode}
            <br />
            {senderAddress.country}
          </address>
          <div className="flex">
            <div className="mr-[62px]">
              <div className="mb-[31px]">
                <p className="mb-3">Invoice Date</p>
                <p className="text-black font-bold text-base">
                  {dateGenerator(createdAt)}
                </p>
              </div>
              <div>
                <p className="mb-3">Payment Due</p>
                <p className="text-black font-bold text-base">
                  {dateGenerator(paymentDue)}
                </p>
              </div>
            </div>
            <div>
              <p className="mb-3">Bill To</p>
              <h2 className="text-black font-bold text-base mb-[7px]">
                {clientName}
              </h2>
              <address className="not-italic mb-8">
                {clientAddress.street}
                <br />
                {clientAddress.city}
                <br />
                {clientAddress.postCode}
                <br />
                {clientAddress.country}
              </address>
            </div>
          </div>
          <div className="mb-[38px]">
            <p className="mb-[13px]">Sent to</p>
            <a
              className="text-black font-bold text-base mb-[7px]"
              href={`mailto:${clientEmail}`}
            >
              {clientEmail}
            </a>
          </div>
          <div>
            <ul>
              {items.map((item) => (
                <li key={item.name}>
                  <div className="bg-blue-50 p-6 flex justify-between items-center rounded-t-md">
                    <div className="flex justify-between items-center w-full">
                      <div>
                        <p className="text-black font-bold text-base mb-[7px]">
                          {item.name}
                        </p>
                        <p>
                          {item.quantity} x {item.price}
                        </p>
                      </div>
                      <p className="text-black font-bold text-base">
                        {" "}
                        £ {item.quantity * item.price}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center px-6 py-8 bg-slate-700 text-white rounded-b-md">
              Grand Total <span className="text-2xl">£ {total}</span>
            </div>
          </div>
        </Card>
      </div> */}
      {/* <div className="flex gap-2 bg-white px-6 py-5 absolute">
        <ActionBtn btnText="edit" />
        <ActionBtn btnText="delete" onClick={() => onDelete(id)} />
        <ActionBtn btnText="mark as paid" onClick={()=> onEdit()}/>
      </div> */}
      {/* <p>{id}</p> */}
    </>
  );
}
