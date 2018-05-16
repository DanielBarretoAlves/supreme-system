function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function login(){
  var name, text;
  var password, password;

  //get the name
  name = document.getElementById("name").value;
  password = document.getElementById("password").value;
  if(password == "password" && name == "admin"){
    alert("Ta funfando");
    window.location.href="#";
  }else{
    alert("Error wrong Password or User Name");
  }
}
