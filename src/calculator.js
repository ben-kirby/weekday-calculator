class Calculator {
  constructor(inputDate){
    this.anchorDate = new Date("0001-01-01");
    this.inputDate = new Date(inputDate);
    this.isLeapYear = false;
  }

  isInputLeapYear(){
    if ((this.inputDate.getUTCFullYear() % 4 === 0) && (this.inputDate.getUTCFullYear() % 100 !== 0)) {
      this.isLeapYear = true;
    }
    else if (this.inputDate.getUTCFullYear() % 400 === 0) {
      this.isLeapYear = true;
    }
  }


  leapYearBetween() {
    this.isInputLeapYear();
    const anchorYear = this.anchorDate.getUTCFullYear();
    const inputYear = this.inputDate.getUTCFullYear();
    // const yearsBetween = inputYear - anchorYear;
    let leapYears = 0;
    for (var i = anchorYear; i <= inputYear; i++) {
      if ((i % 4 === 0) && (i % 100 !== 0)) {
        leapYears++;
      }
      else if (i % 400 === 0) {
        leapYears++;
      }
    }
    return leapYears;
  }

  daysInCompletedYears(){
    const yearsBetween = this.inputDate.getUTCFullYear() - this.anchorDate.getUTCFullYear();
    console.log(yearsBetween);
    const totalLeapYears = this.leapYearBetween();
    const normalYearsBetween = yearsBetween - totalLeapYears;
    let totalDaysInYears;

    if (this.isLeapYear === true) {
      totalDaysInYears = ((366 * totalLeapYears) - 1) + (365 * normalYearsBetween);
    }
    else if (this.isLeapYear === false) {
      totalDaysInYears = (366 * totalLeapYears) + (365 * normalYearsBetween);
    }
    console.log(totalDaysInYears);
    console.log(this.isLeapYear);
    return totalDaysInYears;
  }

  monthsBetween(){
    this.isInputLeapYear();
    const currentMonth = this.inputDate.getUTCMonth();
    const months = [31,28,31,30,31,30,31,31,30,31,30,31];
    let daysInWholeMonths = 0;

    for (var i = 0; i < currentMonth; i++) {
      daysInWholeMonths += months[i]
    }

    if ((this.isLeapYear === true) && (currentMonth > 1)) {
      daysInWholeMonths++;
      return daysInWholeMonths;
    }
    else {
      return daysInWholeMonths;
    }
  }

  daysBetween(){
    this.isInputLeapYear();
    const days = this.inputDate.getUTCDate() - 1;
    return days;
  }

  calculateTotalDays(){
    const totalDays = this.daysInCompletedYears() + this.monthsBetween() + this.daysBetween();
    return totalDays;
  }

  dayOfWeek() {
    const weekday =["Monday", "Tuesday", "Wednesday",  "Thursday", "Friday", "Saturday", "Sunday"];

    return weekday[this.calculateTotalDays() % 7];
  }

}
export { Calculator };
