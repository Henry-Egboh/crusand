import { useFormik } from "formik";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length < 5 || values.username.length > 15) {
    errors.username = 'Must not be less than 5 chars and not more than 15 chars';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address';
  }
  if (!values.comment) {
    errors.comment = 'Required';
  } else if (values.comment.length < 5) {
    errors.comment = 'Your feedback should be more than 5 characters'
  } else if (values.comment.length > 50) {
    errors.comment = 'Your feedback should be less than 50 characters'
  }
  return errors;
};

export function FeedbackForm() {

  const {handleBlur, handleChange, handleSubmit, values, errors, touched} = useFormik({
    initialValues: {
      username: '',
      email: '',
      comment: '',
    },

    validate,

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }

  })

  // console.log(errors);

  return (
    <header className="feedback-form-container">
      <h1>Leave us a comment!</h1>
      <form onSubmit={handleSubmit} className="feedback">
        {/* name */}
        <div className="wrap">
          <div className="feedback-form-label">
            <label htmlFor="username">UserName: </label>
          </div>
          <div className="input-container">
            <input
              id="username"
              type="text"
              placeholder="Enter your name"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
          </div>
        </div>
        {errors.username && touched.username ? (<span style={{color: 'red', fontSize: '0.8rem'}}>{errors.username}</span>) : null}
        {/* email */}
        <div className="wrap">
          <div className="feedback-form-label">
            <label htmlFor="email">Email: </label>
          </div>
          <div className="input-container">
            <input
              id="email"
              type="email"
              placeholder="xyz@example.com"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
        </div>
        {errors.email && touched.email ? (<span style={{color: 'red', fontSize: '0.8rem'}}>{errors.email}</span>) : null}
        {/* textarea */}
        <div className="wrap">
          <div className="feedback-form-label">
            <label htmlFor="textArea">Comment: </label>
          </div>
          <div className="input-container">
            <textarea
              name="comment"
              placeholder="Please provide us with your feedback"
              id="textArea"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comment}
            ></textarea>
          </div>
        </div>
        {errors.comment && touched.comment ? (<span style={{color: 'red', fontSize: '0.8rem'}}>{errors.comment}</span>) : null}
        
        <button type="submit">Submit</button>
      </form>
    </header>
  );
};
