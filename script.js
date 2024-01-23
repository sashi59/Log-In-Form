var display = document.querySelector("h6")
function Submission(){
    if(document.querySelector("#Username").value == ""){
        display.innerHTML = "Enter your Username"
        display.style.opacity = 1
        return false;
    }
    
}
setTimeout(function(){
    display.style.opacity = 0
},5000);