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
