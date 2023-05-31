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
          <label htmlFor={props.id || props.name}>{label}</label>
        </div>
        <div className="complicatedInputWrapper">
          <input
            className="complicatedInput valueOfText selectClass"
            list="staffCountry"
            {...field}
            {...props}
          />
          {meta.touched && meta.error ? <div>{meta.error}</div> : null}
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
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
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
          lga: Yup.string().required("Required"),
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

            {/* LGA */}
            <SelectInput label="LGA" name="lga">
              <option value="">Choose your LGA</option>
              <option value="ideato north">Ideato North</option>
              <option value="ideato north">Ideato South</option>
              <option value="ideato north">Ekwusigo</option>
              <option value="ideato north">Elele</option>
            </SelectInput>

            {/* position applying for */}
            {/* <SelectInput label="Employment Position" name="position">
              <option value="">Select the position applying for...</option>
              <option value="Secretary">Secretary</option>
              <option value="Secretary">Secretary</option>
              <option value="Secretary">Secretary</option>
              <option value="Secretary">Secretary</option>
              <option value="Secretary">Secretary</option>
              <option value="Secretary">Secretary</option>
            </SelectInput> */}

            {/* state of origin */}
            {/* Contact address */}
            {/* Next of kin */}
            {/* next of kin address */}

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
