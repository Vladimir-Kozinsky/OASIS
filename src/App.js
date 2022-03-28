import s from './App.module.css';
import { Component } from 'react'
import Home from './components/main/home/Home';
import { Redirect, Routes, Route, Link, Navigate } from "react-router-dom";
import Footer from './components/footer/Footer';
import MENU_W from './components/wrapComponents/Menu_w';
import HEADER_W from './components/wrapComponents/Header_w';
import LEGS_W from './components/wrapComponents/Legs_w';
import { compose } from 'redux';
import { connect } from 'react-redux';
import AUTH_W from './components/wrapComponents/Auth_w';
import SignUp from './components/main/signUp/SignUp';
import SIGNUP_W from './components/wrapComponents/SignUp_w';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={s.app}>
        <HEADER_W />
        <MENU_W />
        <Footer />
        <div className={s.main} >
          <Routes>
            <Route path='user/auth' element={this.props.isAuth ? <Navigate to="/" /> : <AUTH_W />} />
            <Route path='legs' element={!this.props.isAuth ? <Navigate to="/user/auth" /> : <LEGS_W />} />
            <Route path='/' element={!this.props.isAuth ? <Navigate to="/user/auth" /> : <Home />} />
            <Route path='user/singup' element={<SIGNUP_W />} />
          </Routes>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

const APP_W = connect(mapStateToProps, null)(App)

export default APP_W
