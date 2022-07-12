import styles from "./textbox.module.scss";

const TextBox = ({ placeholder, type, name, borderColor }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={styles.textbox}
      style={{ borderColor: borderColor ? borderColor : "#fff" }}
    />
  );
};

export default TextBox;
