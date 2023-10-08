var button = document.getElementById('sendMessageButton');
var inputName = document.getElementById('name');
var inputEmail = document.getElementById('email');
var inputPhone = document.getElementById('phone');
var inputMessage = document.getElementById('message');
button.addEventListener("click",function(){
    if(inputName.value.length === 0){
        document.getElementById("name-helper-name").innerHTML = `<ul><li> Please enter your name. </li></ul>`;
    }
    if(inputEmail.value.length === 0){
        document.getElementById("name-helper-email").innerHTML = `<ul><li> Please enter your rmail address. </li></ul>`;
    }
    if(inputPhone.value.length === 0){
        document.getElementById("name-helper-phone").innerHTML = `<ul><li> Please enter your phone number. </li></ul>`;
    }
    if(inputMessage.value.length === 0){
        document.getElementById("name-helper-message").innerHTML = `<ul><li> Please enter a message. </li></ul>`;
    }

});

inputName.addEventListener("input",function(){
    if(inputName.value.length > 0){
        document.getElementById('labelName').classList.add("floating-label-form-group-with-value");
        document.getElementById("name-helper-name").innerHTML = ``;
    }
    else{
        document.getElementById('labelName').classList.remove("floating-label-form-group-with-value");
        
    }
});
inputEmail.addEventListener("input",function(){
    if(inputEmail.value.length > 0){
        document.getElementById('labelEmail').classList.add("floating-label-form-group-with-value");
        if(inputEmail.value.includes("@gmail.com") || inputEmail.value.includes("@hotmail.com")){
            document.getElementById("name-helper-email").innerHTML = ``;
            
        }
        else{      
            document.getElementById("name-helper-email").innerHTML = `<ul><li>Not a valid email address</li></ul>`;
        }
        
    }
    else{
        document.getElementById('labelEmail').classList.remove("floating-label-form-group-with-value");
        
    }

});
inputPhone.addEventListener("input",function(){
    if(inputPhone.value.length > 0){
        document.getElementById('labelPhone').classList.add("floating-label-form-group-with-value");
        document.getElementById("name-helper-phone").innerHTML = ``;
    }
    else{
        document.getElementById('labelPhone').classList.remove("floating-label-form-group-with-value");
        
    }

});
inputMessage.addEventListener("input",function(){
    if(inputMessage.value.length > 0){
        document.getElementById('labelMessage').classList.add("floating-label-form-group-with-value");
        document.getElementById("name-helper-message").innerHTML = ``;
    }
    else{
        document.getElementById('labelMessage').classList.remove("floating-label-form-group-with-value");
        
    }

});

function CollapseButton(){
            
    var content = document.getElementById('navigation');
    if (content.classList.contains("visible")) {
        content.classList.remove("visible");
    } else {
        content.classList.add("visible");
    }   
}