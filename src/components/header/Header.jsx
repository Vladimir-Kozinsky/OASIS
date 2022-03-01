import s from './Header.module.css';
import { Component } from 'react'
import { Routes, Route, Link } from "react-router-dom";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={s.header}>
                header
            </div>
        )
    }
}



export default Header;