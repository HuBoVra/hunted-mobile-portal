import { h } from "preact";
import styles from "./LoginForm.scss";

const LoginForm = () => {
  return (
    <div>
      <h3 class={styles.header}>Welkom bij het mobile portal!</h3>
      <h4 class={styles.subHeader}>Log hier in met je team-wachtwoord</h4>

      <form class={styles.passwordForm}>
        <h4 class={styles.label}>Team-wachtwoord:</h4>
        <input
          type="text"
          id="password"
          placeholder="Team-wachtwoord"
          class={styles.inputPassword}
        />
        <h4 class={styles.disclaimer}>
          Het team-wachtwoord vind je op je team-labels. Nog geen team-labels?
          Meld je bij de organisatie!
        </h4>
      </form>

      <a href="/?transition=slide">
        <div class={styles.loginButton}>Inloggen</div>
      </a>
    </div>
  );
};

export default LoginForm;
