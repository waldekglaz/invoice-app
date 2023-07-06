export default function NewInvoiceBtn({ onClick }) {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm pl-[6px] py-[6px] pr-[15px] text-center mb-2  flex items-center justify-between"
      onClick={onClick}
    >
      <span className="bg-white block text-blue-700 text-4xl rounded-full w-8 h-8 mr-2">
        +
      </span>
      New
    </button>
  );
}
