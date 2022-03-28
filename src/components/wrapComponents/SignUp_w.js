import { connect } from "react-redux";
import { signUp } from "../../store/redusers/authReduser";
import SingUp from "../main/signUp/SignUp";

const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo
    }
}

const SIGNUP_W = connect(mapStateToProps, { signUp })(SingUp)

export default SIGNUP_W