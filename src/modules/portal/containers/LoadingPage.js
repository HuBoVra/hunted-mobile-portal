import { h, Component } from "preact";
import LoadingBox from "../components/LoadingBox";

export class LoadingPage extends Component {
  constructor() {
    super();
  }

  const redirectAfterLoading = () => {
    this.props.history.push("/");
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isLoading) {
      this.redirectAfterLoading();
    }
  }
  render() {
    return (
      <LoadingBox headerText="Data wordt opgehaald" loaderText="LOADING..." />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(LoadingPage);
