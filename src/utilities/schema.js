import * as yup from "yup";

// min of 5 xters and max of 15 xters, one lower case, uppercase, special xters
const passRules =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/;
// const ageRules = /^[1-9][0-9]?$|^100$/;
// const ageRules = /^0*(?:[1-9][0-9]?|100)$/;

export const schema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Minimum of 5 chars")
    .max(15, "Max of 15 characters")
    .required("Required field"),
  email: yup.string().email("Enter a valid email").required("Required field"),
  password: yup
    .string()
    .matches(passRules, {
      message:
        "min of 5 xters and max of 15 xters, one lower case, uppercase and special xter",
    })
    .required("Required field"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  age: yup
    .number()
    .required("Required field")
    .positive()
    .integer(),
  city: yup.string().required("Required field"),
  country: yup.string().required("Required field"),
});
