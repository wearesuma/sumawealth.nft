import { ErrorMessage, Field, Form, Formik } from "formik";
import Router from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import { verify } from "../lib/api";

export default function Verify() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("verify"));
    if (!d) {
      Router.push("/register");
    } else {
      setData(d);
    }
  }, []);

  let child = null;

  if (!data) {
    child = <p>Loading...</p>;
  } else {
    const { verificationToken, email } = data;
    child = (
      <Formik
        initialValues={{ code: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          verify(email, verificationToken, values.code);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form method="post">
            <Field
              name="code"
              type="text"
              placeholder="Enter verification code"
            />
            <ErrorMessage name="password" component="div" />

            <button type="submit" disabled={isSubmitting}>
              LOGIN
            </button>
          </Form>
        )}
      </Formik>
    );
  }

  return <Layout title="Verify Login">{child}</Layout>;
}
