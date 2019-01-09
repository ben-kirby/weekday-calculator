import $ from 'jquery';
import { Calculator } from './calculator';

$(document).ready(function(){


  $(".weekday-form").submit(function(event){
    event.preventDefault();
    let input = $("#date").val();
    let calc = new Calculator(input);
    let weekday = calc.dayOfWeek();
    $("#weekday").html(weekday);
  });

});
