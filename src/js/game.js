
$(document).ready(function(){
// alert("im loaded")



var score = document.createElement("score")
var counter=0


var random = Math.floor(Math.random()*10)


var words =
[{image:"img/uno.jpg", word:"uno"},
{image:"img/dos.jpg", word:"dos"},
{image:"img/tres.jpg", word:"tres"},
{image:"img/cuatro.jpg", word:"cuatro"},
{image:"img/cinco.jpg", word:"cinco"},
{image:"img/seis.jpg", word:"seis"},
{image:"img/siete.jpg", word:"siete"},
{image:"img/ocho.jpg", word:"ocho"},
{image:"img/nueve.jpg", word:"nueve"},
{image:"img/diez.jpg", word:"diez"}]




$("#word-image").attr("src", words[random].image)

$( ".number" ).click(function() {


  var englishNumber= parseInt($(this).text())-1




  var spanish = words[random].word;

  /*var player1 = parseInt(document.getElementById("score").innerHTML);
    player1++;
    */

  if
    (spanish == words[englishNumber].word) {
    counter=counter+1;
    alert("correct" + counter + '/10');

  }

  else{
    alert("try again");
  }



})




})
