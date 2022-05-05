//funcionamento da calculadora

function insert(num) {
  let numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
}

function back() {
  let resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  let resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
    document.getElementById("resultado").innerHTML = "";
  }
}

//troca de temas

let two = document.getElementById("two");
two.addEventListener("click", function () {
  let body = document.querySelector("body");
  let toggle = document.getElementById("circle");
  body.classList.add("active1");
  body.classList.remove("active2");
  toggle.style.left = "33%";
});

let one = document.getElementById("one");
one.addEventListener("click", function () {
  let body = document.querySelector("body");
  let toggle = document.getElementById("circle");
  body.classList.remove("active1");
  body.classList.remove("active2");
  toggle.style.left = "0";
});

let three = document.getElementById("three");
three.addEventListener("click", function () {
  let body = document.querySelector("body");
  let toggle = document.getElementById("circle");
  body.classList.add("active2");
  body.classList.remove("active1");
  toggle.style.left = "65%";
});
