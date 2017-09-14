import { h, Component } from "preact";
import styles from "./LocationBox.scss";

export class LocationBox extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h3 class={styles.header}>Jullie volgende locatie:</h3>
        <div class={styles.locationBox} />
      </div>
    );
  }
}

export default LocationBox;
