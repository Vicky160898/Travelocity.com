let form = document.querySelector("form");

let Detail=JSON.parse(localStorage.getItem("data")) || [];
  
 form.addEventListener("submit",function(event){
    event.preventDefault();

    if( Detail.length === 0){
        alert("No user signup");
        return;
    }
    let obj1={
        email:form.email.value,
        password:form.password.value,
    }
    let Details1=false;
    Detail.forEach(function(el){
        if(el.personemail === obj1.email && el.prpassword === obj1.password){
            Details1=true;
            localStorage.setItem("final",JSON.stringify(el));
            alert("Succefully Log In");
            window.location.href="index.html"
           
        }
    })
    if(Details1===false){ 
    alert("User Does Not Exist")
    }
  });
  document.getElementById("eye").addEventListener("click",function()
  {
      if(document.getElementById("password").type=="password")
      {
          document.getElementById("password").type ="text";
      }else{
          document.getElementById("password").type ="password";
      }
  });