import { ErrorMessage, Field, Form, Formik } from "formik";
import { verify } from "../lib/api";

export default function Verify() {
  const s = JSON.parse(localStorage.getItem("verify"));
  const { verificationToken, email } = s;

  return (<Formik initialValues={{ code: '' }} onSubmit={async (values, { setSubmitting }) => {

    verify(email, verificationToken, values.code);
  }}>
    {({ isSubmitting }) => (
      <Form method="post">
        <Field name="code" type="text" placeholder="Enter verification code" />
        <ErrorMessage name="password" component="div" />

        <button type="submit" disabled={isSubmitting}>
          LOGIN
        </button>
      </Form>
    )}

  </Formik>);
}