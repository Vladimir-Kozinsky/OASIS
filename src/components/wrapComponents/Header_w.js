import { connect } from "react-redux";

import Header from "../header/Header";

const mapStateToProps = (state) => {
    return {
        aircraft: state.menu.aircraft,
        aircraftData: state.menu.aircraftData
    }
}

const HEADER_W = connect(mapStateToProps, null)(Header)

export default HEADER_W