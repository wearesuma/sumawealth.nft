import styles from "./register.module.scss";
import Checkbox from "./checkbox";
import Link from "next/link";

const Register = ({ className }) => {
  return (
    <div className={`${className} ${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1>Register</h1>
          <h4>Register to claim your NFT!</h4>
        </div>
        <form className={styles.form}>
          <input
            className={styles.textbox}
            placeholder="First name"
            name="first_name"
            type="text"
          />
          <input
            className={styles.textbox}
            placeholder="Last name"
            name="last_name"
            type="text"
          />
          <input
            className={styles.textbox}
            placeholder="Email"
            name="email"
            type="email"
          />
          <input
            className={styles.textbox}
            placeholder="Mobile Phone Number"
            name="phone_number"
            type="phone"
          />
          <input
            className={styles.textbox}
            placeholder="Public Display Name"
            name="display_name"
            type="text"
          />
          <input
            className={styles.textbox}
            placeholder="Password"
            name="password"
            type="password"
          />

          <div className={styles.checkboxes}>
            <Checkbox
              label={
                <span>
                  I agree to the <Link href="/terms">Terms of Service</Link>
                </span>
              }
              name="terms"
              value={1}
            />
            <Checkbox
              label={
                <span>
                  I agree to the <Link href="/privacy">Privacy Policy</Link>
                </span>
              }
              name="privacy"
              value={1}
            />
            <Checkbox
              label={<span>Add me to the marketing list</span>}
              name="marketing"
              value={1}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
