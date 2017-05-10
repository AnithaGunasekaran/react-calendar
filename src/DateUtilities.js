


class DateUtilities{

     addZero(val){
         val = (val.length == 1) ? "0"+val : val;
         return val;
     }
     
     clone(date){
        
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
     };

     toDayOfMonthString(date) {
         return date.getDate().toString();
     };

      isToday(day, currDay) {
            return day.getFullYear() === currDay.getFullYear() && day.getMonth() === currDay.getMonth() && day.getDate() === currDay.getDate();
      };

      isSelectedDay(day, selDate){

            return day.getFullYear() === selDate.getFullYear() && day.getMonth() === selDate.getMonth() && day.getDate() === selDate.getDate();

      }

      getLastSunday(date, dayOfWeek) {
    
        
          //getDay() returns the day number in the week. Sat = 6, Sun = 0. Check to see if the current day number is 0 which marks the start of the week. Loop until the getDate !== 0. It exits once it has found the last Sunday from prev month
            while (date.getDay() !== dayOfWeek){
               
                //Date - 1
                date.setDate(date.getDate()-1);
            }
             console.log(date)
            
            return date;
     }


     toString(date) {
         var myDate = new Date(date);
         return myDate.getFullYear()   + "-" + this.addZero(parseInt(myDate.getMonth() + 1).toString()) + "-" + this.addZero(myDate.getDate().toString());
     };
}
export default DateUtilities