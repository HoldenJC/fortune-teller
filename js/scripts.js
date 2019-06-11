
//DID NEED TO SETT THESE TO 0, ++ ON UNDEFINED DIDNT WORK
var luckyCounter = 0;
var unluckyCounter = 0;
var interestingCounter = 0;

$(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    $("#card-header1, #card-body1").hide();
    $(".background").addClass("background2");
    // $("#card-header1").hide();
    luckyCounter = 0;
    $("input:checkbox[name=lucky]:checked").each(function(){
      luckyCounter++;
    });
    $("#card-header2, #card-body2").fadeIn();
  });
  $("#form2").submit(function(event){
    event.preventDefault();
    $("#card-header2, #card-body2").hide();
    $(".background").addClass("background3");
    unluckyCounter = 0;
    $("input:checkbox[name=unlucky]:checked").each(function(){
      unluckyCounter++;
    });
    $("#card-header3, #card-body3").fadeIn();
  });
  $("#form3").submit(function(event){
    event.preventDefault();
    $("#card-header3, #card-body3").hide();
    $(".background").addClass("background4");
    interestingCounter = 0;
    $("input:checkbox[name=interesting]:checked").each(function(){
      interestingCounter++;
    });
    $("#results1").after(determineResults(luckyCounter, unluckyCounter, interestingCounter));
    $("#card-header4, #card-body4").fadeIn();
  });
});

// function testResults(){
//   console.log(luckyCounter + " " + unluckyCounter + " " + interestingCounter + " " + determineResults(luckyCounter, unluckyCounter, interestingCounter));
//
//   $("#results1").after(determineResults(luckyCounter, unluckyCounter, interestingCounter));
//
// }

function determineResults(lucky, unlucky, interesting){
  if (lucky >= (unlucky + interesting - 1)){
    return "in a previous life you were a leprechaun"
  } else if(unlucky >= (lucky + interesting - 1)){
    return "oh dear. oh dear. oh dear."
  } else if(interesting >= (lucky + unlucky - 1)){
    return "you make your own luck!"
  } else {
    return "you are an individual of balance"
  }
}
