let input = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");

botonAgregar.addEventListener("click", chequearInput);

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }

  crearDiv(nuevaTarea) {
    let inputItem = document.createElement("input");
    inputItem.disabled = true;
    inputItem.classList.add("item-input");
    inputItem.value = nuevaTarea;

    let item = document.createElement("div");
    item.classList.add("item");

    let botonEditar = crearBoton("<i class='fas fa-lock'></i>", "boton-editar");
    let botonRemover = crearBoton(
      "<i class='fas fa-trash'></i>",
      "boton-remover"
    );

    botonEditar.addEventListener("click", function () {
      if (inputItem.disabled === true) {
        botonEditar.innerHTML = "<i class='fa-solid fa-lock-open'></i>";
        inputItem.disabled = false;
      } else {
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        inputItem.disabled = true;
      }
    });

    botonRemover.addEventListener("click", function () {
      container.removeChild(item);
    });

    item.appendChild(inputItem);
    item.appendChild(botonEditar);
    item.appendChild(botonRemover);

    container.appendChild(item);

    // console.log(item);
    // console.log(inputItem);
  }
}

function chequearInput() {
  let tituloDeTarea = input.value;
  if (tituloDeTarea !== "") {
    new Item(tituloDeTarea);
    input.value = "";
  }
}

console.log(input);

function crearBoton(icono, clase) {
  let boton = document.createElement("button");
  boton.innerHTML = icono;
  boton.classList.add(clase);
  return boton;
}
