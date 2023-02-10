// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  subscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  render() {
    const {isSubscribe} = this.state
    const note = isSubscribe ? 'Subscribed' : 'Subscribe'
    return (
      <div className="whole-container">
        <div className="container">
          <h1 className="heading">Welcome</h1>
          <p className="para">Thank you! Happy Learning</p>
          <button className="button" type="button" onClick={this.subscribe}>
            {note}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
