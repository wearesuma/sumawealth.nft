import styles from "./register.module.scss";
import Checkbox from "./checkbox";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { register } from "../../lib/api";

const Register = ({ className }) => {
  return (
    <div className={`${className} ${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1>Register</h1>
          <h4>Register to claim your NFT!</h4>
        </div>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            display_name: "",
            password: "",
            privacy: false,
            terms: false,
            marketing: false
          }}
          validate={values => {
            const errors = {
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
              display_name: "",
              password: "",
              privacy: "",
              terms: "",
              marketing: ""
            };

            if (!values.first_name) {
              errors.first_name = "Required";
            } else {
              delete errors.first_name;
            }

            if (!values.last_name) {
              errors.last_name = "Required";
            } else {
              delete errors.last_name;
            }

            if (!values.email) {
              errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "Invalid email address";
            } else {
              delete errors.email;
            }

            if (!values.phone) {
              errors.phone = "Required";
            } else if (!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(values.phone)) {
              errors.phone = "Invalid phone number";
            } else {
              delete errors.phone;
            }

            if (!values.display_name) {
              errors.display_name = "Required";
            } else {
              delete errors.display_name;
            }

            if (!values.password) {
              errors.password = "Required";
            } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)) {
              errors.password = "Minimum eight characters, at least one letter and one number";
            } else {
              delete errors.password;
            }

            if (!values.privacy) {
              errors.privacy = "Required";
            } else {
              delete errors.privacy;
            }

            if (!values.terms) {
              errors.terms = "Required";
            } else {
              delete errors.terms;
            }

            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {

            const { first_name, last_name, email, display_name, password, phone, terms, privacy, marketing } = values;
            const response = await register(email, password, first_name, last_name, terms, privacy, marketing, phone, display_name);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <Field
                className={styles.textbox}
                placeholder="First name"
                name="first_name"
                type="text"
              />
              <ErrorMessage name="first_name" component="div" className={styles.error} />
              <Field
                className={styles.textbox}
                placeholder="Last name"
                name="last_name"
                type="text"
              />
              <ErrorMessage name="first_name" component="div" className={styles.error} />
              <Field
                className={styles.textbox}
                placeholder="Email"
                name="email"
                type="email"
              />
              <ErrorMessage name="first_name" component="div" className={styles.error} />
              <Field
                className={styles.textbox}
                placeholder="Mobile Phone Number"
                name="phone_number"
                type="phone"
              />
              <ErrorMessage name="first_name" component="div" className={styles.error} />
              <Field
                className={styles.textbox}
                placeholder="Public Display Name"
                name="display_name"
                type="text"
              />
              <ErrorMessage name="first_name" component="div" className={styles.error} />
              <Field
                className={styles.textbox}
                placeholder="Password"
                name="password"
                type="password"
              />
              <ErrorMessage name="first_name" component="div" className={styles.error} />

              <div className={styles.checkboxes}>
                <Checkbox
                  label={
                    <span>
                      I agree to the <a href="/terms" target="_blank">Terms of Service</a>
                    </span>
                  }
                  name="terms"
                  value={1}
                />
                <ErrorMessage name="first_name" component="div" className={styles.error} />
                <Checkbox
                  label={
                    <span>
                      I agree to the <a href="/privacy" target="_blank">Privacy Policy</a>
                    </span>
                  }
                  name="privacy"
                  value={1}
                />
                <ErrorMessage name="first_name" component="div" className={styles.error} />
                <Checkbox
                  label={<span>Add me to the marketing list</span>}
                  name="marketing"
                  value={1}
                />
              </div>
              <button type="submit" disabled={isSubmitting} className={styles.submit}>
                REGISTER
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
