// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(pre => ({count: pre.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main">
        <h1>
          The Button has been clicked <br />
          <span className="sp">{count}</span> times
        </h1>
        <p>Click the button to increase the count!</p>
        <button className="but" onClick={this.onIncrement} type="button">
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
