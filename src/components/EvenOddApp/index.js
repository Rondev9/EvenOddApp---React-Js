import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.round(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  getEvenOdd = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const EvenOddText = this.getEvenOdd()
    return (
      <div className="EvenOddAppContainer">
        <div className="EvenOddAppSubContainer">
          <h1 className="title">Count {count}</h1>
          <p className="EvenOddDescription">Count is {EvenOddText}</p>
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note-description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
