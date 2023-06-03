import React from "react";
import { Form, Field, withFormik } from "formik";

const RadioComp = ({ values }) => {
  return (
    <Form>
      <Field component="div" name="radioBtn">
        <input
          type="radio"
          id="myRadio"
          defaultChecked={values.radioBtn === "male"}
          name="radioBtn"
          value="male"
        />
        <label htmlFor="myRadio">Male</label>

        <input
          type="radio"
          id="myRadio"
          defaultChecked={values.radioBtn === "female"}
          name="radioBtn"
          value="female"
        />
        <label htmlFor="myRadio1">Female</label>
      </Field>
    </Form>
  );
};

export const RadioInput = withFormik({
    mapPropsToValues({radioBtn}) {
        return {
            radioBtn: radioBtn || "female"
        };
    }
})(RadioComp);
