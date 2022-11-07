// boton reestablecer
let boton = document.getElementById("reestablecer_btn");
boton.addEventListener("click", (e) => {
  document.getElementById("form_afiliacion").reset();
  // console.log("reseteando");
});

let numero = 0;
// estilos ordenados
let boton2 = document.getElementById("estilos_btn");
boton2.addEventListener("click", () => {
  numero++;
  console.log(numero);
  let estilos = document.getElementsByTagName("link")[0];
  if (numero == 0) {
    estilos.setAttribute("href", "./static/css/estilos.css");
  } else if (numero == 1) {
    estilos.setAttribute("href", "./static/css/retro.css");
    // cambiando titulo
    let titulo = document.getElementById("titulo_pagina");
    titulo.innerHTML = "Mundo Retro";
    console.log(titulo);
    // haciendo visible actividades
    let fieldsetFuturo = document.getElementsByClassName("futuro");
    fieldsetFuturo.className += "visible";
  } else if (numero == 2) {
    estilos.setAttribute("href", "./static/css/futuro.css");
    // cambiando titulo
    let titulo = document.getElementById("titulo_pagina");
    titulo.innerHTML = "Bienvenido al futuro";
    console.log(titulo);
    // haciendo visible actividades
  } else if (numero == 3) {
    numero = 0;
    estilos.setAttribute("href", "./static/css/estilos.css");
    let titulo = document.getElementById("titulo_pagina");
    titulo.innerHTML = "Veni al Gym!💪";
    console.log(titulo);
  }
});

//Bonus 1 estilos aleatorios
let aleatorios = document.getElementById("aleatorio_btn");
aleatorios.addEventListener("click", () => {
  let estilos = document.getElementsByTagName("link")[0];
  // console.log(estilos);
  let numero = Math.random() * 100;
  console.log(numero);
  if (numero < 33) {
    estilos.setAttribute("href", "./static/css/futuro.css");
    // cambiando titulo
    let titulo = document.getElementById("titulo_pagina");
    titulo.innerHTML = "Bienvenido al futuro";
  } else if ((numero > 33) & (numero < 66)) {
    estilos.setAttribute("href", "./static/css/retro.css");
    // cambiando titulo
    let titulo = document.getElementById("titulo_pagina");
    titulo.innerHTML = "Mundo Retro";
  } else {
    estilos.setAttribute("href", "./static/css/estilos.css");
    let titulo = document.getElementById("titulo_pagina");
    titulo.innerHTML = "Veni al Gym!💪";
  }
});

//Bonus 3 Select
let bonus3 = document.getElementById("Estilos-Bonus-3");
bonus3.addEventListener("click", (e) => {
  let estilos = document.getElementsByTagName("link")[0];
  console.log(bonus3);
  if (e.target.value == "Original") {
    estilos.setAttribute("href", "./static/css/estilos.css");
    let titulo = document.getElementById("titulo_pagina");
    titulo.innerHTML = "Veni al Gym!💪";
  } else if (e.target.value == "Retro") {
    estilos.setAttribute("href", "./static/css/retro.css");
    // cambiando titulo
    let titulo = document.getElementById("titulo_pagina");
    titulo.innerHTML = "Mundo Retro";
  } else if (e.target.value == "Futuro") {
    estilos.setAttribute("href", "./static/css/futuro.css");
    // cambiando titulo
    let titulo = document.getElementById("titulo_pagina");
    titulo.innerHTML = "Bienvenido al futuro";
  } else if (e.target.value == "SinCss") {
    estilos.setAttribute("href", "./static/css/sin.css");
  }
});

// cambiando fondo de legend al desencaddenarse el foco
const inputs = document.getElementsByTagName("input");
// console.log(inputs);

// efecto focus de los inputs
for (let inp = 0; inp < inputs.length; inp++) {
  inputs[inp].addEventListener("focus", () => {
    if (inp <= 5) {
      let legend = document.getElementsByTagName("legend");
      legend[0].style.background = "#2d3c39";
    } else if ((inp >= 6) & (inp <= 7)) {
      let legend = document.getElementsByTagName("legend");
      legend[1].style.background = "#2d3c39";
    } else {
      let legend = document.getElementsByTagName("legend");
      legend[2].style.background = "#2d3c39";
    }
  });
}

// efecto blur de los inputs
for (let inp = 0; inp < inputs.length; inp++) {
  inputs[inp].addEventListener("blur", () => {
    let legend = document.getElementsByTagName("legend");
    legend[0].style.background = "#4b6963";
    legend[1].style.background = "#4b6963";
    legend[2].style.background = "#4b6963";
  });
}

// efecto focus textarea
const textarea = document.getElementsByTagName("textArea");
for (let inp = 0; inp < textarea.length; inp++) {
  textarea[inp].addEventListener("focus", () => {
    console.log("se hizo foco");
    let legend = document.getElementsByTagName("legend");
    legend[0].style.background = "#2d3c39";
  });
}

// efecto blur  textarea
for (let inp = 0; inp < textarea.length; inp++) {
  textarea[inp].addEventListener("blur", () => {
    let legend = document.getElementsByTagName("legend");
    legend[0].style.background = "#4b6963";
  });
}
