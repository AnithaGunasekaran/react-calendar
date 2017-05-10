import React, { Component } from 'react';
import Canvas from './Calendar';
import DateUtilities from './DateUtilities.js';
import './App.css';

 var dateFn = new DateUtilities();

class App extends Component {

  constructor(props) {
     super(props);
     this.state = { visible: "none", calendar: new Date(), selDate: '' };
     this.showCanvas = this.showCanvas.bind(this);   

  }

  showCanvas(e){
      e.preventDefault();
      this.setState({visible: "block"});
  }
 
 handleChildClick(day){
      this.setState({selDate: dateFn.toString(day.target.dataset.value)});
      this.setState({visible: "none"})
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
         <div style={{ position: 'relative'}}> 
           <label htmlFor="date">Date: </label>
           <input type="text" onClick={this.showCanvas} value={this.state.selDate} readOnly="readonly"/>
        </div>
         <Canvas visible={this.state.visible} onClick={this.handleChildClick.bind(this)} selDate={this.state.selDate} calendar={this.state.calendar}/>
      </div>
    );
  }
}

export default App;
