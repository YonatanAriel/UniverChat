import { useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  selectID: string;
  children: React.ReactNode;
  labelTxt: string;
  defaultValue?: string;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  labelStyle?: string;
  selectStyle?: string;
};

function SelectInput({
  selectID,
  labelTxt,
  handleChange,
  defaultValue,
  labelStyle = "",
  selectStyle = "",
  children,
}: Props) {
  const [selected, setSelected] = useState<string | undefined>(defaultValue);
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    handleChange && handleChange(e);
  };
  return (
    <>
      <label
        htmlFor={selectID}
        className={twMerge(
          "block mb-1 text-sm font-medium text-black ",
          labelStyle
        )}
      >
        {labelTxt}
      </label>
      <select
        id={selectID}
        value={selected}
        className={twMerge(
          " border-black border-2 text-black text-sm rounded-lg block w-full p-2.5 ",
          selectStyle
        )}
        onChange={onChange}
      >
        {children}
      </select>
    </>
  );
}
export default SelectInput;
