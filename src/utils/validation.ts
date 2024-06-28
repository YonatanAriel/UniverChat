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
    required: "password is required",
    minLength: {
      value: 6,
      message: "Password must contain at least 6 characters",
    },
    maxLength: {
      value: 50,
      message: "Password can't contain more then 50 characters",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
      message:
        "The password must contain least one uppercase letter, one lowercase letter,\n one number and one special character",
    },
  },
};
