

//Detecting Button Press
var drumButtons = document.querySelectorAll(".drum");
for (let i = 0; i < drumButtons.length; i++){
    drumButtons[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        playKeySound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)
    });
}

//Detecting Key Press
document.addEventListener("keydown", function(event) {
    playKeySound(event.key);
    buttonAnimation(event.key);
})

var audio = new Audio();

//This function gets a key as parameter and play a sound based on that
function playKeySound(key) {
    var audio;
    switch (key) {
      case "w":
        audio = new Audio('sounds/tom-1.mp3');
        break;
      case "a":
        audio = new Audio('sounds/tom-2.mp3');
        break;
      case "s":
        audio = new Audio('sounds/tom-3.mp3');
        break;
      case "d":
        audio = new Audio('sounds/tom-4.mp3');
        break;
      case "j":
        audio = new Audio('sounds/snare.mp3');
        break;
      case "k":
        audio = new Audio('sounds/crash.mp3');
        break;
      case "l":
        audio = new Audio('sounds/kick-bass.mp3');
        break;
      default:
        console.log('Error. Key pressed: ', key);
        return;
    }
    audio.play();
  }

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed")
    }, 125)
}