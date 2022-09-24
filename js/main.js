let image_1 = document.querySelector(".image1");
let image_2 = document.querySelector(".image2");
let image_3 = document.querySelector(".image3");
let inputsCheck = document.querySelectorAll(".checkbox");
let successCount = 0;
let countRound = 0;
let reset = document.querySelector(".reset");
let success_sound = document.getElementById("success_sound");
let flop_sound = document.getElementById("flop_sound");

reset.onclick = () => {
    inputsCheck.forEach(function (input) {
        input.disabled = false;
        input.checked = false;
    });
    successCount = 0;
    countRound = 0;
    randomizeImgs();
  };
  
  randomizeImgs();
/* --------------
* Start for each loop inputs checkbox
---------------- */
inputsCheck.forEach(function (input) {
  input.onclick = (ele) => {
    let attNameImage = ele.target.getAttribute("data-name");
    if (ele.target.checked === true) {

      ele.target.disabled = "true";
        // check name global attribute data = 01.jpg
      if (attNameImage === "01.jpg") {
        clearInterval(bgIntervalHead);
        // elemnet class name image1 check for background image name ===  current attribute input
        if(document.querySelector(".image1").style.backgroundImage.split("/").pop().split('"').shift() === attNameImage){
            successCount++;
        }
        verifySuccess();
      }
      // check name global attribute data = 02.jpg
      if (attNameImage === "02.jpg") {
        clearInterval(bgIntervalCenter);
        // elemnet class name image2 check for background image name ===  current attribute input
        if(document.querySelector(".image2").style.backgroundImage.split("/").pop().split('"').shift() === attNameImage){
            successCount++;
        }
        verifySuccess();
      }
      // check name global attribute data = 03.jpg
      if (attNameImage === "03.jpg") {
        clearInterval(bgIntervalFooter);
        // elemnet class name image3 check for background image name ===  current attribute input
        if(document.querySelector(".image3").style.backgroundImage.split("/").pop().split('"').shift() === attNameImage){
            successCount++;
        }
        verifySuccess();
      }
    }
  };
});
/* --------------
* End for each loop inputs checkbox
---------------- */

/*---------------
* Start Interval Area
----------------*/
let imgsArray = ["01.jpg", "02.jpg", "03.jpg"];
// function to randomize images
function randomizeImgs() {
    // Interval time change background image head element
  bgIntervalHead = setInterval(() => {
    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    // change background image url
    image_1.style.backgroundImage = `url("./imgs/${imgsArray[randomNumber]}")`;
  }, 1000); // speed game
  // Interval time change background image center element
  bgIntervalCenter = setInterval(() => {
    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    // change background image url
    image_2.style.backgroundImage = `url("./imgs/${imgsArray[randomNumber]}")`;
  }, 900); // speed game
  // Interval time change background image footer element
  bgIntervalFooter = setInterval(() => {
    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    // change background image url
    image_3.style.backgroundImage = `url("./imgs/${imgsArray[randomNumber]}")`;
  }, 800); // speed game
}
/*---------------
* End Interval Area
----------------*/
/*---------------
* Start Verify Success
----------------*/
function verifySuccess() {
    countRound++;
    if(countRound === 3){
        if(successCount === 3){
            success_sound.play();
            console.log('finisht');
        }else{
            flop_sound.play();
            console.log('game over');
        }
    } 
}
/*---------------
* End Start Verify Success
----------------*/