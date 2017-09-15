import { h, Component } from "preact";
import LoadingBox from "../components/LoadingBox";

export class LoadingPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <LoadingBox headerText="Data wordt opgehaald" loaderText="LOADING..." />
    );
  }
}

export default LoadingPage;
