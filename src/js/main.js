import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator.js';
import $ from 'jquery';

$(document).ready(function() {
  $("#btn").submit(function() {
    let earthAge = $("#age").val()
    $("#age").val("")

    $(".earthAge").text(earthAge);

  });
});