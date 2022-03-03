import { aircraftAPI } from './../../API/API'

const defaultState = {
    aircraft: 'none',
    aircrafts: null,
    aircraftData: {}
}

const menuReduser = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_AIRCRAFT':
            return {
                ...state,
                aircraft: action.payload
            }
        case 'GET_AIRCRAFTS':
            return {
                ...state,
                aircrafts: action.payload
            }
        case 'GET_AIRCRAFT_DATA':
            return {
                ...state,
                aircraftData: action.payload
            }
        default:
            return state
    }
}

const setAircrafts = (aircrafts) => ({ type: 'GET_AIRCRAFTS', payload: aircrafts })
const setAircrafts_AC = (msn) => ({ type: 'SET_AIRCRAFT', payload: msn })
const setAircraftData = (data) => ({ type: 'GET_AIRCRAFT_DATA', payload: data })


export const getAircrafts = () => {
    return async (dispatch) => {
        const aircrafts = await aircraftAPI.getAircrafts()
        setTimeout(() => {
            dispatch(setAircrafts(aircrafts))
        }, 2000);
    }
}
export const setAircraft = (msn) => {
    return async (dispatch) => {
        const data = await aircraftAPI.getAircraftData(msn)

        setTimeout(() => {
            dispatch(setAircraftData(data))
        }, 2000);
        dispatch(setAircrafts_AC(msn))
    }
}

export const getAircraftData = (msn) => {
    return (dispatch) => {
        dispatch(setAircrafts_AC(msn))
    }
}


export default menuReduser