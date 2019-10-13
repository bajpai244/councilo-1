
   
   //begining of function one
  function hb(){
   
      if(frm.checkbox1.checked==true&frm.checkbox2.checked==true ){
       
       alert("kindly choose one answer");
       return false;


      }

     if(frm.checkbox1.checked == true)
  {     
           a=1;
           b=0;
          localStorage.a1=a;
       localStorage.b1=b; 
      //we use local storage of both here so that a fixed and a correct value is assigned to them.
         
    return true;
    }

      else if(frm.checkbox2.checked == true)
      {
            a=0;
            b=1;
             localStorage.a1=a;
       localStorage.b1=b; 
       
 

              return true;
         }

        alert("Kindly choose one answer");
        return false;
        }
            
      
    function hb1(){
  
      if(frm.checkbox1.checked==true&frm.checkbox2.checked==true ){
       
       alert("kindly choose one answer");
       return false;


      }
           if(frm.checkbox1.checked == true)
  {     
      var a=1+JSON.parse(localStorage.getItem('a1'));
      var b=0+JSON.parse(localStorage.getItem('b1'));
      localStorage.a2=a;
      localStorage.b2=b;
      return true;
    }

      else if(frm.checkbox2.checked == true)
      {
         var b=1+JSON.parse(localStorage.getItem('b1'));
         var a=0+JSON.parse(localStorage.getItem('a1'));
        localStorage.a2=a;
        localStorage.b2=b;
          return true;
         }
        alert("Kindly choose one answer");
        return false;
        }
      
     function hb2(){
  
      if(frm.checkbox1.checked==true&frm.checkbox2.checked==true ){
       
       alert("kindly choose one answer");
       return false;


      }
           if(frm.checkbox1.checked == true)
  {     
      var a=1+JSON.parse(localStorage.getItem('a2'));
      var b=0+JSON.parse(localStorage.getItem('b2'));
      localStorage.a3=a;
      localStorage.b3=b;

      
        if( a>b)
         {
            var i=0          
            var e=1
            localStorage.introvert=i;
            localStorage.extrovert=e;
         
              }
          else{
           var i=1;
           var e=0;
            localStorage.introvert=i;
            localStorage.extrovert=e; 
                  
               } 
      return true;
    }

      else if(frm.checkbox2.checked == true)
      {
         var a=0+JSON.parse(localStorage.getItem('a2'));  
         var b=1+JSON.parse(localStorage.getItem('b2'));
         localStorage.b3=b;
         localStorage.a3=a;
        
            if( a>b)
         {
            var i=0; 
            var e=1;
            localStorage.introvert=i;
            localStorage.extrovert=e;
         
          }
          else{
           var i=1;
           var e=0;
           localStorage.extrovert=e;
           localStorage.introvert=i;
         
           } 
                 
              return true;
         }
        alert("Kindly choose one answer");
        return false;
        }

        function hb3(){
  
      if(frm.checkbox1.checked==true&frm.checkbox2.checked==true ){
       
       alert("kindly choose one answer");
       return false;


      }

     if(frm.checkbox1.checked == true)
  {     
           a=1;
           b=0;

          localStorage.a11=a;
          localStorage.b11=b; 
      //we use local storage of both here so that a fixed and a correct value is assigned to them.
         
    return true;
    }

      else if(frm.checkbox2.checked == true)
      {
            a=0;
            b=1;
            
       localStorage.a11=a;
       localStorage.b11=b; 
       
 

              return true;
         }

        alert("Kindly choose one answer");
        return false;
        }
       
    function hb4(){
  
      if(frm.checkbox1.checked==true&frm.checkbox2.checked==true ){
       
       alert("kindly choose one answer");
       return false;


      }
           if(frm.checkbox1.checked == true)
  {     
      var a=1+JSON.parse(localStorage.getItem('a11'));
      var b=0+JSON.parse(localStorage.getItem('b11'));
      localStorage.a12=a;
      localStorage.b12=b;
     
      return true;
    }

      else if(frm.checkbox2.checked == true)
      {
         var b=1+JSON.parse(localStorage.getItem('b11'));
         var a=0+JSON.parse(localStorage.getItem('a11'));
        localStorage.a12=a;
        localStorage.b12=b;
          return true;
         }
        alert("Kindly choose one answer");
        return false;
        }
      
     function hb5(){
  
      if(frm.checkbox1.checked==true&frm.checkbox2.checked==true ){
       
       alert("kindly choose one answer");
       return false;


      }
           if(frm.checkbox1.checked == true)
  {     
      var a=1+JSON.parse(localStorage.getItem('a12'));
      var b=0+JSON.parse(localStorage.getItem('b12'));
      localStorage.a13=a;
      localStorage.b13=b;

      
        if( a>b)
         {
            var p=0          
            var j=1
            localStorage.percieving=p;
            localStorage.juding=j;
         
              }
          else{
           var p=1;
           var j=0;
            localStorage.percieving=p;
            localStorage.juding=j; 
                  
               } 
      return true;
    }

      else if(frm.checkbox2.checked == true)
      {
         var a=0+JSON.parse(localStorage.getItem('a12'));  
         var b=1+JSON.parse(localStorage.getItem('b12'));
         localStorage.b13=b;
         localStorage.a13=a;
        
            if( a>b)
         { 
            
            var p=0; 
            var j=1;
            localStorage.percieving=p;
            localStorage.juding=j;
         
          }
          else{

           var p=1;
           var j=0;
           localStorage.percieving=p;
           localStorage.juding=j;
         
           } 
                 
              return true;
         }
        alert("Kindly choose one answer");
        return false;
        }
 function hb6(){
  
      if(frm.checkbox1.checked==true&frm.checkbox2.checked==true ){
       
       alert("kindly choose one answer");
       return false;


      }

     if(frm.checkbox1.checked == true)
  {     
           a=1;
           b=0;

          localStorage.a21=a;
          localStorage.b21=b; 
      //we use local storage of both here so that a fixed and a correct value is assigned to them.
         
    return true;
    }

      else if(frm.checkbox2.checked == true)
      {
            a=0;
            b=1;
            
       localStorage.a21=a;
       localStorage.b21=b; 
       
 

              return true;
         }

        alert("Kindly choose one answer");
        return false;
        }
         function hb7(){
  
      if(frm.checkbox1.checked==true&frm.checkbox2.checked==true ){
       
       alert("kindly choose one answer");
       return false;


      }
           if(frm.checkbox1.checked == true)
  {     
      var a=1+JSON.parse(localStorage.getItem('a21'));
      var b=0+JSON.parse(localStorage.getItem('b21'));
      localStorage.a22=a;
      localStorage.b22=b;
     
      return true;
    }

      else if(frm.checkbox2.checked == true)
      {
         var b=1+JSON.parse(localStorage.getItem('b21'));
         var a=0+JSON.parse(localStorage.getItem('a21'));
        localStorage.a22=a;
        localStorage.b22=b;
          return true;
         }
        alert("Kindly choose one answer");
        return false;
        }
  function hb8(){
  
      if(frm.checkbox1.checked==true&frm.checkbox2.checked==true ){
       
       alert("kindly choose one answer");
       return false;


      }
           if(frm.checkbox1.checked == true)
  {     
      var a=1+JSON.parse(localStorage.getItem('a22'));
      var b=0+JSON.parse(localStorage.getItem('b22'));
      localStorage.a23=a;
      localStorage.b23=b;

      
        if( a>b)
         {
            var n=0          
            var s=1
            localStorage.intution=n;
            localStorage.sensing=s;
                          
            }
          else{
           var n=1;
           var s=0;
            localStorage.intution=n;
            localStorage.sensing=s;
                  
               } 
      return true;
    }

      else if(frm.checkbox2.checked == true)
      {
         var a=0+JSON.parse(localStorage.getItem('a22'));  
         var b=1+JSON.parse(localStorage.getItem('b22'));
         localStorage.b23=b;
         localStorage.a23=a;
        
            if( a>b)
         { 
            
            var n=0; 
            var s=1;
            localStorage.intution=n;
            localStorage.sensing=s;
         
          }
          else{

           var n=1;
           var s=0;
           localStorage.intution=n;
           localStorage.sensing=s;
         
           } 
                 
              return true;
         }
        alert("Kindly choose one answer");
        return false;
        }
     function hb9(){
  
      if(frm.checkbox1.checked==true&frm.checkbox2.checked==true ){
       
       alert("kindly choose one answer");
       return false;


      }

     if(frm.checkbox1.checked == true)
  {     
           a=1;
           b=0;

          localStorage.a31=a;
          localStorage.b31=b; 
      //we use local storage of both here so that a fixed and a correct value is assigned to them.
         
    return true;
    }

      else if(frm.checkbox2.checked == true)
      {
            a=0;
            b=1;
            
       localStorage.a31=a;
       localStorage.b31=b; 
       
 

              return true;
         }

        alert("Kindly choose one answer");
        return false;
        }

      function hb10(){  

      if(frm.checkbox1.checked==true&frm.checkbox2.checked==true ){
       
       alert("kindly choose one answer");
       return false;


      }        
         if(frm.checkbox1.checked == true)
  {     
      var a=1+JSON.parse(localStorage.getItem('a31'));
      var b=0+JSON.parse(localStorage.getItem('b31'));
      localStorage.a32=a;
      localStorage.b32=b;
     
      return true;
    }

      else if(frm.checkbox2.checked == true)
      {
         var b=1+JSON.parse(localStorage.getItem('b31'));
         var a=0+JSON.parse(localStorage.getItem('a31'));
        localStorage.a32=a;
        localStorage.b32=b;
          return true;
         }
        alert("Kindly choose one answer");
        return false;
        }
