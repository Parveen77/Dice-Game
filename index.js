var num=6*(Math.random());
varNum=Math.floor(num)+1;

document.getElementsByClassName("image1")[0].src="images/dice"+varNum+".png"

var num2=6*(Math.random());
varNum2=Math.floor(num2)+1;
document.getElementsByClassName("image2")[0].src="images/dice"+varNum2+".png"


if (varNum < varNum2){
  document.getElementById("winner").innerHTML="Player 2 wins"
}
else if (varNum > varNum2){
  document.getElementById("winner").innerHTML="Player 1 wins"
}
else{
  document.getElementById("winner").innerHTML="This is a draw"
}
