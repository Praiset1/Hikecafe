function validateform(){
    var username= document.getElementById("username")
    var password= document.getElementById("password")
    var valid=true;
    if(username.Value.length==0){
        username.className="wrong-input";
        username.nextElementSibling.innerHTML="username can't be blank";
        valid=false;
    }
    if(password.Value.length<6){
        password.className="wrong-input";
        username.nextElementSibling.innerHTML="password cannot have more than 6";
        valid=false;
    }
    return valid;
}
const form = document.querySelector("#login-form");
const pass_reg
let username = form.elements.className("username");
let username = form.elements.className("password");
username.addEventListener('input,validate');
password.addEventListener('input,validate');


form.addEventListener("submit",function(e){
    e.preventDefault();
    
    alert("submitted");
    return true;
});
function validate(e){
    let target = e.target.name;
    if(target= "password"){

        if(target= "username"){

         }
}
}
