const  data = new Array();


function insert() {
    data.push(document.getElementById('username').value);
    data.push(document.getElementById('email').value);
    data.push(document.getElementById('password').value);

    document.getElementById('username').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";

    regEx();
    display();

   }

   function display() {
                window.location = 'home.html';
               
                alert ("successful!");    
              
                 }
   
    function regEx(){
    function testName(){
            let name = document.getElementById('username').value;
            let nameTest = name.search(/[a-zA-Z]/g);
            if (nameTest == -1 || name == ""){
                alert ("please enter only letters here");
            };

    }
    function testEmail(){
            let email = document.getElementById('email').value;
            let emailTest = name.search( /^\w+([\.-]?\w+)*@\w+(\.-]?w+)*(\.\w{2,3})+$/);
            if (emailTest == -1 || email == ""){
                alert ("please enter valid email here");
            };

    }
    testEmail();
    testName();
    //insert();
    
    }
    
    function validate(){
	
	let name1 = document.getElementById("Email").value;
	let password1 = document.getElementById("Password").value;
 
	let username = ["cole","aine","praise"];
    let password = ["123","111","000"];
    

	for (let i = 0; i < name.length; i++) {
		
		if (username1 == name[i] && password1 == pass[i]) {
		alert ("successful login!");
		window.location = "cole.html";
		return false;
	}
	else{
		
		alert ("invalid user name or password");
		
	}
regEx();

}
}

/*document.getElementById('registerForm').addEventListener("submit", event => {
    // stop page from refreshing
    event.preventDefault();
    // get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pswd').value;
    if (name.length < 1 )  {
      document.getElementById('helper-text').innerHTML =
        "All fields are required";
    }
    if (email.length < 4 ) {
      document.getElementById('helper-text').innerHTML =
       "Email must contain at least one special character (@ &.)!";
    } 
       if (password.length < 4 ) {
      document.getElementById('helper-text').innerHTML =
       "Password must contain at least one uppercase letter (A-Z)!";
    } 
    else {
      window.location.replace("./login.html");
    }
})*/
                 