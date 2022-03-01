import s from './Menu.module.css';
import { Component } from 'react'
import { Routes, Route, Link } from "react-router-dom";


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={s.menu}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/legs">Legs</Link></li>
                </ul>
            </div>
        )
    }
}



export default Menu;