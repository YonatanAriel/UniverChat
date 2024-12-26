import { FieldErrors, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { formValidation } from "../utils/validation";
import Loading from "../components/ui/Loading";
import { useContext, useEffect, useState } from "react";
import api from "../services/baseAxiosFunction";
import { getUniqueId } from "../utils/getUniqueId";
import { SignUpFormValues } from "../types/SignUpFormValues";
import { createFormData } from "../utils/createFormData";
import { Context } from "../context/ContextProvider";
import { ContextValue } from "../types/contextValue";
import { useNavigate } from "react-router-dom";
import SelectInput from "../components/ui/selectInput";

type ApiResponse = {
  error?: string;
  token?: string;
  userId?: number;
};

function SignUp() {
  //email? with google?
  const { setToken, setUserId } = useContext(Context) as ContextValue;
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<SignUpFormValues>({ mode: "onTouched" });
  const { register, control, handleSubmit, formState, setFocus, setError } =
    form;
  const { errors, isDirty, isValid, isSubmitting } = formState;
  const buttonDisabled = !isDirty || !isValid || isSubmitting;

  useEffect(() => {
    setFocus("userName");
  }, [setFocus]);

  const onSubmit = (data: SignUpFormValues) => {
    setShowLoading(true);
    const uniqueId = getUniqueId();
    data.clientId = uniqueId;
    const formData = createFormData(data);
    signUp(formData);
  };

  async function signUp(formData: FormData) {
    const response = await api.post<ApiResponse>("/users/sign-up", formData, {
      "Content-Type": "multipart/form-data",
    });
    if (response?.error) handleServerError(response);
    if (response?.token && response?.userId) handleSuccess(response);
  }

  function handleSuccess(response: ApiResponse) {
    console.log(response.token);
    setToken(String(response.token));
    setUserId(Number(response.userId));
    setShowLoading(false);
    navigate("/");
  }

  function handleServerError(response: ApiResponse) {
    console.log(response.error);
    setError("userName", { type: "custom", message: response.error });
    setShowLoading(false);
  }

  const onError = (errors: FieldErrors<SignUpFormValues>) => {
    console.log(errors);
  };

  return (
    <div
      className={`flex items-center justify-center w-full  ${
        (isSubmitting || showLoading) && "h-full"
      }`}
    >
      <img
        className="fixed -z-10 -top-6 bg-transparent hidden xs:block -right-4 -rotate-[120deg]  h-2/5 max-h-32  md:max-h-none "
        src="\rose7.png"
        alt=""
      />
      {isSubmitting || showLoading ? (
        <Loading />
      ) : (
        <form
          method="post"
          encType={"multipart/form-data"}
          onSubmit={handleSubmit(onSubmit, onError)}
          className={`flex flex-col gap-3 px-6 py-11  border-2 w-96 mx-2  border-black rounded-md xl:w-[30%] mt-16 mb-20 bg-gradient-to-b from-rose-50 to-emerald-50 ${
            (isSubmitting || showLoading) && "blur-md"
          }`}
          noValidate
        >
          <h1 className="mt-3 mb-8 ml-auto mr-auto text-5xl font-bold ">
            Sign up
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
          </div>

          <div className="flex flex-col gap-1 ">
            <label
              htmlFor="photo"
              className="block mb-1 text-sm font-medium text-black "
            >
              Profile photo
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              {...register("photo")}
              className="block w-full text-sm  bg-white border-2 border-black rounded-lg focus:z-10 focus:border-black focus:ring-black-500 disabled:opacity-50 disabled:pointer-events-none file:border-0 file:border-black file:border-r-2 file:me-4 file:py-2.5 file:px-2 "
            />
            <p className="text-red-500">{errors.photo?.message}</p>
          </div>
          <SelectInput selectID="languages" labelTxt="what is your language?">
            <option>ff</option>
          </SelectInput>
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
      <DevTool control={control} />
    </div>
  );
}

export default SignUp;
