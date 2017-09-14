import { h } from "preact";
import styles from "./LoadingBox.scss";

const LoadingBox = () => {
  return (
    <div>
      <h3 class={styles.header}>Geen nieuwe berichten</h3>
      <div class={styles.loading} />
    </div>
  );
};

export default LoadingBox;
