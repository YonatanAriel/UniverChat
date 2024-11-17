export const formValidation = {
  userName: {
    required: "User name is required",
    minLength: {
      value: 3,
      message: "User name must contain at least 3 characters",
    },
    maxLength: {
      value: 10,
      message: "User name can't contain more then 10 characters",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must contain at least 6 characters",
    },
    maxLength: {
      value: 20,
      message: "Password can't contain more then 20 characters",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
      message:
        "The password must contain least one uppercase letter, one lowercase letter,\n one number and one special character",
    },
  },
};

export const isPhotoFile = (file: FileList): boolean | string => {
  if (file.length === 0) return "No file chosen";

  const fileName = file[0].name;
  const allowedExtensions = ["jpg", "png", "gif", "jpeg"];
  const fileExtension = fileName.split(".").pop()?.toLowerCase();

  return allowedExtensions.includes(fileExtension || "");
};
