import { aircraftAPI } from '../../API/API'

const defaultState = {
    legs: []
}

const legsReduser = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_LEGS':
            return {
                ...state,
                legs: action.payload
            }
        default:
            return state
    }
}

const setLegs = (legs) => ({ type: 'SET_LEGS', payload: legs })


export const getLegs = (msn) => {
    return async (dispatch) => {
        const legs = await aircraftAPI.getLegs(msn)
        setTimeout(() => {
            dispatch(setLegs(legs))
        }, 1000);
    }
}



export default legsReduser