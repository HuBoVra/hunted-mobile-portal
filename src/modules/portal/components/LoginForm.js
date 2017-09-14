import { h } from "preact";
import styles from "./LoginForm.scss";

const LoginForm = () => {
  return (
    <div>
      <h3 class={styles.header}>
        Je kunt hier inloggen met je team-wachtwoord
      </h3>
      <h4 class={styles.subHeader}>
        Nog geen team-wachtwoord? Meld je bij de organisatie!
      </h4>
      <div class={styles.loginButton}>Inloggen</div>
    </div>
  );
};

export default LoginForm;
