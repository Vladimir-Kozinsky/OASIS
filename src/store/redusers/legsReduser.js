import { aircraftAPI } from '../../API/API'

const defaultState = {
    legs: null
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
        dispatch(setLegs(legs))
    }
}

export const addLeg = (msn, leg) => {
    return async (dispatch) => {
        const data = await aircraftAPI.addLeg(msn, leg)
        if (data.resultCode == 1) {
            dispatch(setLegs(data.legs))
        }
    }
}



export default legsReduser