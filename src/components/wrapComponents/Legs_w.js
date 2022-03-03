import { connect } from "react-redux";
import { getLegs } from '../../store/redusers/legsReduser'
import Legs from "../main/legs/Legs";

const mapStateToProps = (state) => {
    return {
        aircraftData: state.menu.aircraftData,
        legs: state.legs.legs,
    }
}

const LEGS_W = connect(mapStateToProps, { getLegs })(Legs)

export default LEGS_W