import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUP = () => {
  const { values, handleBlur, handleChange, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      // yup validation
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Enter a valid email address")
          .required("Required"),
      }),

      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <button className="signUpBtn">Sign Up</button>
      </form>
      <div style={{marginTop: '0.2rem'}}>
        {errors.email && touched.email ? (
          <div className="error-display">{errors.email}</div>
        ) : null}
      </div>
    </header>
  );
};
export default SignUP;
