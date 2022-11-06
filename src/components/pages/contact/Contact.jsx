import React from "react";
import Footer from "../../home/footer/Footer";
import "./contact.css";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";

const Contact = () => {
  const validateForm = (values) => {
    const errors = {};

    if (!values.first_name) {
      errors.first_name = "First name is required";
    }
    if (!values.last_name) {
      errors.last_name = "Last name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!validator.isEmail(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <section id="contact">
      <ToastContainer />
      <div className="contact container">
        <Link to="/" className="back">
          <FaArrowLeft />
        </Link>
        <div className="contact-info">
          <div className="contact-title">
            <h2>Contact Me</h2>
            <span>
              Hi there, contact me to ask me about anything you have in mind.
            </span>
          </div>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              message: "",
            }}
            validate={validateForm}
            onSubmit={(values, { resetForm }) => {
              resetForm({ values: "" });
            }}
          >
            {(formik) => (
              <Form>
                <div className="name">
                  <div className="dname">
                    <label htmlFor="first_name">First Name</label>
                    <Field
                      type="text"
                      className={
                        formik.touched.first_name && formik.errors.first_name
                          ? "first_name error-pane"
                          : "first_name"
                      }
                      name="first_name"
                      id="first_name"
                      placeholder="Enter your first name"
                    />
                    {formik.touched.first_name && formik.errors.first_name ? (
                      <div className="error-text">
                        {formik.errors.first_name}
                      </div>
                    ) : null}
                  </div>
                  <div className="dname">
                    <label htmlFor="last_name">Last Name</label>
                    <Field
                      type="text"
                      name="last_name"
                      className={
                        formik.touched.last_name && formik.errors.last_name
                          ? "last_name error-pane"
                          : "last_name"
                      }
                      id="last_name"
                      placeholder="Enter your last name"
                    />
                    {formik.touched.last_name && formik.errors.last_name ? (
                      <div className="error-text">
                        {formik.errors.last_name}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className={
                      formik.touched.email && formik.errors.email
                        ? "email error-pane"
                        : "email"
                    }
                    placeholder="yourname@email.com"
                    id="email"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error-text">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    className={
                      formik.touched.message && formik.errors.message
                        ? "message error-pane"
                        : "message"
                    }
                    placeholder="Send me a message and I will reply you as soon as possible....."
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className="error-text">{formik.errors.message}</div>
                  ) : null}
                </div>
                <div>
                  <div className="check">
                    <Field
                      type="checkbox"
                      name="checkbox"
                      className={
                        formik.touched.check && formik.errors.check
                          ? "checkbox error-pane"
                          : "checkbox"
                      }
                    />
                    <span>
                      You agree to providing your data to Oluwatobiloba who may
                      contact you.
                    </span>
                  </div>

                  {formik.errors.checkbox ? (
                    <div className="error-text">{formik.errors.checkbox}</div>
                  ) : null}
                </div>
                <button type="submit" id="btn__submit" className="btn_submit">
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
