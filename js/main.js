function mouseOver1() {
  document.getElementById("d1").style.backgroundColor = "green";
  document.getElementById("d1").style.width = "7px";
  document.getElementById("d1").style.height = "7px";
  document.getElementById("d1").style.transition = "all 0.2s";
}

function mouseOut1() {
  document.getElementById("d1").style.backgroundColor  = "white";
  document.getElementById("d1").style.width = "8px";
  document.getElementById("d1").style.height = "8px";
  document.getElementById("d1").style.transition = "all 0.2s";
}

function mouseOver2() {
  document.getElementById("d2").style.backgroundColor = "green";
  document.getElementById("d2").style.width = "7px";
  document.getElementById("d2").style.height = "7px";
  document.getElementById("d2").style.transition = "all 0.2s";
}

function mouseOut2() {
  document.getElementById("d2").style.backgroundColor = "white";
  document.getElementById("d2").style.width = "8px";
  document.getElementById("d2").style.height = "8px";
  document.getElementById("d2").style.transition = "all 0.2s";
}
function mouseOver3() {
  document.getElementById("d3").style.backgroundColor = "green";
  document.getElementById("d3").style.width = "7px";
  document.getElementById("d3").style.height = "7px";
  document.getElementById("d3").style.transition = "all 0.2s";
}

function mouseOut3() {
  document.getElementById("d3").style.backgroundColor = "white";
  document.getElementById("d3").style.width = "8px";
  document.getElementById("d3").style.height = "8px";
  document.getElementById("d3").style.transition = "all 0.2s";
}


//menu icon

// function rsd1(){
//   document.getElementById("d1").style.opacity = "0";
//   document.getElementById("link1").style.opacity="0";
//   document.getElementById("d2").style.opacity = "1";
//   document.getElementById("link2").style.opacity="1";
//   document.getElementById("d3").style.opacity = "1";
//   document.getElementById("link3").style.opacity="1";
// }
// function rsd2(){
//   document.getElementById("d2").style.opacity = "0";
//   document.getElementById("link2").style.opacity="0";
//     document.getElementById("d1").style.opacity = "1";
//   document.getElementById("link1").style.opacity="1";
//     document.getElementById("d3").style.opacity = "1";
//   document.getElementById("link3").style.opacity="1";
// }
// function rsd3(){
//   document.getElementById("d3").style.opacity = "0";
//   document.getElementById("link3").style.opacity="0";
//     document.getElementById("d1").style.opacity = "1";
//   document.getElementById("link1").style.opacity="1";
//     document.getElementById("d2").style.opacity = "1";
//   document.getElementById("link2").style.opacity="1";
// }





//Top Button Code Starts here
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.style.border = "none";

    // if((document.body.scrollTop > 500 && document.body.scrollTop < 1000) || (document.documentElement.scrollTop > 500  && document.documentElement.scrollTop < 1000)){
    //     document.getElementById("d1").style.opacity = "0";
    //    document.getElementById("link1").style.opacity="0";
    //    document.getElementById("link1").style.animationDelay="0.5s";
    // }
    // else{
    //   document.getElementById("d1").style.opacity = "1";
    //    document.getElementById("link1").style.opacity="1";
    //      document.getElementById("link1").style.animationDelay="0.5s";
    // }

    //     if((document.body.scrollTop > 1000 && document.body.scrollTop < 1500) || (document.documentElement.scrollTop > 1000  && document.documentElement.scrollTop < 1500)){
    //     document.getElementById("d2").style.opacity = "0";
    //    document.getElementById("link2").style.opacity="0";
    //    document.getElementById("link1").style.animationDelay="0.5s";
    // }
    // else{
    //   document.getElementById("d2").style.opacity = "1";
    //    document.getElementById("link2").style.opacity="1";
    //      document.getElementById("link1").style.animationDelay="0.5s";
    // }
    //         if((document.body.scrollTop > 1500 && document.body.scrollTop < 2000) || (document.documentElement.scrollTop > 1500  && document.documentElement.scrollTop < 2000)){
    //     document.getElementById("d3").style.opacity = "0";
    //    document.getElementById("link3").style.opacity="0";
    //    document.getElementById("link1").style.animationDelay="0.5s";
    // }
    // else{
    //   document.getElementById("d3").style.opacity = "1";
    //    document.getElementById("link3").style.opacity="1";
    //      document.getElementById("link1").style.animationDelay="0.5s";
    // }

  } else {
    mybutton.style.display = "none";
    mybutton.style.border = "none";

  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.getElementById("d1").style.animationDelay = "1s";
  document.getElementById("d3").style.opacity = "1";
  document.getElementById("link3").style.opacity="1";
  document.getElementById("d1").style.opacity = "1";
  document.getElementById("link1").style.opacity="1";
  document.getElementById("d2").style.opacity = "1";
  document.getElementById("link2").style.opacity="1";
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("mob");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

function opencard(){
    modal.style.display = "block";
}
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal

function closecard(){
  modal.style.display = "none";
} 
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




//Top Button Code Ends here
//<------------------------------------------------------------------------------------------------->
