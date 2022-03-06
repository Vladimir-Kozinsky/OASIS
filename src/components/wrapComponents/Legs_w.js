import { connect } from "react-redux";
import { getLegs, addLeg } from '../../store/redusers/legsReduser'
import Legs from "../main/legs/Legs";

const mapStateToProps = (state) => {
    return {
        aircraft: state.menu.aircraft,
        legs: state.legs.legs,
        aircraftData: state.menu.aircraftData
    }
}

const LEGS_W = connect(mapStateToProps, { 
    getLegs, 
    addLeg })(Legs)

export default LEGS_W