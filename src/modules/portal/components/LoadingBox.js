import { h } from "preact";
import styles from "./LoadingBox.scss";

const LoadingBox = props => {
  return (
    <div>
      <h3 class={styles.header}>{props.headerText}</h3>
      <div class={styles.loading}>
        <h4 class={styles.loadingText}>{props.loaderText}</h4>
      </div>
    </div>
  );
};

export default LoadingBox;
