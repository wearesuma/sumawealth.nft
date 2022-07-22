import { ErrorMessage, Field, Form, Formik } from "formik";
import Router from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import { verify } from "../lib/api";

import styles from "./verify.module.scss";

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
    child = <p className={styles.loading}>Loading...</p>;
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
          <Form method="post" className={styles.form}>
            <Field
              name="code"
              type="text"
              placeholder="Enter verification code"
              className={styles.textbox}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submit}
            >
              LOGIN
            </button>
          </Form>
        )}
      </Formik>
    );
  }

  return (
    <Layout title="Verify Login">
      <div className={styles.container}>
        <h1 className={styles.heading}>Verify your login</h1>
        <h2 className={styles.sub}>Enter the code sent to you by email</h2>
        {child}
      </div>
    </Layout>
  );
}
