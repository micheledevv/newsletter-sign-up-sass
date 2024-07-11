(function () {
  emailjs.init({
      publicKey: "8MwpHkxQkI1iLptsP",
  });
})();

document.getElementById("form").addEventListener("submit", function (e) {
  const regForm =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let inputElement = document.querySelector("input");
  let statusEmail = document.querySelector("#box_input form #status_email p");
  console.log(statusEmail);

  let valueInput = inputElement.value;

  e.preventDefault();

  console.log(valueInput);

  if (valueInput.match(regForm)) {
    console.log("Email corretta");
    inputElement.value = "";
    statusEmail.innerHTML = "Email valida";
    statusEmail.style.color = "green";

    let objMail = {
      email: inputElement.value,
    };

    emailjs
      .send("service_tz44hoo","template_1fpv8qa", objMail)
      .then((res) => console.log(res));
  } else {
    console.log("Email sbagliata");
    inputElement.value = "";
    statusEmail.innerHTML = "Email non valida";
    statusEmail.style.color = "red";
  }
});
