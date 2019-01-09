import { Calculator } from './../src/calculator.js';

describe('Calculator', function(){
  let date;
  let anotherDate;
  let anExtraDate;

  beforeEach(function(){
    date = new Calculator("2017-04-09");
    anotherDate = new Calculator("2016-04-09");
    anExtraDate = new Calculator("2016-01-17");
  });


  it('takes a data and stores it as a new date object', function(){
    expect(date.inputDate.getUTCFullYear()).toEqual(2017);
    expect(date.inputDate.getUTCMonth()).toEqual(3);
    expect(date.inputDate.getUTCDate()).toEqual(9);

    expect(anotherDate.inputDate.getUTCFullYear()).toEqual(2016);
    expect(anotherDate.inputDate.getUTCMonth()).toEqual(3);
    expect(anotherDate.inputDate.getUTCDate()).toEqual(9);

  });


  it('finds the number of leap years between the anchor date and the inputted date ', function(){
    expect(date.leapYearBetween()).toEqual(489);
    expect(anotherDate.leapYearBetween()).toEqual(489);

  });

  it('finds the number of days in total completed months for the current year', function(){
    expect(date.monthsBetween()).toEqual(90);
    expect(anotherDate.monthsBetween()).toEqual(91);
  });

  it('finds the number of days in total years between anchor date', function(){
    expect(date.daysInCompletedYears()).toEqual(736331);
    expect(anotherDate.daysInCompletedYears()).toEqual(735965);
    expect(anExtraDate.daysInCompletedYears()).toEqual(735965);
  });

  it('finds the number of days in total years, months and days between inputted date and anchor date', function(){
    expect(date.calculateTotalDays()).toEqual(42832);
    expect(anotherDate.calculateTotalDays()).toEqual(42467);
    expect(anExtraDate.calculateTotalDays()).toEqual(42384);


  });

  it('finds the day of the week for a given date and returns it as a string', function(){
    expect(date.dayOfWeek()).toEqual("Sunday");
    expect(anotherDate.dayOfWeek()).toEqual("Saturday");
    expect(anExtraDate.dayOfWeek()).toEqual("Sunday");


  });
});
