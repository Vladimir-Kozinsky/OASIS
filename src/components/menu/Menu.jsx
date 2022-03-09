import s from './Menu.module.css';
import { Component } from 'react'
import AsyncSelect from 'react-select/async';
import { Link } from "react-router-dom";
import Select from 'react-select';

const customStyles = {
    input: (provided, state) => ({
        ...provided,
        color: 'rgb(119, 119, 250)',
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: 'rgb(119, 119, 250, 0.8)',
    }),
    option: (provided, state) => ({
        ...provided,
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: 'rgb(119, 119, 250)'
    }),
}

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: true,
            isLoading: true
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.props.getAircrafts()
    }

    componentDidUpdate(prevProps) {
        if (this.props.aircrafts !== prevProps.aircrafts) {
            this.setState({ isDisabled: false });
            this.setState({ isLoading: false });
        }
    }

    handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, "");
        this.setState({ inputValue });
        return inputValue;
    };

    onChange(value, actionMeta) {
        const msn = value.value
        this.props.setAircraft(msn)
    }

    render() {
        return (
            <div className={s.menu}>
                <div className={s.chooseBlock}>
                    <span>Choose aircraft </span>
                    <Select
                        className={s.select}
                        styles={customStyles}
                        // classNamePrefix="select"
                        // defaultValue={colourOptions[0]}
                        isDisabled={this.state.isDisabled}
                        isLoading={this.state.isLoading}
                        onInputChange={this.handleInputChange}
                        onChange={this.onChange}
                        // isClearable={isClearable}
                        // isRtl={isRtl}
                        // isSearchable={isSearchable}
                        // name="color"
                        options={this.props.aircrafts}
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