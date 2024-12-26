type Props = {
  selectID: string;
  children: React.ReactNode;
  labelTxt: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function SelectInput({ selectID, labelTxt, onChange, children }: Props) {
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
        className="bg-gray-50  border-black border-2 text-black text-sm rounded-lg block w-full p-2.5 "
        onChange={onChange}
      >
        {children}
      </select>
    </>
  );
}
export default SelectInput;
