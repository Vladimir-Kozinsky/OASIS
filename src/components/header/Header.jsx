import s from './Header.module.css';
import { Component } from 'react';
import logo from './../../common/logo.jpg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aircraftData: {}
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.aircraftData !== prevProps.aircraftData) {
            this.setState({ aircraftData: this.props.aircraftData });
        }
    }

    render() {
        return (
            <div className={s.header}>
                <div className={s.logoContainer}><img src={logo} alt="" /></div>
                <div className={s.acData}>
                    <div className={s.acDataItem}>
                        <span>MSN:</span>
                        <span>{this.state.aircraftData.msn}</span>
                    </div>
                    <div className={s.acDataItem}>
                        <span>FH:</span>
                        <span>{this.state.aircraftData.FH}</span>
                    </div>
                    <div className={s.acDataItem}>
                        <span>FC:</span>
                        <span>{this.state.aircraftData.FC}</span>
                    </div>
                </div>
                <nav className={s.navMenu}>
                    nav panel
                </nav>
            </div>
        )
    }
}



export default Header;