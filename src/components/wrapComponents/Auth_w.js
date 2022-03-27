import { connect } from "react-redux";
import { logIn } from "../../store/redusers/authReduser";
import Auth from "../auth/Auth";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const AUTH_W = connect(mapStateToProps, { logIn })(Auth)

export default AUTH_W