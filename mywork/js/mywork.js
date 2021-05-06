
// Get the modal
var modal1 = document.getElementById("treya");
var modal2= document.getElementById("file");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function openfile(){
	modal2.style.display = "block";
}



function opentreya(){
	modal1.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal1) {
		modal1.style.display = "none";
	}
	else if(event.target == modal2){
		modal2.style.display = "none";
	}
}

//Top Button Code Ends here
//<------------------------------------------------------------------------------------------------->
