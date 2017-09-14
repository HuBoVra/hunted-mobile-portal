import { h } from "preact";
import NotificationList from "./NotificationList";
import styles from "./NotificationBox.scss";

const NotificationBox = () => {
  return (
    <div class={styles.notificationBox}>
      <h3>Recente Notificaties</h3>

      <div class={styles.notificationList}>
        <NotificationList />
      </div>
    </div>
  );
};

export default NotificationBox;
