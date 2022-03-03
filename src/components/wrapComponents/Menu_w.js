import { connect } from "react-redux";
import Menu from "./../menu/Menu";
import {getAircrafts, setAircraft} from './../../store/redusers/menuReduser'

const mapStateToProps = (state) => {
    return {
        msn: state.menu.msn,
        aircrafts: state.menu.aircrafts
    }
}

const MENU_W = connect(mapStateToProps, {getAircrafts, setAircraft} )(Menu)

export default MENU_W