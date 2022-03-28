import s from './Home.module.css';
import { Component } from 'react'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <div className={s.home}>
        Home
      </div>
    )
  }
}

export default App;