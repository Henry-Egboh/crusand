import * as yup from "yup";

// min of 5 xters and max of 15 xters, one lower case, uppercase, special xters
const passRules =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/;
// const ageRules = /^[1-9][0-9]?$|^100$/;
// const ageRules = /^0*(?:[1-9][0-9]?|100)$/;

export const schema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Minimum of 5 characters")
    .max(15, "Maximum of 15 characters")
    .required("Required field"),
  email: yup.string().email("Enter a valid email").required("Required field"),
  age: yup.number().required("Required field").positive().integer(),
  city: yup.string().required("Required field"),
  country: yup.string().required("Required field"),
  password: yup
    .string()
    .matches(passRules, {
      message:
        "Minimum of 5 characters, maximum of 15 characters, a lower case, uppercase and a special character",
    })
    .required("Required field"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Password must match"),
  agree: yup.bool().oneOf([true], 'Agree to the terms of service'),
});
