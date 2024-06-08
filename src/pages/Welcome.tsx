import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [error, setError] = useState<null | string>(null);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current?.value.trim()) {
      setError("Please enter your name");
      return;
    }
    navigate("/");
  };

  return (
    <>
      <form
        className="movingBackground mx-2  bg-gradient-to-r from-rose-100 to-teal-100 shadow-xl border-black border-2 backdrop-blur-3xl flex flex-col  items-center gap-10 w-96  px-5 py-11 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className=" text-5xl ml-auto mr-auto font-bold dark:text-white">
          Welcome!
        </h1>
        <div className="flex flex-col items-center gap-4 w-9/12">
          <label
            htmlFor="name"
            className="text-lg  font-medium dark:text-white"
          >
            What is your name?
          </label>
          <input
            type="text"
            ref={inputRef}
            className={` border-black bg-gray-50   border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            name="name"
            placeholder={"Name"}
          />
        </div>
        {error && <h4 className="-my-6 text-red-500">{error}</h4>}
        <button
          type="submit"
          className="text-black bg-white font-semibold hover:scale-110 ease-in-out transition-all  duration-400 border-black border-2 focus:outline-none hover:bg-black hover:text-white focus:ring-4 focus:ring-gray-100  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Let me in
        </button>
      </form>
    </>
  );
}

export default Welcome;
