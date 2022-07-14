import { Field } from "formik";
import { useState } from "react";
import styles from "./checkbox.module.scss";

const Checkbox = ({ label, name, value }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.checkbox}>
      <Field
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={(_) => {
          setChecked(!checked);
        }}
      />
      <label
        htmlFor={name}
        className={styles.label}
        onClick={(_) => {
          setChecked(!checked);
        }}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
