// var text = ["frontend developer.", "web engineer.", "graphic designer.", "photographer.", "illustrator.", "web designer.", "content creator.", "digital designer."];
// var counter = 0;
// var elem = document.getElementById("changeText");
// var inst = setInterval(changeWord, 1000);


// /*------CHANGE WORDS IN HOME TEXT----------*/
// function changeWord() {
//   elem.innerHTML = text[counter];
//   counter++;
//   if (counter >= text.length) {
//     counter = 0;
//     // clearInterval(inst); // uncomment this to stop refreshing after one cycle
//   }
// }

/*------------CHANGE THE HOME IMAGE------------*/

var imagesOptions = [ "Images/NYC-PhotoArt.png", "Images/CoverPhotography.png","Images/Portrait_2.png", "Images/StatueLiberty-DigitalArt.png", "Images/DigitalCollage.png","Images/Portrait.png"];
var counter2 = 0;
var imgToChange = document.getElementById("changeImg");
var inst = setInterval(changeImage, 1000);


function changeImage() {
    imgToChange.src = imagesOptions[counter2];
    counter2++;
    if (counter2 >= imagesOptions.length) {
      counter2 = 0;
      // clearInterval(inst); // uncomment this to stop refreshing after one cycle
    }
  }


  /*---------------WORK: SLIDE HORIZONTAL PROJECT CONTAINER ----------*/
  var button = document.getElementById('slide');
button.onclick = function () {
    var container = document.getElementById('container');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    var container = document.getElementById('container');
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}