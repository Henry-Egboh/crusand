import { useFormik } from "formik";
import { schema } from "../utilities/schema";
import { useState } from "react";

// function that fires when handleSubmit runs
const onSubmit = () => {
  console.log('Submitted')
}

const BasicForm = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      username: "",
      email: "",
      age: "",
      city: "",
      country: "",
      password: "",
      confirmPassword: "",
    },

    // validation using yup
    validationSchema: schema,
    onSubmit,
  });
  // console.log(values);
  console.log(errors);

  // set password state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // toggle password function
  function togglePassword() {
    setShowPassword(!showPassword);
  }
  // toggle confirm password function
  function toggleConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  return (
    <main>
      <section className="form">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <h1 className="h1">Fill Out the Form Correctly</h1>
            {/* username */}
            <section>
              <div>
                <label htmlFor="username">Username: </label>
              </div>
              <div>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  values={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className= {errors.username && touched.username ? 'form-errors input' : 'input'}
                />
              </div>
            </section>

            {/* email */}
            <section>
              <div>
                <label htmlFor="email">E-mail: </label>
              </div>
              <div>
                <input
                  id="email"
                  className= {errors.email && touched.email ? 'form-errors input' : 'input'}
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  values={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </section>

            {/* age */}
            <section>
              <div>
                <label htmlFor="age">Age: </label>
              </div>
              <div>
                <input
                  id="age"
                  className= {errors.age && touched.age ? 'form-errors input' : 'input'}
                  type="number"
                  placeholder="Enter your age"
                  name="age"
                  values={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </section>

            {/* city */}
            <section>
              <div>
                <label htmlFor="city">City: </label>
              </div>
              <div>
                <select
                  className= {errors.city && touched.city ? 'form-errors input' : 'input'}
                  name="city"
                  values={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">...Select your City</option>
                  <option value="bahamas">Bahamas</option>
                  <option value="orlando">Orlando</option>
                  <option value="texas">Texas</option>
                  <option value="california">California</option>
                  <option value="new jersey">New Jersey</option>
                  <option value="brooklyn">Brooklyn</option>
                  <option value="alabama">Alabama</option>
                </select>
              </div>
            </section>

            {/* country */}
            <section>
              <div>
                <label htmlFor="country">Country: </label>
              </div>
              <div>
                <input
                  id="country"
                  className= {errors.country && touched.country ? 'form-errors input' : 'input'}
                  type="text"
                  placeholder="Choose your Country"
                  name="country"
                  list="country-list"
                  values={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <datalist id="country-list">
                <option value="USA"></option>
                <option value="China"></option>
                <option value="Armenia"></option>
                <option value="United Kingdom"></option>
                <option value="Canada"></option>
                <option value="Berlin"></option>
                <option value="Haiti"></option>
                <option value="Netherland"></option>
              </datalist>
            </section>

            {/* password */}
            <section>
              <div>
                <label htmlFor="password">Password: </label>
              </div>
              <div>
                <input
                  id="password"
                  className= {errors.password && touched.password ? 'form-errors input' : 'input'}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                  values={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {/* toggle checkbox */}
              <div style={{ marginBottom: "1rem" }}>
                <input type="checkbox" onClick={togglePassword} id="toggle" />
                <label
                  style={{
                    marginLeft: "1.5rem",
                    fontWeight: "200",
                    fontSize: "12px",
                  }}
                  htmlFor="toggle"
                >
                  {" "}
                  <em>Click to show password</em>{" "}
                </label>
              </div>
            </section>

            {/* confirm password */}
            <section>
              <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
              </div>
              <div>
                <input
                  id="confirmPassword"
                  className= {errors.confirmPassword && touched.confirmPassword ? 'form-errors input' : 'input'}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  values={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {/* toggle checkbox */}
              <div style={{ marginBottom: "1rem" }}>
                <input
                  type="checkbox"
                  onClick={toggleConfirmPassword}
                  id="toggleConfirm"
                />
                <label
                  style={{
                    marginLeft: "1.5rem",
                    fontWeight: "200",
                    fontSize: "12px",
                  }}
                  htmlFor="toggleConfirm"
                >
                  {" "}
                  <em>Click to show password</em>{" "}
                </label>
              </div>
            </section>
            {/* radio button */}
            <section>
              <fieldset className="radio-fieldset">
                <div>
                  <input className="space-radio" type="radio" name="radio" />
                  <label>Male</label>
                </div>

                <div>
                  <input className="space-radio" type="radio" name="radio" />
                  <label>Female</label>
                </div>
              </fieldset>
            </section>

            {/* checkbox */}
            <section className="checkbox">
              <input id="checkbox" type="checkbox" name="checkbox" />
              <label htmlFor="checkbox" style={{ marginLeft: "4rem" }}>
                <code>
                  I acknowledge that I have read and agreed to the terms of
                  service.{" "}
                </code>
              </label>
            </section>

            {/* button */}
            <div className="btn-div">
              <button type="button" className="button">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default BasicForm;
