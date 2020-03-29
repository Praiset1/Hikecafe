//validate Register Form 
$("#registerForm").validate({
rules:{
        name:{
            required:true,
            minlength:3,
            accept:"[a-zA-Z]+"
        },
     
     password:{
         required:true,
         minlength:5,
         maxlength:20
     },
    
    username:{
        required:true,
        
    }
    },
   messages:{
       required:"Please Enter Your Name!",
       minlength:"Your Name must contain letters only!"
   },
   password:{
       required:"Please Provide Your password!",
       minlength:"Your password must be atleast 5 characters long!"
   },
   
   username:{
    required:"Please Enter Your username!", 
    username:"Please Enter valid username!"  
   }
});

//validate Login Form
$("#loginForm").validate({
    rules:{
        username:{
            required:true,
            

     },
     password:{
         required:true,
     }
    },
    messages:{
        username:{
            required:"Please Enter Your username",
            email:"Please Enter valid username!"
     },
     password:{
         required:"Please provide Your Password!"
     }
    }
});
