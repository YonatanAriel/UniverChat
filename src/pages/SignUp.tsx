import { FieldErrors, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { formValidation } from "../utils/validation";
import Loading from "../components/ui/Loading";

type FormValues = {
  username: string;
  photo: FileList;
  password: string;
};
function SignUp() {
  //email? with google?

  const form = useForm<FormValues>({ mode: "onTouched" });
  const { register, control, handleSubmit, formState } = form;
  const { errors, isDirty, isValid, isSubmitting } = formState;
  const buttonDisabled = !isDirty || !isValid || isSubmitting;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log(errors);
  };
  return (
    <div className="flex items-center justify-center w-full ">
      {isSubmitting && <Loading />}
      <img
        className="fixed -z-10 -top-4 bg-transparent -right-4 -rotate-[120deg]  max-h-32 md:max-h-none h-2/5"
        src="\rose7.png"
        alt=""
      />
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={`flex flex-col gap-3 px-6 py-11  border-2 w-96 mx-2  border-black rounded-md xl:w-[30%] mt-16 mb-20 bg-gradient-to-b from-rose-50 to-emerald-50 ${
          isSubmitting && "blur-md"
        }`}
        noValidate
      >
        <h1 className="mt-3 mb-8 ml-auto mr-auto text-5xl font-bold dark:text-white">
          Sign up
        </h1>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="username"
            className="block mb-1 text-sm font-medium text-black"
          >
            User name
          </label>
          <input
            className="text-input"
            type="text"
            id="username"
            {...register("username", formValidation.userName)}
          />
          <p className="text-rose-400">{errors.username?.message}</p>
        </div>

        <div className="flex flex-col gap-1 ">
          <label
            htmlFor="password"
            className="block mb-1 text-sm font-medium text-black"
          >
            Password
          </label>
          <input
            className="text-input"
            type="password"
            id="password"
            {...register("password", formValidation.password)}
          />
          <p className="text-rose-400">{errors.password?.message}</p>
        </div>

        <div className="flex flex-col gap-1 ">
          <label
            htmlFor="photo"
            className="block mb-1 text-sm font-medium text-black"
          >
            Profile photo
          </label>
          <input
            type="file"
            id="photo"
            {...register("photo")}
            className="block w-full text-sm bg-white border-2 border-black rounded-lg focus:z-10 focus:border-black focus:ring-black-500 disabled:opacity-50 disabled:pointer-events-none file:border-0 file:border-black file:border-r-2 file:me-4 file:py-2.5 file:px-2 "
          />
          <p className="text-red-500">{errors.photo?.message}</p>
        </div>

        <button
          type="submit"
          disabled={buttonDisabled}
          className={`${
            !buttonDisabled
              ? "hover:scale-110 ease-in-out transition-all duration-400 hover:bg-black hover:text-white"
              : ""
          } block text-black bg-white font-semibold mt-4  border-black border-2 focus:outline-none  focus:ring-4 focus:ring-gray-100  rounded-lg text-sm px-5 py-2.5  mb-2 mx-auto  `}
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default SignUp;
