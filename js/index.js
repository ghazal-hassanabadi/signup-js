const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const form = document.getElementById("signupForm");



const passwordIcon = togglePassword.querySelector("i");
const confirmPasswordIcon = toggleConfirmPassword.querySelector("i");


emailInput.addEventListener("input",
     function() {

        if (emailInput.value.includes("@") && emailInput.value.includes(".com"))
             {
           emailError.textContent = "";
             }

         else {
             emailError.textContent = "ایمیل معتبر نیست";
              }     
  


}



 
);


passwordInput.addEventListener("input", 
    function() {

      if (passwordInput.value.length >= 6) 
        {
         passwordError.textContent = "";
        }
     else {
         passwordError.textContent = "رمز باید حداقل ۶ کاراکتر باشد";
          }

}

);


confirmPasswordInput.addEventListener("input", 
    function() {

      if (confirmPasswordInput.value === passwordInput.value)
        {
          confirmPasswordError.textContent = "";
        } 
      else {
          confirmPasswordError.textContent = "رمزها یکسان نیستند";
           }

}

);


form.addEventListener("submit", 
    function(event) {
       event.preventDefault();

       if (

         emailInput.value.includes("@") &&
         emailInput.value.includes(".com") &&
         passwordInput.value.length >= 6 &&
         confirmPasswordInput.value === passwordInput.value

          ) 

          {
            console.log("ثبت‌نام موفق بود!");
          
        }
         else {
          console.log("لطفاً فیلدها را درست پر کنید");
        }
}

);









togglePassword.addEventListener("click", 
    function() {

  if (passwordInput.type === "password") 
    {
       passwordInput.type = "text";
       passwordIcon.classList.remove("fa-eye");
       passwordIcon.classList.add("fa-eye-slash");
  }
   else {
       passwordInput.type = "password";
       passwordIcon.classList.remove("fa-eye-slash");
       passwordIcon.classList.add("fa-eye");
  }

}

);


toggleConfirmPassword.addEventListener("click", 
    function() {

  if (confirmPasswordInput.type === "password")
     {
       confirmPasswordInput.type = "text";
       confirmPasswordIcon.classList.remove("fa-eye");
       confirmPasswordIcon.classList.add("fa-eye-slash");
     }
   else {
        confirmPasswordInput.type = "password";
        confirmPasswordIcon.classList.remove("fa-eye-slash");
        confirmPasswordIcon.classList.add("fa-eye");
        }

}

);

