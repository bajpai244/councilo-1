firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   
  //sending email to the person
  localStorage.setItem("email",user.email );
        
  window.open("./dashboard.html","_self"); 
       
  } 
  else {
     
    alert('we signed out');
          

  }});

function login(){

    const email  = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorCode + errorMessage);
      });   


      }


function register(){
    window.open('./register.html','_self')
}


