import React from "react";
import { ReactDOM } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { useFormikContext } from "formik";

// text input
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="textInputWrapper">
        <div className="complicatedLabel">
          <label htmlFor={props.id || props.name}>
            {label} {":"}
          </label>
        </div>
        <div className="complicatedInputWrapper">
          <input
            className="complicatedInput valueOfText"
            {...field}
            {...props}
          />
          {meta.touched && meta.error ? (
            <div className="error-display">{meta.error}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

// select
const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="textInputWrapper">
        <div className="complicatedLabel">
          <label htmlFor={props.id || props.name}>
            {label} {":"}
          </label>
        </div>
        <div className="complicatedInputWrapper">
          <select
            className="complicatedInput valueOfText selectClass"
            {...props}
            {...field}
          />
          {meta.touched && meta.error ? (
            <div className="error-display">{meta.error}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

// datalist
const DataListInput = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, list: "listState" });

  return (
    <>
      <div className="textInputWrapper">
        <div className="complicatedLabel">
          <label htmlFor={props.id || props.name}>
            {label} {":"}
          </label>
        </div>
        <div className="complicatedInputWrapper">
          <input
            className="complicatedInput valueOfText selectClass"
            list="listState"
            {...field}
            {...props}
          />
          {meta.touched && meta.error ? (
            <div className="error-display">{meta.error}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

// text area for address
const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="textInputWrapper">
        <div className="complicatedLabel">
          <label htmlFor={props.id || props.name}>
            {label} {":"}
          </label>
        </div>
        <div className="complicatedInputWrapper">
          <textarea
            className=" complicatedInput textAreaElement"
            {...field}
            {...props}
          ></textarea>
          {meta.touched && meta.error ? (
            <div className="error-display">{meta.error}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

// checkbox
const CheckboxInput = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input className="confirm" type="checkbox" {...field} {...props} />
        {children}
        {meta.touched && meta.error ? <div className="error-display">{meta.error}</div> : null}
      </label>
    </>
  );
};

const RadioInput = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input className="radioInput" type="radio" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div className="error-display">{meta.error}</div> : null}
    </>
  );
};

export const ComplicatedForm = () => {
  return (
    <header className="complicatedFormContainer">
      <h1>Carefully fill out the details of the form</h1>
      <Formik
        initialValues={{
          surname: "",
          othernames: "",
          email: "",
          dob: "",
          mobile: "",
          lga: "",
          jobType: "",
          state: "",
          permanentAddress: "",
          nameOfNextOfKin: "",
          nextOfKinAddress: "",
          confirm: false,
          gender: false,

        }}
        validationSchema={Yup.object({
          surname: Yup.string()
            .min(5, "Minimum of 5 characters")
            .max(15, "Maximum of 15 characters")
            .required("Required"),
          othernames: Yup.string()
            .min(5, "Minimum of 5 characters")
            .max(30, "Maximum of 30 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid Email Address")
            .required("Required"),
          dob: Yup.string().required("Required"),
          mobile: Yup.number("Must be a number")
            .max(11, 'Maximum of 11 digits')
            .required("Required"),
          lga: Yup.string().required("Required"),
          jobType: Yup.string()
            .oneOf(
              [
                "marketing",
                "accountant",
                "manager",
                "humanResources",
                "driver",
              ],
              "Choose one of the options"
            )
            .required("Required"),
          state: Yup.string().required("Required"),
          permanentAddress: Yup.string()
            .min(10, "Minimum of ten characters")
            .max(50, "Max of fifty characters")
            .required("Required"),
          nameOfNextOfKin: Yup.string()
            .min(5, "Minimum of 5 characters")
            .max(15, "Maximum of 15 characters")
            .required("Required"),
          nextOfKinAddress: Yup.string()
            .min(10, "Minimum of ten characters")
            .max(50, "Max of fifty characters")
            .required("Required"),
          confirm: Yup.boolean()
          .required('Required')
          .oneOf([true], 'Confirm the information provided'),
          male: Yup.boolean()
          .required('Required')
          .oneOf([true], 'Select your gender'),
          female: Yup.boolean()
          .required('Required')
          .oneOf([true], 'Select your gender'),
        })}
        onSubmit={async (values, helpers) => {
          console.log(values);
          helpers.resetForm();
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }}
      >
        <Form>
          <div className="complicatedFormWrapper">
            {/* surname */}
            <TextInput
              label="Surname"
              name="surname"
              type="text"
              placeholder="Enter your surname"
            />

            {/* Other Names */}
            <TextInput
              label="Other Names"
              name="othernames"
              type="text"
              placeholder="Enter your other names"
            />

            {/* email */}
            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />

            {/* Date of Birth */}
            <TextInput label="Date of Birth" name="dob" type="date" />

            {/* contact info */}
            <TextInput
              label="Mobile No"
              name="mobile"
              type="tel"
              placeholder="Enter your mobile number"
            />

            {/* job type */}
            <SelectInput label="Job Type" name="jobType">
              <option value="">Select the job type...</option>
              <option value="marketing">Marketing</option>
              <option value="accountant">Accountant</option>
              <option value="manager">Manager</option>
              <option value="humanResources">Human Resources</option>
              <option value="driver">Driver</option>
            </SelectInput>

            {/* LGA */}
            <SelectInput label="LGA" name="lga">
              <option value="">Choose your LGA</option>
              <option value="ideato north">Ideato North</option>
              <option value="ideato north">Ideato South</option>
              <option value="ideato north">Ekwusigo</option>
              <option value="ideato north">Elele</option>
            </SelectInput>

            {/* state of origin */}
            <DataListInput
              label="State of Origin"
              name="state"
              type="text"
              list="listState"
              placeholder="Select your state of origin"
            />
            <datalist id="listState">
              <option value="Ebonyi"></option>
              <option value="Lagos"></option>
              <option value="Kano"></option>
              <option value="Rivers"></option>
              <option value="Kogi"></option>
              <option value="Bayelsa"></option>
            </datalist>
            {/* permanent address */}
            <TextArea
              placeholder="Enter your permanent address"
              label="Permanent Address"
              name="permanentAddress"
            />
            {/* Next of kin */}
            {/* Next of kin */}
            <TextInput
              label="Name of Next of Kin"
              name="nameOfNextOfKin"
              type="text"
              placeholder="Name of Next of Kin"
            />
            {/* next of kin address */}
            <TextArea
              placeholder="Next of Kin address"
              label="Next of Kin Address"
              name="nextOfKinAddress"
            />
            {/* gender */}
            
              <fieldset className="complicatedGender">
                <RadioInput name="male">
                  Male
                </RadioInput>
                <RadioInput name="female">
                  Female
                </RadioInput>
              </fieldset>
            {/* declaration */}
            <CheckboxInput name="confirm">
              I confirm that the information provided are true
            </CheckboxInput>
            {/* Submit Button */}
            <SubmitButton />
          </div>
        </Form>
      </Formik>
    </header>
  );
};

const SubmitButton = () => {
  const { dirty } = useFormikContext();
  return (
    <>
      <button className="complicatedBtn" type="submit" disabled={!dirty}>
        Submit
      </button>
    </>
  );
};
