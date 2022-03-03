import s from './App.module.css';
import { Component } from 'react'
import Home from './components/main/Home';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/footer/Footer';
import MENU_W from './components/wrapComponents/Menu_w';
import HEADER_W from './components/wrapComponents/Header_w';
import LEGS_W from './components/wrapComponents/Legs_w';


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
        <HEADER_W/>
        <MENU_W />
        <Footer />
        <div className={s.main} >
          <Routes>
            <Route path='legs' element={<LEGS_W />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    )
  }
}



export default App;
