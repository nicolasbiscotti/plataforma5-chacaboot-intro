const container = document.querySelector(".container");
const button = document.querySelector("button");
const input = document.querySelector("input");
const spanCiudad = document.querySelector("#ciudad");
const spanTemperatura = document.querySelector("#temperatura");
const iconImg = document.querySelector("#wicon");
const spanDescripcion = document.querySelector("#descripcion");

let ciudad = null;

button.addEventListener("click", cargarCiudad);

function cargarCiudad() {
  ciudad = input.value;

  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ciudad +
    "&units=metric&appid=fdd533266e28101881f610f2b8f1ebe1";

  $.getJSON(url, function (data) {
    console.log(data);
    let temp = Math.round(data.main.temp) + "<sup>°C</sup>";
    let codigo = data.weather[0].icon;
    console.log(codigo);
    let iconUrl = "http://openweathermap.org/img/wn/" + codigo + "@2x.png";
    let descripcion = data.weather[0].description;

    spanCiudad.textContent = data.name;
    spanTemperatura.innerHTML = temp;
    iconImg.src = iconUrl;
    spanDescripcion.textContent = descripcion;
  });

  container.style.visibility = "visible";
}
