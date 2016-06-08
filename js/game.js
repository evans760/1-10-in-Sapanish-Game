
$(document).ready(function(){
// alert("im loaded")



// var score = document.createElement("score")
var counter;

var words = [];

var random;

reset();

function reset (){
  words =
    [{image:"img/uno.jpg", word:"uno", englishNumb:1},
    {image:"img/dos.jpg", word:"dos", englishNumb:2},
    {image:"img/tres.jpg", word:"tres", englishNumb:3},
    {image:"img/cuatro.jpg", word:"cuatro", englishNumb:4},
    {image:"img/cinco.jpg", word:"cinco", englishNumb:5},
    {image:"img/seis.jpg", word:"seis", englishNumb:6},
    {image:"img/siete.jpg", word:"siete", englishNumb:7},
    {image:"img/ocho.jpg", word:"ocho", englishNumb:8},
    {image:"img/nueve.jpg", word:"nueve", englishNumb:9},
    {image:"img/diez.jpg", word:"diez", englishNumb:10}];
  counter=0;
  $("#player1").text(counter);
  gameLogic();

}



function gameLogic (){
  random = Math.floor(Math.random()*words.length);
  $("#word-image").attr("src", words[random].image);
}

$("#resetbtn").click(function(){
  reset();
});

$( ".number" ).click(function() {


  var englishNumber= parseInt($(this).text());

  var spanish = words[random].word;



  /*var player1 = parseInt(document.getElementById("score").innerHTML);
    player1++;
    */

  if (englishNumber == words[random].englishNumb) {
    counter=counter+1;
    $("#player1").text(counter);
    //run function called gameLogic
    words.splice(random, 1)

    if (words.length <= 0){
      swal({ title: "BUENO!/GOOD!",
        text: "Ahora se puede contar hasta 10 en español! You can now count to 10 in spanish!",
        imageUrl: "img/count.jpg" });
      reset();
    }
    gameLogic();

  }

  else{

    swal({ title: "Try agian.",
      text: "uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez",
      imageUrl: "img/count.jpg"});
  }



})




})
