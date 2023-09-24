window.addEventListener("scroll",function()
{
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})
 
let button = document.querySelector("body div a");
button.addEventListener("click", ()=>{
    alert("success");
})


function myFunction(){
    var element = document.getElementById("form-id");
    element.reset();
    alert("Your message has been Send Successfully");
} 