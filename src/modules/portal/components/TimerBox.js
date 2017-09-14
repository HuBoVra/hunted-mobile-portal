import { h, Component } from "preact";
import styles from "./TimerBox.scss";

export class TimerBox extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h3 class={styles.header}>Voer deze actie uit binnen:</h3>
        <div class={styles.timerBox} />
      </div>
    );
  }
}

export default TimerBox;
