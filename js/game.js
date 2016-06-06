
$(document).ready(function(){
// alert("im loaded")





var random = Math.floor(Math.random()*10)+1


var words = ["cero", "uno", "dose", "threse", "cuatro", "cinco", "seise", "seiete", "ocho", "nueve", "diez"]




$("#word").html(words[random])

$( ".number" ).click(function() {


  var englishNumber= ($(this).text())




  var spanish = $("#word").html();

  if
    (spanish == words[englishNumber]) {
    alert("correct");
  }

  else{
    alert("try again");
  }



})




})
