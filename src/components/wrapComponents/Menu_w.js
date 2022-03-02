import { connect } from "react-redux";
import Menu from "./../menu/Menu";


// const mapDispatchToProps = (dispatch) => {
//     return {
//         set_msn: (msn) => dispatch({ type: 'SET_MSN', payload: msn }),
//         get_aircrafts: () => {
//             getAircrafts()

//            dispatch({type: 'GET_AIRCRAFTS', aircrafts}) 
//         } 
//     }
// }

const mapStateToProps = (state) => {
    return {
        msn: state.MSN.msn
    }
}

const MENU_W = connect(mapStateToProps, {set_msn})(Menu)

export default MENU_W