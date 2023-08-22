import styles from "./Button1.module.css";

function Button({ label, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}
export default Button;