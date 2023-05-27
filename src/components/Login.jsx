import { useFormik } from "formik";
import * as Yup from "yup";

const passRules =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/;

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
// yup validation
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Required")
        .min(6, "Min of 6 characters")
        .max(10, "Max of 10 characters"),
      password: Yup.string()
        .required("Required")
        .matches(passRules, { message: "Invalid password" }),
    }),

    onSubmit: async (values) => {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  });
  console.log(formik.errors);
  return (
    <header className="login-container">
      <h1>Login In Now</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* username */}
        <div className="login-wrapper-container">
          <div className="login-wrapper">
            <div className="login-label">
              <label htmlFor="username">Username:</label>
            </div>
            <div className="login-input">
              <input
                type="text"
                id="username"
                {...formik.getFieldProps("username")}
              />
            </div>
          </div>
          {formik.errors.username && formik.touched.username ? (
            <div className="error-display">{formik.errors.username}</div>
          ) : null}
        </div>

        {/* password */}
        <div className="login-wrapper-container">
          <div className="login-wrapper">
            <div className="login-label">
              <label htmlFor="password">Password:</label>
            </div>
            <div className="login-input">
              <input
                type="password"
                id="password"
                {...formik.getFieldProps("password")}
              />
            </div>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <div className="error-display">{formik.errors.password}</div>
          ) : null}
        </div>

        {/* stay signed in  */}
        <div className="login-wrapper staySignedIn-wrapper">
          <label htmlFor="staySignedIn">
            <input
              type="checkbox"
              id="staySignedIn"
              className="login-checkbox"
              {...formik.getFieldProps("staySignedIn")}
            />
            Stay Signed In
          </label>
        </div>
        {/* button */}
        <button
          className="login-btn"
          type="submit"
          disabled={formik.isSubmitting}
        >
          Login
        </button>
      </form>
    </header>
  );
}
