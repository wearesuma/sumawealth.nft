import { useState } from "react";
import styles from "./checkbox.module.scss";

const Checkbox = ({ label, name, value }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.checkbox}>
      <input
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
