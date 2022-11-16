const joinForm = document.getElementById("join-form");
const emailRegEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const emptyMessage = " cannot be empty";
const invalidEmailMessage = "Looks like this is not an email";


//dodanie za każdym inputem pustej wiadomości
const inputs = joinForm.querySelectorAll(".input-wrapper input");
inputs.forEach(input => {
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    input.parentNode.insertBefore(errorMessage, input.nextElementSibling)
});

function addErrorIcon(checkingInput){
        let errorImage = document.createElement("img");
        errorImage.classList.add("error-icon");
        errorImage.src = "images/icon-error.svg";
        checkingInput.parentNode.insertBefore(errorImage, checkingInput)
}


function emptyInput (checkingInput){
    if (!checkingInput.classList.contains("invalid")){
        checkingInput.classList.add("invalid");
        addErrorIcon(checkingInput);
        checkingInput.nextElementSibling.textContent = checkingInput.name + emptyMessage;
    } else{
        checkingInput.nextElementSibling.textContent = checkingInput.name + emptyMessage;
    }
}

function filledInput (checkingInput){
    if(checkingInput.name == "Email Address") {
        if (emailRegEx.test(checkingInput.value)){
            checkingInput.classList.remove("invalid");
            checkingInput.previousSibling.remove();
            checkingInput.nextElementSibling.textContent = "";
        }else{
            if (checkingInput.classList.contains("invalid")){
                checkingInput.nextElementSibling.textContent = invalidEmailMessage;
            } else{
                checkingInput.classList.add("invalid");
                checkingInput.nextElementSibling.textContent = invalidEmailMessage;
                addErrorIcon(checkingInput);
            }
        }
    } else{
        checkingInput.classList.remove("invalid");
        checkingInput.nextElementSibling.textContent = "";
        if(checkingInput.previousSibling){
            checkingInput.previousSibling.remove();
        }
    }
}


joinForm.addEventListener("submit", () =>{

    const inputs = joinForm.querySelectorAll(".input-wrapper input");

    inputs.forEach(input => {
        if (input.value == ""){
            emptyInput (input);
        }else{
            filledInput (input);
        }
    });

})