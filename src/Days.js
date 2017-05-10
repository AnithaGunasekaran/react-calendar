import React, { Component } from 'react';
import DateUtilities from './DateUtilities.js';

import './Calendar.css';

var dateFn = new DateUtilities();

class Days extends Component{

    constructor(props){
        super(props);   
    }


    generateDates(startDate){
         var days = [dateFn.clone(startDate)],
                clone = dateFn.clone(startDate);
            for (var i = 1; i <= 6; i++) {
                clone = dateFn.clone(clone);
                clone.setDate(clone.getDate()+1);
                days.push(clone);
            }
            return days;
    }
 


    getClassNamesForTheDay(day){

        var className = "day";
      
        if(dateFn.isToday(day, new Date())){
           className += " today"
        }
        if(day.getMonth() !== this.props.month){
            className += " inactive month";  
                
        }
        if(dateFn.isSelectedDay(day, new Date(this.props.selDate))){
             className += " selected month";  
        }
    
        return className;
    }

    render(){
        
        //Generate the dates for the week based on the start date of the week
        var days = this.generateDates(this.props.startdate);
      
        return (
            <div className="week">
              {days.map(function(day, i) {
                   
                    return <div key={i} data-selDate={this.props.selDate} onClick={this.props.onClick} data-value={new Date(day)} className={this.getClassNamesForTheDay(new Date(day))}>{dateFn.toDayOfMonthString(new Date(day))}</div>
                    
              },this)}
            </div>
        );
    }
}

export default Days