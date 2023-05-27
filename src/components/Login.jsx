import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
  });

  return (
    <header className="login-container">
      <form onSubmit={formik.handleSubmit}>
        {/* username */}
        <div className="login-wrapper">
          <label htmlFor="username">
          Username:
            <input
              type="text"
              id="username"
              {...formik.getFieldProps("username")}
            />
          </label>
        </div>
        {/* password */}
        <div className="login-wrapper">
          <label htmlFor="password">
            Password:
            <input type="text" id="password" {...formik.getFieldProps('password')} />
          </label>
        </div>
        {/* stay signed in  */}
        <div className="login-wrapper">
            <label htmlFor="staySignedIn">
                <input type="checkbox" id="staySignedIn" {...formik.getFieldProps('staySignedIn')} />
                Stay Signed In
            </label>
        </div>
        {/* button */}
        <div className="login-btn" type='submit'>Login</div>
      </form>
    </header>
  );
}
