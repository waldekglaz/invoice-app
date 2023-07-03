import { MouseEventHandler, useState } from "react";
import GoBackBtn from "./GoBackBtn";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { invoiceNumberGenerator, todayDateGenerator } from "../utils/utils";
interface FormProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  onSave: any;
}

export default function Form({ onClick, onSave }: FormProps) {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({
    clientEmail,
    clientName,
    street,
    clientCity,
    clientPostcode,
    country,
    createdAt,
    paymentTerms,
    description,
  }) => {
    const currentDate = new Date(createdAt);
    currentDate.setDate(currentDate.getDate() + Number(paymentTerms));
    const invoiceData = {
      id: invoiceNumberGenerator(),
      createdAt: createdAt,
      paymentDue: currentDate,
      description,
      paymentTerms: Number(paymentTerms),
      clientName: clientName,
      clientEmail: clientEmail,
      status: "draft",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: street,
        city: clientCity,
        postCode: clientPostcode,
        country: country,
      },
      items: [
        {
          name: "Logo Re-design",
          quantity: 1,
          price: 3102.04,
          total: 3102.04,
        },
      ],
      total: 5445,
    };
    onSave(invoiceData);
    console.log(createdAt);
  };

  return (
    <div>
      <GoBackBtn onClick={onClick} />
      <h2>New invoice</h2>
      Bill From
      {/* <form onSubmit={(e) => onSave(e, invoiceData)}> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="clientName"
          type="text"
          register={register}
          defaultValue=""
          text="Client's name"
        />
        <InputField
          name="clientEmail"
          type="email"
          register={register}
          defaultValue=""
          text="Client's email"
        />
        <InputField
          name="street"
          type="text"
          register={register}
          defaultValue=""
          text="Street Address"
        />
        <InputField
          name="clientCity"
          type="text"
          register={register}
          defaultValue=""
          text="City"
        />
        <InputField
          name="clientPostcode"
          type="text"
          register={register}
          defaultValue=""
          text="City"
        />
        <InputField
          name="country"
          type="text"
          register={register}
          defaultValue=""
          text="Country"
        />
        <InputField
          name="createdAt"
          type="date"
          register={register}
          defaultValue=""
          text=""
        />
        <div>
          <label htmlFor={"paymentTerms"}></label>
          <select {...register("paymentTerms")}>
            <option value="1">Net 1 day</option>
            <option value="7">Net 7 days</option>
            <option value="14">Net 14 days</option>
            <option value="30">Net 30 days</option>
          </select>
        </div>
        <InputField
          name="description"
          type="text"
          register={register}
          defaultValue=""
          text="Project Description"
        />
        <p>Item List</p>
        <button type="submit" className="bg-blue-500">
          Save & Send
        </button>
      </form>
      Bill To
    </div>
  );
}
