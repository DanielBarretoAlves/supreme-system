function myFunction() {
    var name, text;
	var password, password;

    // Get the value of the input field with id="name"
    name = document.getElementById("name").value;
	// get te password
	password = document.getElementById("password").value;

    // If x is Not a Number or less than one or greater than 10
    if (name == "admin" && password == "password") {
		$("#demo").css("color", "green");
		text = "Access Granted";
        window.location.href="langSelection.html";
    } else {
        text = "Access Denied";
    }
    document.getElementById("demo").innerHTML = text;
}
function day(){
	$("nav").css("backgroundColor", "#2979FF");
	$(".infoColumn").css("backgroundColor", "#2962FF");
	$("button").css("backgroundColor", "#2962FF");
}