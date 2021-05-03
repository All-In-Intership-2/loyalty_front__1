import React from "react";
import { Formik, Form, Field } from "formik";
import "./loginEmailForm.scss";
import phone from "./../../../assets/images/phone.png";
import message from "./../../../assets/images/message.png";

const required = "This field is required";

const errorMessage = (error) => {
  return <div className="login-error-message">{error}</div>;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};
const validateName = (value) => {
  let error;
  if (!value) {
    error = required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const LoginEmailForm = () => {
  return (
    <>
      <div className="loginEmail-container">
        <Formik
          initialValues={{
            email: "",
            frstNameLastName: "",
            mesageTitle: "",
            message: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched }) => (
            <div className="loginEmailForm-content">
              <p className="loginEmailForm-title">
                Եթե մեյլը չեք ստանում, խնդրում ենք կապ հաստատել մեզ հետ
              </p>
              <div className="phoneMail-content">
                <p className="loginEmailForm-phone">
                  <img src={phone} alt="phone" />
                  <span>374 99 13-20-74</span>
                </p>

                <p className="loginEmailForm-mail">
                  <img src={message} alt="message" />
                  <span>pr.allin.am@gmail.com</span>
                </p>
              </div>

              <Form className="loginEmail-form">
                <div className="form-group">
                  <Field
                    type="text"
                    name="frstNameLastName"
                    className="form-input"
                    placeholder="Անուն Ազգանուն"
                    validate={validateName}
                  />

                  <Field
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Ձեր էլ․հասցեն"
                    validate={validateEmail}
                  />
                  {errors.email && touched.email && errorMessage(errors.email)}
                </div>

                <div className="form-group2">
                  <Field
                    type="text"
                    name="mesageTitle"
                    className="input-message-descr"
                    placeholder="Նամակի թեման"
                  />
                </div>
                <div className="form-group2">
                  <textarea
                    type="text"
                    name="message"
                    className="input-message"
                    placeholder="Ձեր հաղորդագրությունը"
                  />
                </div>

                <div className="form-group-btn">
                  <button className="login-submit-btn" type="submit">
                    Ուղարկել
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginEmailForm;
