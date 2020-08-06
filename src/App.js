import React, {Component} from 'react'

class App extends Component{

state = {
  count: 0
}

countUp = () => {
  this.setState(
    {count: this.state.count + 1}
  )
}
countDown = () => {
  this.setState(
    {count: this.state.count - 1}
  )
}
countTwo = () => {
  this.setState(
    {count:this.state.count + 2}
  )
}

 

  render(){

    return(
      <div className="App">
      <section className="sect">
        <p>Current number is :</p>
        <h4>{this.state.count}</h4>
        <button id="up" onClick={this.countUp}>Count Up</button>
        <button id="down" onClick={this.countDown}>Count Down</button>
        <button id="two" onClick={this.countTwo}>Plus Two</button>
      </section>
      </div>
    
    )
   
  }
}
export default App