interface FilterProps {
  filter: string;
  onChange: Function;
}
import { filterOptions } from "../constants";
export default function Filter({ filter, onChange }: FilterProps) {
  return (
    <select
      className=" py-2 bg-slate-100 capitalize"
      value={filter}
      onChange={onChange}
    >
      {filterOptions.map((option, index) => (
        <option key={`${option}-${index}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
