import TextBox from "./textbox";

import styles from "./login.module.scss";
import Checkbox from "./checkbox";

const Login = ({ className }) => {
  return (
    <div className={`${className} ${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h2>Login</h2>
          <h5>Login to access your NFTs</h5>
        </div>
        <form className={styles.form}>
          <TextBox
            name="email"
            type="email"
            placeholder="Email..."
            borderColor="#ddd"
          />

          <TextBox
            name="password"
            type="password"
            placeholder="Password..."
            borderColor="#ddd"
          />

          <div className={styles.row}>
            <a href="#reset">Reset Password</a>
            <Checkbox
              label={<span>Remember me</span>}
              name="remember_me"
              value={1}
            />
          </div>

          <input type="submit" className={styles.submit} value="LOGIN" />
        </form>
      </div>
    </div>
  );
};

export default Login;
