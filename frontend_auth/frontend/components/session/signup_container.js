import { connect } from "react-redux";
import { createNewUser } from "../../actions/session";
import { SignUp } from "./signup";

export const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (formUser) => dispatch(createNewUser(formUser)),
  };
};

export default connect(mapDispatchToProps)(SignUp);
