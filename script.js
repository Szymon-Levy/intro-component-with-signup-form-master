const joinForm = document.getElementById("join-form");
const emailRegEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;


joinForm.addEventListener("submit", () =>{
    const inputs = joinForm.querySelectorAll(".input-wrapper input");

    inputs.forEach(input => {
        if (input.value == ""){
            input.classList.add("invalid");
            const errorImage = document.createElement("img");
            errorImage.classList.add("error-icon");
            errorImage.src = "images/icon-error.svg";
            input.after(errorImage);
            
        }else{
            input.classList.remove("invalid");
            input.nextElementSibling.remove();
        }
    });

})