import React, { Component } from 'react';
import DateUtilities from './DateUtilities.js';
import Days from './Days'
import './Calendar.css';

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

 var dateFn = new DateUtilities();

class Weeks extends Component {

  constructor(props) {

     super(props);
    
     this.state = {calendar: dateFn.clone(this.props.calendar),  other: dateFn.clone(this.props.calendar)};
     this.getStartDatesForWeeks = this.getStartDatesForWeeks.bind(this);

   
  }
  
  getSelDateMonth(date){

    return monthNames[date.getMonth()];
  }




 
  getStartDatesForWeeks(calendar){
      
      //Setting the date to 1 of the month that is currently in the view state 
      calendar.setDate(1);

      //Get the prev Sunday from the 1st of the month in view
      calendar = dateFn.getLastSunday(dateFn.clone(calendar), 0);


      //Getting the information for first Sunday of the current month
      var currentMonth= dateFn.clone(calendar);
      currentMonth.setDate(currentMonth.getDate()+7);


      //Starts variable is an array which stores all the week starts
      var starts = [calendar],
    	    month = currentMonth.getMonth();
      
   
      while (currentMonth.getMonth() === month) {
          //Get all week starts - Sundays for the current month and push them into an array except the first
    	    starts.push(dateFn.clone(currentMonth));
          currentMonth.setDate(currentMonth.getDate()+7);
    	}

     
      return starts;

  }


  render() {

     

      //Receiving the start date from App.JS and getting the dates for all Sundays. 
      var starts = this.getStartDatesForWeeks(this.props.calendar);
    
      //Get the month for the first item. This could be current month's first Sunday or previous month's last Sunday
      var month =  starts[1].getMonth();
     
   
    return (
       
       <div className={this.props.className}>
        {starts.map(function(start, i){
            return <Days startdate={start} onClick={this.props.onClick}  selDate={this.props.selDate} month={month}/>
        },this)}
      </div>
    );
  }
}

export default Weeks;
