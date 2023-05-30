import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const passRules =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/;

const schema = Yup.object({
  username: Yup.string()
    .max(10, "Must not exceed 10 characters")
    .lowercase("All small letters")
    .required("Required")
    .min(5, "Minimum of 5 characters"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      passRules,
      "Use Upper case, lower case, a char and max of 15 char"
    ),
});

const onSubmit = async (values) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

export default function NewsLetterSignUp() {
  const { handleBlur, handleChange, handleSubmit, errors, values, touched, isSubmitting } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        checkbox: "",
      },

      validationSchema: schema,
      onSubmit,
    });

  console.log(errors);

  return (
    <main className="newsletter-container">
      <h1>A Minute Away from Juicy Information</h1>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="newsletter-wrapper">
          <div className="newsletter-label">
            <label htmlFor="username">Username: </label>
          </div>
          <div className="newsletter-input">
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
          </div>
        </div>
        {errors.username && touched.username ? (<div className="error-display">{errors.username}</div>) : null}

        {/* email */}
        <div className="newsletter-wrapper">
          <div className="newsletter-label">
            <label htmlFor="email">Email: </label>
          </div>
          <div className="newsletter-input">
            <input
              id="email"
              type="email"
              placeholder="Enter your Email address"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
        </div>
        {errors.email && touched.email ? (<div className="error-display">{errors.email}</div>) : null}

        {/* password */}
        <div className="newsletter-wrapper">
          <div className="newsletter-label">
            <label htmlFor="password">Password: </label>
          </div>
          <div className="newsletter-input">
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </div>
        </div>
        {errors.password && touched.password ? (<div className="error-display">{errors.password}</div>) : null}

        {/* agree to our weekly publication */}
        <fieldset className="newsletter-checkbox">
          <div>
            <input type="checkbox" name="checkbox" />
          </div>
          <div>
            <label htmlFor="checkbox">
              Get our weekly newsletter on your email
            </label>
          </div>
        </fieldset>
        <button className="newsletter-btn" type="submit" disabled={isSubmitting}>
          Sign Up
        </button>
      </form>
    </main>
  );
}
