import { connect } from "react-redux";
import { updateCustomWords } from "./settingsActions";
import Settings from "./settings";

const mapDispatchToProps = () => {
  return {
    updateCustomWords
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Settings);
