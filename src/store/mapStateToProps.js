function mapStateToProps(component) {
    switch (component) {
        case "Menu": {
            return function (state) {
                return {
                    msn: state.msn
                };
            }
        }
        // case "Component_2": {
        //     return function (state) {
        //         return {
        //             value_2: state.value_2
        //         };
        //     }
        // }
        default: return undefined;
    }
}

export default mapStateToProps;