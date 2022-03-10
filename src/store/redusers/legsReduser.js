import { aircraftAPI } from '../../API/API'
import { getAircraftData } from './menuReduser'

const defaultState = {
    lastLegs: null,
    legs: null
}

const legsReduser = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_LAST_LEGS':
            return {
                ...state,
                lastLegs: action.payload
            }
        case 'SET_LEGS':
            return {
                ...state,
                legs: action.payload
            }
        default:
            return state
    }
}

const setLastLegs = (legs) => ({ type: 'SET_LAST_LEGS', payload: legs })
const setLegs = (legs) => ({ type: 'SET_LEGS', payload: legs })



export const getLastLegs = (msn) => {
    return async (dispatch) => {
        const legs = await aircraftAPI.getLastLegs(msn)
        dispatch(setLastLegs(legs))
    }
}
export const getLegs = (msn, from, to) => {
    return async (dispatch) => {
        const legs = await aircraftAPI.getLastLegs(msn, from, to)
        dispatch(setLegs(legs))
    }
}

export const addLeg = (msn, leg) => {
    return async (dispatch) => {
        const data = await aircraftAPI.addLeg(msn, leg)
        if (data.resultCode == 1) {
            dispatch(setLastLegs(data.legs))
            dispatch(getAircraftData(msn))
        }
    }
}

export default legsReduser