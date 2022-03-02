import { connect } from "react-redux";

import Header from "../header/Header";

const mapStateToProps = (state) => {
    return {
        msn: state.MSN.msn,
        aircraftData: state.MSN.aircraftData
    }
}

const HEADER_W = connect(mapStateToProps, null)(Header)

export default HEADER_W