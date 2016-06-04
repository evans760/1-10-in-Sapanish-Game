
$(document).ready(function(){
// alert("im loaded")





var random = Math.floor(Math.random()*10)+1


var words = ["cero", "uno", "dose", "threse", "cuatro", "cinco", "seise", "seiete", "ocho", "nueve", "diez"]

alert(words[random])


$("#word").html(words[random])

$( ".number" ).click(function() {
  alert("clicked");
})




})
