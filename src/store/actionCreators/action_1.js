import initialState from "../initialState";

const SET_MSN = "SET_MSN";

function setMSN_AC(value) {
	return {
		type: SET_MSN,
		msn: value
	};

}


export function setMSN(state = initialState.msn, action) {
	console.log(action)
    switch (action.type) {
        case SET_MSN: return action.msn;
        default: return state;
    }
}

export default setMSN_AC;