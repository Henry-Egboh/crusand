import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AdvancedForm = () => {
  return (
    <main className="advanced-form-container">
      <Formik
        initialValues={{ fullName: "", email: "", department: "", country: "" }}
        // yup validation
        validationSchema={Yup.object({
          fullName: Yup.string()
            .min(5, 'Minimum of 5 characters')
            .max(15, "Maximum of 15 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid Email Address")
            .required("Required"),
          department: Yup.string()
            .required("Required"),
          country: Yup.string()
            .required("Required"),
        })}
        // onSubmit
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <section className="advanced-form-wrapper">
            <div className="advancedFormFullname">
              <label className="advancedFormLabel" htmlFor="fullName">
                Full Name:{" "}
              </label>
              <Field
                className="advancedFormField"
                name="fullName"
                type="text"
              />
              <span className="error-display"><ErrorMessage name="fullName" /></span>
            </div>

            <div className="advancedFormEmail">
              <label className="advancedFormLabel" htmlFor="email">
                Email:{" "}
              </label>
              <Field className="advancedFormField" name="email" type="email" />
              <span className="error-display"><ErrorMessage name="email" /></span>
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
                <option value="Select your Department">
                  Select your Department ...
                </option>
                <option value="chemical">Chemical</option>
                <option value="resources">Human Resources</option>
                <option value="engineering">Engineering</option>
                <option value="ict">ICT</option>
                <option value="logistics">Logistics</option>
                <option value="mechanical">Mechanical</option>
              </Field>
              <span className="error-display"><ErrorMessage name="department" /></span>
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
              <span className="error-display"><ErrorMessage name="country" /></span>
            </div>
            {/* gender */}
            <fieldset className="advancedRadioWrapper">
              {/* male */}
              <div>
                <label htmlFor="radioMale">
                  <Field
                    name="advancedRadioMale"
                    className="advancedRadioMale"
                    id="radioMale"
                    type="radio"
                    checked="checked"
                  />
                  Male
                </label>
                <span className="error-display"><ErrorMessage name="advancedRadioMale" /></span>
              </div>
              {/* female */}
              <div>
                <label htmlFor="radioFemale">
                  <Field
                    name="advancedRadioFemale"
                    className="advancedRadioFemale"
                    id="radioFemale"
                    type="radio"
                  />
                  Female
                </label>
                <span className="error-display"><ErrorMessage name="advancedRadioFemale" /></span>
              </div>
            </fieldset>
            {/* terfms of service */}
            <div className="acceptTermsWrapper">
              <label htmlFor="acceptTerms">
                <Field
                  className="acceptTerms"
                  name="acceptTerms"
                  id="acceptTerms"
                  type="checkbox"
                />
                Accept our Terms of Service as stated in our Policy.
              </label>
              <span className="error-display"><ErrorMessage name="acceptTerms" /></span>
            </div>
            {/* submit button */}
            <button type="submit" className="advancedFormBtn">
              Submit
            </button>
          </section>
        </Form>
      </Formik>
    </main>
  );
};

export default AdvancedForm;
