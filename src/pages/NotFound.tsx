import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="inset-0 flex items-center justify-center w-full h-full ">
      <div className="flex flex-col justify-center w-full gap-4 px-6 m-auto mx-2 mt-20 bg-white border-2 border-black rounded-md shadow-xl xs:w-11/12 py-11 sm:w-8/12 lg:w-7/12 2xl:5/12 p-">
        <h1 className="text-xl font-bold sm:text-3xl">
          Looks like you've found the doorway to the great nothing
        </h1>
        <p className="text-[15px] sm:text-[17px]">
          Sorry about that! <br /> Please visit our{" "}
          <button
            className="sm:text-lg text-[17px] font-semibold text-rose-500 hover:scale-95  ease-in duration-75"
            onClick={() => navigate("/")}
          >
            Home page
          </button>{" "}
          to get where you need to go, or just{" "}
          <button
            className="sm:text-lg text-[17px] font-semibold text-emerald-500 hover:scale-95 duration-75 ease-in"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
          .
        </p>
      </div>
    </div>
  );
}

export default NotFound;
