import React, { Component } from 'react';
import DateUtilities from './DateUtilities.js';
import Weeks from './Weeks.js';
import './Calendar.css';

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

 var dateFn = new DateUtilities();

class Calendar extends Component {

  constructor(props) {
     super(props);
     this.state = {calendar: dateFn.clone(this.props.calendar),  other: dateFn.clone(this.props.calendar), selDate:new Date()};
     this.getWeekStartDates = this.getWeekStartDates.bind(this)
     this.prev = this.prev.bind(this);
     this.next = this.next.bind(this);
  }
  
  getSelDateMonth(date){
    return monthNames[date.getMonth()];
  }

  prev(e){
    e.preventDefault();
    var activeMonth = dateFn.clone(this.state.calendar);
    activeMonth.setMonth(activeMonth.getMonth()-1);
    this.move(activeMonth)
  }

  next(e){
    e.preventDefault();
    var activeMonth = dateFn.clone(this.state.calendar);
    activeMonth.setMonth(activeMonth.getMonth()+1);
    this.move(activeMonth)
  }
  
   move(activeMonth, isForward){
      this.setState({calendar: activeMonth})
  }


  getWeekStartDates(calendar){
      
      //Getting the information for the last month's last Sunday
      calendar.setDate(1);
     
    	calendar = dateFn.moveToDayOfWeek(dateFn.clone(calendar), 0);


      //Getting the information for the start of the first Sunday of the current month
      var current = dateFn.clone(calendar);
      current.setDate(current.getDate()+7);
    

      //Starts variable is an array which stores all the week starts
      var starts = [calendar],
    	    month = current.getMonth();

      while (current.getMonth() === month) {
          //Get all week starts - Sundays for the current month and push them into an array
    	    starts.push(dateFn.clone(current));
          current.setDate(current.getDate()+7);
    	}

      return starts;

  }


  render() {

    return (
      <div style={{display: this.props.visible}} className="canvas">
        <div className="monthName">
            <a onClick={this.prev} className="prev"  href="#">Prev</a>
            {this.getSelDateMonth(this.state.calendar)}
            <a onClick={this.next} className="next" href="#">Next</a>
        </div>
        <div className="header">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <Weeks className="current" onClick={this.props.onClick}  selDate={this.props.selDate} calendar={this.state.calendar} />
      </div>
    );
  }
}

export default Calendar;
