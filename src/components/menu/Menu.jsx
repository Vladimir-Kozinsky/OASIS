import s from './Menu.module.css';
import { Component } from 'react'
import AsyncSelect from 'react-select/async';
import { Link } from "react-router-dom";

const options = [
    { value: '24985', label: '24985' },
    { value: '32546', label: '32546' },
    { value: '25896', label: '25896' }
]





class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.onChange = this.onChange.bind(this);
    }


    loadOptions = (inputValue, callback) => {
        callback(this.props.get_aircrafts())
    }


    handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, "");
        this.setState({ inputValue });
        return inputValue;
    };

    onChange(value, actionMeta) {
        const msn = value.value
        this.props.set_msn(msn)
        // this.setState({ msn });
    }

    render() {
        return (
            <div className={s.menu}>
                <div className={s.chooseBlock}>
                    <span>Choose aircraft </span>
                    <AsyncSelect
                        cacheOptions
                        loadOptions={this.loadOptions}
                        defaultOptions
                        onInputChange={this.handleInputChange}
                        onChange={this.onChange}
                    />
                </div>

                <ul className={s.menuList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/legs">Legs</Link></li>
                </ul>
            </div>
        )
    }
}





export default Menu;