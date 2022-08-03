import { Field } from "formik";
import styles from "./checkbox.module.scss";

const Checkbox = ({ label, name }) => {
  return (
    <label htmlFor={name} className={styles.label}>
      <Field type="checkbox" name={name} />
      {label}
    </label>
  );
};

export default Checkbox;
