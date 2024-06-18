import { forwardRef } from "react";

type WelcomeFormType = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string | null;
};

const WelcomeForm = forwardRef<HTMLInputElement, WelcomeFormType>(
  ({ handleSubmit, error }, ref) => {
    return (
      <form
        className="flex flex-col items-center gap-10 px-5 mx-2 mb-16 border-2 border-black rounded-lg shadow-xl movingBackground bg-gradient-to-r from-rose-100 to-teal-100 backdrop-blur-3xl w-96 py-11"
        onSubmit={handleSubmit}
      >
        <h1 className="ml-auto mr-auto text-5xl font-bold dark:text-white">
          Welcome!
        </h1>
        <div className="flex flex-col items-center w-9/12 gap-4">
          <label htmlFor="name" className="text-lg font-medium dark:text-white">
            What is your name?
          </label>
          <input
            type="text"
            ref={ref}
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
    );
  }
);

export default WelcomeForm;
