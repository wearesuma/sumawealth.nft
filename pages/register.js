import Register from "../components/forms/register";
import Login from "../components/forms/login";
import Layout from "../components/layout";

import styles from "./register.module.scss";

const RegisterPage = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.row}>
          <Register className={styles.register} />
          <Login className={styles.login} />
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