function hb11(){  

      if(frm.checkbox1.checked==true&frm.checkbox2.checked==true ){
       
       alert("kindly choose one answer");
       return false;


      }  
         if(frm.checkbox1.checked == true)
  {     
      var a=1+JSON.parse(localStorage.getItem('a32'));
      var b=0+JSON.parse(localStorage.getItem('b32'));
      localStorage.a33=a;
      localStorage.b33=b;

      
        if( a>b)
         {
            var f=0;          
            var t=1;
            
            localStorage.feeling=f;
            localStorage.thinking=t;
                          
            }
          else{
           var f=1;
           var t=0;
           
            localStorage.feeling=f;
            localStorage.thinking=t;
                  
               } 
      return true;
    }

      else if(frm.checkbox2.checked == true)
      {
         var a=0+JSON.parse(localStorage.getItem('a32'));  
         var b=1+JSON.parse(localStorage.getItem('b32'));
         localStorage.b33=b;
         localStorage.a33=a;
        
            if( a>b)
         { 
            
            var f=0; 
            var t=1;
            localStorage.feeling=f;
          localStorage.thinking=t;
         
          }
          else{

           var f=1;
           var t=0;
           localStorage.feeling=f;
           localStorage.thinking=t;
         
           } 
                 
              return true;
         }
        alert("Kindly choose one answer");
        return false;
        }
  
   function hey(){
  var e,i,j,p,s,n,t,f;
  e=JSON.parse(localStorage.getItem('extrovert'));
  i=JSON.parse(localStorage.getItem('introvert'));
  j=JSON.parse(localStorage.getItem('juding'));
  p=JSON.parse(localStorage.getItem('percieving'));
  s=JSON.parse(localStorage.getItem('sensing'));
  n=JSON.parse(localStorage.getItem('intution'));
  t=JSON.parse(localStorage.getItem('thinking'));
  f=JSON.parse(localStorage.getItem('feeling'));
  if(i==1&&f==1&&j==1&&s==1){
    window.open("../carer/isfj.html");
  }
   else if(i==1&&s==1&&t==1&&j==1){

   window.open("../carer/istj.html"); 
  }  
 else if(i==1&&n==1&&f==1&&j==1){
   window.open("../carer/infj.html");

 }
 else if(i==1&&n==1&&t==1&&j==1){
  window.open("../carer/intj.html");
 }
  else if(i==1&&s==1&&t==1&&p==1){
window.open("../carer/istp.html");

  }       
else if(i==1&&s==1&&f==1&&p==1){
window.open("../carer/isfp.html");

}
else if(i==1&&n==1&&f==1&&p==1){
window.open("../carer/infp.html");  
}
 else if(i==1&&n==1&&t==1&&p==1){
 window.open("../carer/intp.html"); 
 }
else if(e==1&&s==1&&t==1&&p==1){
 window.open("../carer/estp.html");
 }

else if(e==1&&s==1&&f==1&&p==1){
  window.open("../carer/esfp.html");
}
else if(e==1&&n==1&&f==1&&p==1){
 window.open("../carer/enfp.html"); 
}
else if(e==1&&n==1&&t==1&&p==1){
window.open("../carer/entp.html");
}
else if(e==1&&s==1&&t==1&&j==1){
 window.open("../carer/estj.html"); 
}
 else if(e==1&&s==1&&f==1&&j==1){
 window.open("../carer/esfj.html"); 
 }
 else if(e==1&&n==1&&f==1&&j==1){
  window.open("../carer/enfj.html");
 }
else if(e==1&&n==1&&t==1&&j==1){
  window.open("../carer/entj.html");
}




}

