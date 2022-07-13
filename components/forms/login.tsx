
import styles from "./login.module.scss";
import Checkbox from "./checkbox";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { login } from "../../lib/api";

const Login = ({ className }) => {
  return (
    <div className={`${className} ${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h2>Login</h2>
          <h5>Login to access your NFTs</h5>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values) => {
            let errors = {
              email: "",
              password: "",
            };
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else {
              delete errors.email;
            }

            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "Password too small";
            } else {
              delete errors.password;
            }

            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await login(values.email, values.password);
              console.log(response);
            } catch (err) {
              console.error(err);
            }

            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <Field
                className={styles.textbox}
                name="email"
                type="email"
                placeholder="Email..."

                style={{ borderColor: "#ddd" }}
              />
              <ErrorMessage name="email" component="div" className={styles.error} />

              <Field
                className={styles.textbox}
                name="password"
                type="password"
                placeholder="Password..."
                style={{ borderColor: "#ddd" }}
              />
              <ErrorMessage name="password" component="div" className={styles.error} />

              <div className={styles.row}>
                <a href="#reset">Reset Password</a>
                <Checkbox
                  label={<span>Remember me</span>}
                  name="remember_me"
                  value={1}
                />
              </div>

              <button type="submit" className={styles.submit} disabled={isSubmitting}>
                LOGIN
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
