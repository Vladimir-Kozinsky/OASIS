import { aircraftAPI } from '../../API/API'
import { getAircraftData } from './menuReduser'

const defaultState = {
    isAuth: false
}

const authReduser = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_AUTH':
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state
    }
}

const setLastLegs = (isAuth) => ({ type: 'SET_AUTH', payload: isAuth })





// export const addLeg = (msn, leg) => {
//     return async (dispatch) => {
//         const data = await aircraftAPI.addLeg(msn, leg)
//         if (data.resultCode == 1) {
//             dispatch(setLastLegs(data.legs))
//             dispatch(getAircraftData(msn))
//         }
//     }
// }



export default authReduser