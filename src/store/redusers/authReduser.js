import { aircraftAPI } from '../../API/API'
import { getAircraftData } from './menuReduser'

const defaultState = {
    isAuth: false,
    userInfo: null
}

const authReduser = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_AUTH':
            return {
                ...state,
                isAuth: action.payload
            }
        case 'SET_USER_INFO':
            return {
                ...state,
                userInfo: action.payload
            }
        default:
            return state
    }
}

const setIsAuth = (isAuth) => ({ type: 'SET_AUTH', payload: isAuth })
const setuserInfo = (userInfo) => ({ type: 'SET_USER_INFO', payload: userInfo })





export const logIn = (name, password, isRemember) => {
    return async (dispatch) => {
        const data = await aircraftAPI.logIn(name, password, isRemember)
        if (data.resultCode == 1) {
            dispatch(setIsAuth(true))
            dispatch(setuserInfo(data.userInfo))
        }
    }
}
export const signUp = (userInfo) => {
    return async (dispatch) => {
        const data = await aircraftAPI.signUp(userInfo)
        if (data.resultCode == 1) {

        }
    }
}



export default authReduser