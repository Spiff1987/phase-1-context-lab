/* Your Code Here */


// createEmployeeRecord
function createEmployeeRecord(data) {
    return {
      firstName: data[0],
      familyName: data[1],
      title: data[2],
      payPerHour: data[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // createEmployeeRecords
  function createEmployeeRecords(data) {
    return data.map(record => createEmployeeRecord(record));
  }
  
  // createTimeInEvent
  function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}
//     let [date, hour] = dateStamp.split("")
//     this.timeInEvents.push({
//     // const [year, month, day, hour] = date.split(" ");
//     // const event = {
//       type: "TimeIn",
//       hour: parseInt(hour, 10),
//     //   date: `${year}-${month}-${day}`
//       date,
//     });
//     return this;
//   }
  
  // createTimeOutEvent
  function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

//     const [date, hour] = date.split(" ");
//     const event = {
//       type: "TimeOut",
//       hour: parseInt(hour),
//       date: `${year}-${month}-${day}`
//     };
//     this.timeOutEvents.push(event);
//     return this;
//   }
  
  // hoursWorkedOnDate
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(
      event => event.date === date
    );
    const timeOutEvent = this.timeOutEvents.find(
      event => event.date === date
    );
    // if (!timeInEvent || !timeOutEvent) {
    //   return 0;
    // }
    return (timeOutEvent.hour - timeInEvent.hour) / 100
  }
  
  // wagesEarnedOnDate
  function wagesEarnedOnDate(date) {
    const wage = hoursWorkedOnDate.call(this, date)*this.payPerHour
    // return this.hoursWorkedOnDate(date) * this.payPerHour;
    return parseFloat(wage.toString())
  }
  
  // allWagesFor
//   function allWagesFor() 
//     const dates = [
//       ...new Set([
//         ...this.timeInEvents.map(event => event.date),
//         ...this.timeOutEvents.map(event => event.date)
//       ])
//     ];
//     return dates.reduce((total, date) => total + this.wagesEarnedOnDate(date), 0);
//   }
  
  // findEmployeeByFirstName
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }
  
  // calculatePayroll
//   function calculatePayroll(employees) {
//     return employees.reduce((total, employees) => {
//      return total + employees.allWagesFor.call()
//     }, 0);
        
//   }

function calculatePayroll(arrEmployee) {
    return arrEmployee.reduce((total, arrEmployee) => {
      return total + allWagesFor.call(arrEmployee);
    }, 0);
  }
  

  

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

