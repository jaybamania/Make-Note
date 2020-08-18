
	 function validate(){
	 	var name = document.getElementById("contactname").value;
  		var email = document.getElementById("contactemail").value;
  		var subject = document.getElementById("contactsubject").value;
  		var message = document.getElementById("contactmessage").value;
	 	console.log(message);
	 	if (!name) {
		    document.getElementById("error-name").style.display = "block";
		    document.getElementById("error-name").innerHTML =
		      "Please enter your name";
		    document.getElementById("error-name").style.color = "red";
		  }
		if (!ValidateEmail(email)) {
		    document.getElementById("error-email").style.display = "block";
		    document.getElementById("error-email").innerHTML =
		      "Please enter a valid Email";
		    document.getElementById("error-email").style.color = "red";
		  }
		  if (!subject) {
		    document.getElementById("error-subject").style.display = "block";
		    document.getElementById("error-subject").innerHTML =
		      "Please enter subject";
		    document.getElementById("error-subject").style.color = "red";
		  }
		  if(message==""){
		  	document.getElementById("error-message").style.display = "block";
		    document.getElementById("error-message").innerHTML =
		      "Please Write Something";
		    document.getElementById("error-message").style.color = "red";	
		  }
		  if(msgLength(message) == false){
		  	document.getElementById("error-message").style.display = "block";
		    document.getElementById("error-message").innerHTML =
		      "Message should be atleast 50 characters long!!";
		    document.getElementById("error-message").style.color = "red";	
		  }
		  if(name != "" && email != "" && subject != "" && message != "" && msgLength(message) == true){
		  	console.log(name);
		  	console.log(email);
		  	console.log(subject);
		  	console.log(message);
		  	alert('Data has been Recorded');
		  }
		  
	 }

	 function msgLength(message){
	 	var msglength = message.length;
	 	console.log(msglength);
	 	if(msglength > 50){
	 		 return true;
	 	}
	 	if(msglength>=1 && msglength<49){ 
	 		return false;
	 	}
	 }

	 function hidevalidationMsg(val) {
		  document.getElementById(val).style.display = "none";
		}

	 function ValidateEmail(email) {
	  var emailformat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ ;
	  emailformat.test(
	    String(email).toLowerCase()
	  );
	  if (email.match(emailformat)) {
	    return true;
	  }
	  return false;
	}


	// **************** FOR LOGIN-SIGNUP **********************

	
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}
function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('Login with');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}

function loginAjax(){
    /*   
    $.post( "/login", function( data ) {
            if(data == 1){
                window.location.replace("/home");            
            } else {
                 shakeModal(); 
            }
        });
    */


     shakeModal();
}

function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
             $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
             $('input[type="password"]').val('');
             setTimeout( function(){ 
                $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000 ); 
}

   