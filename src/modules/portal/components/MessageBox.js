import { h } from "preact";
import styles from "./MessageBox.scss";

const MessageBox = () => {
  return (
    <div>
      <h3 class={styles.header}>Er is een nieuw bericht binnengekomen!</h3>
      <div class={styles.textBox}>
        <h3>Titel</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          ultrices ultrices velit ut lacinia. Donec tincidunt aliquet lorem.
          Aenean at faucibus sapien. In hendrerit sapien quis lacus sodales, a
          sollicitudin mauris laoreet. Curabitur turpis nisl, egestas nec
          blandit et, blandit non turpis. Nunc et libero vel ante pharetra
          porta. Sed dictum eu justo ac convallis. Phasellus fermentum leo sed
          est condimentum, non rhoncus ligula interdum. Integer ac nibh nec
          ipsum aliquam finibus a id felis. Vivamus pulvinar finibus consequat.
          Nam nec nulla eu lectus lacinia eleifend. Aliquam a velit magna.
          Pellentesque vestibulum libero ante, in euismod urna aliquam a.
        </p>
      </div>
      <div class={styles.messageButton}>Gelezen</div>
    </div>
  );
};

export default MessageBox;
