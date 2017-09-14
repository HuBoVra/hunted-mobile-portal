import { h, Component } from "preact";
import styles from "./Notification.scss";

export class Notification extends Component {
  constructor() {
    super();
    this.setState({ toggled: false });
  }

  render() {
    const toggleHeight = () => {
      this.setState({ toggled: !this.state.toggled });
    };
    return (
      <div>
        <div class={styles.notification} onClick={toggleHeight}>
          <div class={styles.notificationTitle}>Notificatie</div>
          {this.state.toggled ? (
            <p class={styles.notificationText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ultrices ultrices velit ut lacinia. Donec tincidunt aliquet lorem.
              Aenean at faucibus sapien. In hendrerit sapien quis lacus sodales,
              a sollicitudin mauris laoreet. Curabitur turpis nisl, egestas nec
              blandit et, blandit non turpis.
            </p>
          ) : (
            <p />
          )}
          <p class={styles.p}>Ontvangen om: 19:00</p>
        </div>
        <hr class={styles.hr} />
      </div>
    );
  }
}

export default Notification;
