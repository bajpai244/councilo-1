var lastname = localStorage.getItem("email");
document.getElementById('handle').innerHTML=  lastname;

function quiz(){
      window.open('quizer/quiz/quiz1.html');
}

function mentor(){ 
   window.open('./mentor.html','_self');   
}
/*
function logout(){
      firebase.auth().signOut().then(function() {
            // Sign-out successful.
            window.open('./login.html');
      }).catch(function(error) {
            // An error happened.
        console.log(error);
      });
      }


      function mentor(){ 
      window.open('mentor.html'.'_self');
      }*/