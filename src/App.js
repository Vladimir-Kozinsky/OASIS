import s from './App.module.css';
import { Component } from 'react'
import Home from './components/main/Home';
import { Redirect, Routes, Route, Link, Navigate } from "react-router-dom";
import Footer from './components/footer/Footer';
import MENU_W from './components/wrapComponents/Menu_w';
import HEADER_W from './components/wrapComponents/Header_w';
import LEGS_W from './components/wrapComponents/Legs_w';
import Auth from './components/auth/Auth';
import { compose } from 'redux';
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    return (
      <div className={s.app}>
        <HEADER_W />
        <MENU_W />
        <Footer />
        <div className={s.main} >
          <Routes>
            <Route path='auth' element={<Auth />} />
            <Route path='legs' element={<LEGS_W />} />
            <Route path='/' element={!this.props.isAuth ? <Navigate to="/auth" /> : <Home />} />
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
