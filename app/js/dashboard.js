var lastname = localStorage.getItem("email");
document.getElementById('handle').innerHTML=  lastname;

function quiz(){
      window.open('quizer/quiz/quiz1.html');
}

function logout(){
      firebase.auth().signOut().then(function() {
            // Sign-out successful.
            window.open('./login.html');
      }).catch(function(error) {
            // An error happened.
        console.log(error);
      });
      }