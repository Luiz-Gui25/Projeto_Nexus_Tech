var primary = "#1C4859";
var secondary = "#266F8C";
var terciary = "#54A1BF";
var quartiary = "#F2F2F2";
var quinary = "#434343";
var senary = "#00b7ff";

$(document).ready(function () {

    
    $(".btn-login").mouseenter(function () {
        $(this).css("background", senary).addClass("transition");
    });

    $(".btn-login").mouseleave(function () {
        $(this).css("background", secondary).addClass("transition");
    });

    
    $(".nexus-card-top").mouseenter(function () {
        $(this).addClass("transition");
    });

    $(".card-top").mouseleave(function () {
        $(this).addClass("transition");
    });

    
    $(".card-3").mouseenter(function () {
        $(this).css("transform", "scale(1.05)").addClass("transition");
    });

    $(".card-3").mouseleave(function () {
        $(this).css("transform", "scale(1)").addClass("transition");
    });

    $(".card-sup").mouseenter(function () {
        $(this).css("transform", "scale(1.05)").addClass("transition");
    });

    $(".card-sup").mouseleave(function () {
        $(this).css("transform", "scale(1)").addClass("transition");
    });


    
    $(".mascote").mouseenter(function () {
        $(this).css("transform", "translateY(-5px)").addClass("transition");
    });

    $(".mascote").mouseleave(function () {
        $(this).css("transform", "translateY(0)").addClass("transition");
    });

});