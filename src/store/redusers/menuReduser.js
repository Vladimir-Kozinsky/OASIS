import { aircraftAPI } from './../../API/API'

const defaultState = {
    aircraft: null,
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
const setAircraftData = (aircraftData) => ({ type: 'GET_AIRCRAFT_DATA', payload: aircraftData })


export const getAircrafts = () => {
    return async (dispatch) => {
        const aircraftsList = await aircraftAPI.getAircrafts()
        let aircrafts = [];
        aircraftsList.forEach(element => {
            aircrafts.push({ value: element, label: element })
        });
        dispatch(setAircrafts(aircrafts))
    }
}
export const setAircraft = (msn) => {
    return async (dispatch) => {
        const aircraftData = await aircraftAPI.getAircraftData(msn)
        dispatch(setAircraftData(aircraftData))
        dispatch(setAircrafts_AC(aircraftData.msn))
    }
}

export const getAircraftData = (msn) => {
    return async (dispatch) => {
        const aircraftData = await aircraftAPI.getAircraftData(msn)
        dispatch(setAircraftData(aircraftData))
    }
}


export default menuReduser