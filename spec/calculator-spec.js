import { Calculator } from './../src/calculator.js';

describe('Calculator', function(){

  it('takes a data and stores it as a new date object', function(){
    let newDate = new Calculator("2019-01-09");
    console.log(newDate.inputDate.getUTCDate());
    expect(newDate.inputDate.getUTCFullYear()).toEqual(2019);
    expect(newDate.inputDate.getUTCMonth()).toEqual(0);
    expect(newDate.inputDate.getUTCDate()).toEqual(9);
  });
});
