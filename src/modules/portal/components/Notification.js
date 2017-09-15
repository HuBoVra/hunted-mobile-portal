import { h, Component } from "preact";
import styles from "./Notification.scss";

export class Notification extends Component {
  constructor() {
    super();
    this.setState({ toggled: false });
  }

  render(props) {
    const toggleHeight = () => {
      this.setState({ toggled: !this.state.toggled });
    };
    return (
      <div>
        <div class={styles.notification} onClick={toggleHeight}>
          <div class={styles.notificationTitle}>{props.notificationTitle}</div>
          {this.state.toggled
            ? <p class={styles.notificationText}>
                {props.notificationText}
              </p>
            : <p />}
          <p class={styles.p}>Ontvangen om: {props.time}</p>
        </div>
        <hr class={styles.hr} />
      </div>
    );
  }
}

export default Notification;
