import s from './App.module.css';
import { Component } from 'react'
import Legs from './components/main/Legs';
import Home from './components/main/Home';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MENU_W from './components/wrapComponents/Menu_w';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <div className={s.app}>
        <Header />
        <MENU_W />
        <Footer />
        <div className={s.main} >
          <Routes>
            <Route path='legs' element={<Legs />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    )
  }
}



export default App;
