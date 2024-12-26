import { useState } from "react";

type Props = {
  selectID: string;
  children: React.ReactNode;
  labelTxt: string;
  defaultValue?: string;
  handleChange?: () => void;
};

function SelectInput({
  selectID,
  labelTxt,
  handleChange,
  defaultValue,
  children,
}: Props) {
  const [selected, setSelected] = useState<string | undefined>(defaultValue);
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    handleChange && handleChange();
  };
  return (
    <>
      <label
        htmlFor={selectID}
        className="block mb-2 text-sm font-medium text-black "
      >
        {labelTxt}
      </label>
      <select
        id={selectID}
        value={selected}
        className="bg-gray-50  border-black border-2 text-black text-sm rounded-lg block w-full p-2.5 "
        onChange={onChange}
      >
        {children}
      </select>
    </>
  );
}
export default SelectInput;
