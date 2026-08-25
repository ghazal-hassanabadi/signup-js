const emailInput = document.getElementById("email");

emailInput.addEventListener("input",
     function() {
  console.log(emailInput.value);

  console.log(emailInput.value.includes("@") && emailInput. value.includes(".com")); 

}





);

