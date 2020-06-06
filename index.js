
function btnAlert() {

let randomNumber = Math.floor(Math.random()* 8);
let eightBall = "";

switch (randomNumber){

  case 0:
    eightBall = 'It is certain!';
    break;
  case 1:
    eightBall = 'It is decidedly so!';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes!';
    break;
}

  //console.log(`The eight ball answered: ${eightBall}`);
  //alert(`${eightBall}`);
  document.getElementById("response").innerHTML= eightBall;
  document.getElementById("askBtn").disabled = true;
}  

function clearInner (){
  document.getElementById("response").innerHTML="Ask Me a Question";
  var txt= document.getElementById("questionBox").innerHTML="";
  document.getElementById('askBtn').disabled= true;
}

function txtValidate() { 
    if(document.getElementById("questionBox").value==="") { 
             document.getElementById('askBtn').disabled = true; 
         } 
         else { 
             document.getElementById('askBtn').disabled = false;
         }
     }


