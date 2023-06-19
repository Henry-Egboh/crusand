import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AdvancedForm = () => {
  return (
    <main className="advanced-form-container">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          department: "",
          country: "",
          gender: "",
          acceptedTerms: false,
        }}
        // yup validation
        validationSchema={Yup.object({
          fullName: Yup.string()
            .min(5, "Minimum of 5 characters")
            .max(15, "Maximum of 15 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid Email Address")
            .required("Required"),
          department: Yup.string().required("Required"),
          country: Yup.string().required("Required"),
          gender: Yup.string().required("Required"),
          acceptedTerms: Yup.boolean()
            .oneOf([true], "Accept our terms and conditions")
            .required(),
        })}
        // onSubmit
        onSubmit={(values, helpers) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            helpers.resetForm();
            // setSubmitting(false);
          }, 400);
        }}
      >
        {({isSubmitting})=> (
        <Form>
          <section className="advanced-form-wrapper">
            <h1>Fill up the forms accordingly.</h1>
            <div className="advancedFormFullname">
              <label className="advancedFormLabel" htmlFor="fullName">
                Full Name:{" "}
              </label>
              <Field
                className="advancedFormField"
                name="fullName"
                type="text"
              />
              <span className="error-display">
                <ErrorMessage name="fullName" />
              </span>
            </div>

            <div className="advancedFormEmail">
              <label className="advancedFormLabel" htmlFor="email">
                Email:{" "}
              </label>
              <Field className="advancedFormField" name="email" type="email" />
              <span className="error-display">
                <ErrorMessage name="email" />
              </span>
            </div>

            <div className="advancedFormDepartment">
              <label className="advancedFormLabel" htmlFor="department">
                Department:{" "}
              </label>
              <Field
                name="department"
                as="select"
                className="advancedFormField"
              >
                <option value="">Select your department ...</option>
                <option value="resources">Human Resources</option>
                <option value="engineering">Engineering</option>
                <option value="ict">ICT</option>
                <option value="logistics">Logistics</option>
                <option value="mechanical">Mechanical</option>
              </Field>
              <span className="error-display">
                <ErrorMessage name="department" />
              </span>
            </div>
            {/* country */}
            <div className="advancedFormCountry">
              <label className="advancedFormLabel" htmlFor="country">
                Country:{" "}
              </label>
              <Field
                name="country"
                type="text"
                className="advancedFormField"
                list="countryList"
              />
              <datalist id="countryList">
                <option value="Canada"></option>
                <option value="Germany"></option>
                <option value="Armenia"></option>
                <option value="Italy"></option>
                <option value="Netherland"></option>
                <option value="Belgium"></option>
              </datalist>
              <span className="error-display">
                <ErrorMessage name="country" />
              </span>
            </div>
            {/* gender */}
            <fieldset className="advancedRadioWrapper">
              {/* male */}
              <div>
                <label>
                  <Field
                    name="gender"
                    className="advancedRadioBtn"
                    type="radio"
                    value="male"
                  />
                  Male
                </label>
                <span className="error-display">
                  <ErrorMessage name="gender" />
                </span>
              </div>
              {/* female */}
              <div>
                <label>
                  <Field
                    name="gender"
                    className="advancedRadioBtn"
                    type="radio"
                    value="female"
                  />
                  Female
                </label>
                <span className="error-display">
                  <ErrorMessage name="gender" />
                </span>
              </div>
            </fieldset>
            {/* terms of service */}
            <div className="acceptTermsWrapper">
              <label className="advancedCheckboxLabel" htmlFor="acceptTerms">
                <Field
                  className="acceptTerms"
                  name="acceptedTerms"
                  id="acceptTerms"
                  type="checkbox"
                />
                <span className="advancedCustomCheckbox"></span>
                Accept our Terms of Service as stated in our Policy.
              </label>
              <span className="error-display">
                <ErrorMessage name="acceptedTerms" />
              </span>
            </div>
            {/* submit button */}
            <button type="submit" className="advancedFormBtn" disabled={isSubmitting} >
              Submit
            </button>
          </section>
        </Form>
        )}
      </Formik>
    </main>
  );
};

export default AdvancedForm;
