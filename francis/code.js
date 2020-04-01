$(document).ready(function () {

    //validate Register Form
    $("#registerForm").validate({

        rules: {
            name: {
                required: true,
                minlength: 3,
                accept: "[a-zA-Z]+"
            },

            email: {
                required: true,
            },

            password: {
                required: true,
                minlength: 4,
                maxlength: 20
            },

        },
        messages: {
            name: {
                required: "Please Enter Your Name!",
                minlength: "Your Name must be atleast 3 characters long!",
                accept: "Your Name must contain letters only!"
            },
            password: {
                required: "Please Provide Your password!",
                minlength: "Your password must be atleast 4 characters long!"
            },

            email: {
                required: "Please Enter Your email!",
                eamil: "Please Enter valid eamil!"
            }
        }
    });
    //validate Login Form
    $("#loginForm").validate({
        rules: {
            email: {
                required: true,
            },
            password: {
                required: true,
            }
        },
        messages: {
            email: {
                required: "please Enter Email!",
                email: "Please Enter valid Email!"
            },
            password: {
                required: "Please provide Your Password!"
            }
        }
    });
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle(show);
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var myDropdown =
            document.getElementsByClassName("dropdown-contents");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            (openDropdown.classList.contains('show'))
            {
                openDropdown.classList.remove('show');
            }
        }
    }

}
