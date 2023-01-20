const form = document.querySelector("#form");
const erroNome = document.getElementById("erroNome");
const erroEmail = document.getElementById("erroEmail");
const erroPhone = document.getElementById("erroPhone");
const erroCPF = document.getElementById("erroCPF");
const erroPassword = document.getElementById("erroPassword");
const sucess = document.getElementById("sucess");

const nome = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const cpf = document.getElementById("CPF");
const senha = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (nome.value === "") {
    erroNome.style.display = "block";
  } else {
    erroNome.style.display = "none";
  }

  if (email.value === "") {
    erroEmail.style.display = "block";
  } else {
    erroEmail.style.display = "none";
  }

  if (phone.value === "") {
    erroPhone.style.display = "block";
  } else {
    erroPhone.style.display = "none";
  }

  if (cpf.value === "") {
    erroCPF.style.display = "block";
  } else {
    erroCPF.style.display = "none";
  }

  if (senha.value === "") {
    erroPassword.style.display = "block";
  } else {
    erroPassword.style.display = "none";
  }

  if (
    nome.value != "" &&
    email.value != "" &&
    phone.value != "" &&
    cpf.value != "" &&
    senha.value != ""
  ) {
    sucess.style.display = "block";
    erroNome.style.display = "none";
    erroEmail.style.display = "none";
    erroPhone.style.display = "none";
    erroCPF.style.display = "none";
    erroPassword.style.display = "none";
  } else {
    sucess.style.display = "none";
  }
});
