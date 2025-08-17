import styles from "./Spinner.module.css";

const Spinner = ({ text = "Loading..." }) => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <p>{text}</p>
    </div>
  );
};

export default Spinner;
