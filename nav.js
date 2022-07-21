let form = document.querySelector("#form");

let details=JSON.parse(localStorage.getItem("data")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault()

    let obj = {
        name :document.querySelector("#name").value,
        start :document.querySelector("#date-start").value,
        end :document.querySelector("#date-end").value,
        room :document.querySelector("#room").value
    }
    if(obj.name == "" || obj.room == "")
    {
        alert("Please select the destination")
    }else
    { 
    details.push(obj);
    localStorage.setItem("data",JSON.stringify(details));
    alert("Choose Place")
    window.location.href="place.html";
    }
    
})
let data = document.querySelector(" button");

data.addEventListener("click",function(){
    window.location.href="place.html";
})