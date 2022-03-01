import s from './Footer.module.css';
import { Component } from 'react'
import { Routes, Route, Link } from "react-router-dom";


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={s.footer}>
                footer
            </div>
        )
    }
}



export default Footer;