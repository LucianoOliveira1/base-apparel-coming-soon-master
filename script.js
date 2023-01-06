let email_check = document.querySelector("#mail");
let error_massage = document.querySelector(".error_message");
let error_icon = document.querySelector(".icon_error");

function erro(){
    if(email_check.validity.valid === false){
        error_massage.style.display = "block";
        error_icon.style.display = "block";
        email_check.style.outlineColor = "hsl(0, 93%, 68%)";
    }else{
        error_massage.style.display = "none";
        error_icon.style.display = "none";
        sub.formAction;
    }
}
