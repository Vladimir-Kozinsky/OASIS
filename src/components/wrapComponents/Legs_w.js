import { connect } from "react-redux";
import { getLastLegs, addLeg, getLegs } from '../../store/redusers/legsReduser'
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
    addLeg })(Legs)

export default LEGS_W