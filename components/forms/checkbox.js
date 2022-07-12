import styles from "./checkbox.module.scss";

const Checkbox = ({ label, name, value }) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" name={name} value={value} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
