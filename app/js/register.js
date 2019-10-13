function clicke(){  
    //alert('clickeworking');
    email=document.getElementById('email').value;
    password=document.getElementById('password').value;
   //  alert(email+'  ' +password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
     alert(errorCode+errorMessage);
    });
   
    alert('you were successfully loged in');
    window.open("./login.html","_self");

    }

 
//this is my first line
function login(){
    window.open("./login.html","_self")
}


// now going to add register stuff
/*
function clicke(){
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;    


firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
   alert(errorCode+errorMessage);
  });
  alert('hey hi hello');
}



*/




/*
<script>
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
 alert(errorCode+errorMessage);
});


</script>*/