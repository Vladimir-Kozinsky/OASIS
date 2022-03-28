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

const setIsAuth = (isAuth) => ({ type: 'SET_AUTH', payload: isAuth })





export const logIn = (name, password, isRemember) => {
    return async (dispatch) => {
        const data = await aircraftAPI.logIn(name, password, isRemember)
        if (data.resultCode == 1) {
            dispatch(setIsAuth(true))
        }
    }
}



export default authReduser