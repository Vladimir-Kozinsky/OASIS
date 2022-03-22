import { connect } from "react-redux";
import { getLastLegs, addLeg, getLegs, delLeg, updateLeg } from '../../store/redusers/legsReduser'
import { getAircraftData } from '../../store/redusers/menuReduser'
import Legs from "../main/legs/Legs";

const mapStateToProps = (state) => {
    return {
        aircraft: state.menu.aircraft,
        lastLegs: state.legs.lastLegs,
        legs: state.legs.legs,
        aircraftData: state.menu.aircraftData
    }
}

const LEGS_W = connect(mapStateToProps, {
    getLastLegs,
    getLegs,
    addLeg,
    delLeg,
    getAircraftData,
    updateLeg
})(Legs)

export default LEGS_W