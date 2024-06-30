import { SignUpFormValues } from "../types/SignUpFormValues";

export const createFormData = (data: SignUpFormValues): FormData => {
  const formData = new FormData();
  formData.append("userName", data.userName);
  formData.append("password", data.password);
  if (data.clientId) formData.append("clientId", data.clientId);
  if (data.photo) {
    formData.append("photo", data.photo[0]);
  }
  return formData;
};
// for (const name in data) {
//   if (!Object.prototype.hasOwnProperty.call(data, name)) continue;

//   const value = data[name as keyof SignUpFormValues];

//   if (Array.isArray(value)) {
//     formData.append(name, JSON.stringify(value));
//   } else {
//     formData.append(name, value as string);
//   }
// }

// if (data?.photo instanceof File) {
//   formData.append("photo", data.photo);
// }
// console.log(formData.get("userName"));
