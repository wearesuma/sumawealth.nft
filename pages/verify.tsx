import { ErrorMessage, Field, Form, Formik } from "formik";
import Router from "next/router";
import { useEffect, useState } from "react";
import { verify } from "../lib/api";

export default function Verify() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("verify")));
    if (!data) {
      Router.push("/register");
    }
  }, [data]);

  if (!data) return <p>Loading...</p>;

  const { verificationToken, email } = data;

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