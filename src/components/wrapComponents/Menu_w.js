import { connect } from "react-redux";
import Menu from "./../menu/Menu";
import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";


const MENU_W = connect(mapStateToProps("Menu"), mapDispatchToProps("Menu"))(Menu)

export default MENU_W