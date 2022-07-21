document.getElementById("eye").addEventListener("click",function()
{
    if(document.getElementById("password").type=="password")
    {
        document.getElementById("password").type ="text";
    }else{
        document.getElementById("password").type ="password";
    }
});

document.querySelector("form").addEventListener("submit",fill);

let Detail=JSON.parse(localStorage.getItem("data")) || [];
     
function fill(event){ 
    
    event.preventDefault();
    let obj={
     personname:document.querySelector("#name").value,
     personemail : document.querySelector("#email").value,
     prpassword : document.querySelector("#password").value
    };
    if(obj.personname !="" && obj.personemail !="" && obj.prpassword !="" ){ 
           
           alert("Successfully signed up");
            window.location.href ="login.html";
        }
         else if(obj.personname =="" || obj.personemail =="" || obj.prpassword==""){
            
            alert("Please Enter All the Details");
        }
        else{
            alert("Please Enter All the Details correct");
         }
        
    Detail.push(obj);
    localStorage.setItem("data",JSON.stringify(Detail));


}


