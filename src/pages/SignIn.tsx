import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldErrors, useForm } from "react-hook-form";
import { ContextValue } from "../types/contextValue";
import { Context } from "../context/ContextProvider";
import Loading from "../components/ui/Loading";
import { formValidation } from "../utils/validation";
import api from "../services/baseAxiosFunction";

type SignInFormValues = {
  userName: string;
  password: string;
};

type ApiResponse = {
  error?: string;
  token?: string;
  userId?: number;
};

function SignIn() {
  const { setToken, setUserId } = useContext(Context) as ContextValue;
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<SignInFormValues>({ mode: "onTouched" });
  const { register, handleSubmit, formState, setFocus, setError } = form;
  const { errors, isDirty, isValid, isSubmitting } = formState;
  const buttonDisabled = !isDirty || !isValid || isSubmitting;

  useEffect(() => {
    setFocus("userName");
  }, [setFocus]);

  const onSubmit = (data: SignInFormValues) => {
    setShowLoading(true);
    signIn(data);
  };

  async function signIn(data: SignInFormValues) {
    const response = await api.post<ApiResponse>("/users/sign-in", data);
    if (response.error) handleServerError(response);
    if (response.token && response.userId) handleSuccess(response);
  }

  function handleSuccess(response: ApiResponse) {
    setToken(String(response.token));
    if (response.userId) setUserId(response.userId);
    setShowLoading(false);
    navigate("/");
  }

  function handleServerError(response: ApiResponse) {
    console.log(response.error);
    setError("userName", { type: "custom", message: response.error });
    setShowLoading(false);
  }

  const onError = (errors: FieldErrors<SignInFormValues>) => {
    console.log(errors);
  };

  return (
    <>
      <div
        className={`flex items-center justify-center w-full  ${
          (isSubmitting || showLoading) && "h-full"
        }`}
      >
        <img
          className="fixed -z-10 -top-6 bg-transparent -right-4 -rotate-[120deg] hidden xs:block  h-2/5 max-h-32  md:max-h-none "
          src="\rose3.png"
          alt=""
        />
        {isSubmitting || showLoading ? (
          <Loading />
        ) : (
          <form
            method="post"
            encType={"multipart/form-data"}
            onSubmit={handleSubmit(onSubmit, onError)}
            className={`flex flex-col gap-3 px-6 py-11  border-2 w-96 mx-2  border-black rounded-md xl:w-[30%] mt-16 mb-20 bg-gradient-to-b from-emerald-50 to-rose-50 
            
            `}
            noValidate
          >
            <h1 className="mt-3 mb-8 ml-auto mr-auto text-5xl font-bold ">
              Sign in
            </h1>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="userName"
                className="block mb-1 text-sm font-medium text-black"
              >
                User name
              </label>
              <input
                className="text-input"
                type="text"
                id="userName"
                {...register("userName", formValidation.userName)}
              />
              <p className="text-rose-400">{errors.userName?.message}</p>
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
            </div>{" "}
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
        )}
      </div>
    </>
  );
}

export default SignIn;
