
const defaultState = {
    msn: 'xxx',
    aircraftData: {
        FH: 15478,
        FC: 11256
    }
}

const menuReduser = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_MSN':
            return {
                ...state,
                msn: action.payload
            }
        case 'GET_AIRCRAFTS':
            return {
                
            }

        default:
            return state
    }
}

export default menuReduser