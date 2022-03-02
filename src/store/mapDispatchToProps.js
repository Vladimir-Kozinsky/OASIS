import { bindActionCreators } from 'redux';
import setMSN_AC from './actionCreators/action_1';

function mapDispatchToProps(component) {
	switch (component) {
		case "Menu": return function (dispatch) {
			return {
				set_msn: bindActionCreators(setMSN_AC, dispatch)
			};
		};
		// case "Component_2": return function (dispatch) {
		// 	return {
		// 		change_value_2: bindActionCreators(action_2, dispatch)
		// 	};
		// };
		default: return undefined;
	}
}

export default mapDispatchToProps;