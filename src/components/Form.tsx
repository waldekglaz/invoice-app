import { MouseEventHandler, useState } from "react";
import GoBackBtn from "./GoBackBtn";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { invoiceNumberGenerator, todayDateGenerator } from "../utils/utils";
import trash from "../assets/icon-delete.svg";
interface FormProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  onSave: any;
}

export default function Form({ onClick, onSave }: FormProps) {
  const { register, handleSubmit } = useForm();
  const [items, setItems] = useState([{ name: "", quantity: "", price: "" }]);

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

    const totalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

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
      items: items,
      total: totalPrice,
    };
    onSave(invoiceData);
    console.log(createdAt);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeItem = [...items];
    onChangeItem[i][name] = value;
    setItems(onChangeItem);
  };

  const handleAdd = () => {
    setItems([...items, { name: "", quantity: "", price: "" }]);
  };

  const handleDelete = (i) => {
    const deleteItem = [...items];
    deleteItem.splice(i, 1);
    setItems(deleteItem);
  };

  return (
    <div>
      <GoBackBtn onClick={onClick} />
      <h2>New invoice</h2>
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
        <div className="flex justify-between gap-6">
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
            text="Post Code"
          />
        </div>

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
        {items.map((item, i) => (
          <div>
            <label>Item</label>
            <input
              type="text"
              name="name"
              value={item.name}
              onChange={(e) => handleChange(e, i)}
            />
            <label>Qty</label>
            <input
              type="text"
              name="quantity"
              value={item.quantity}
              onChange={(e) => handleChange(e, i)}
            />
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={item.price}
              onChange={(e) => handleChange(e, i)}
            />
            <button type="button" onClick={() => handleDelete(i)}>
              <img src={trash} alt="remove icon" />
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAdd}>
          Add
        </button>
        <button type="submit" className="bg-blue-500">
          Save & Send
        </button>
      </form>
      Bill To
    </div>
  );
}
