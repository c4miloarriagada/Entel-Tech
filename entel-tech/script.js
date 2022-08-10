const form = document.getElementById("form");
const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");
const color = document.getElementById("color");

const autos = ["Audi", "Chevrolet", "Hyundai", "Honda"];
const modelos = ["A3", "A4", "Aveo", "Cruze", "Getz", "i30", "City", "Civic"];
const colores = ["Azul", "Blanco", "Rojo", "Cafe"];

const showSelect = (select, html) => {
  let element = "<option selected disables></option>";
  select.map((e) => (element += `<option value=${e}>${e}</option>`));
  html.innerHTML = element;
};

showSelect(autos, marca);
showSelect(colores, color);

marca.addEventListener("change",  () => {
  let value = marca.value;
  switch (value) {
    case "Audi":
      let audi = modelos.slice(0, 2);
      showSelect(audi, modelo);
      break;
    case "Chevrolet":
      let chevrolet = modelos.slice(2, 4);
      showSelect(chevrolet, modelo);
      break;
    case "Hyundai":
      let hyundai = modelos.slice(4, 6);
      showSelect(hyundai, modelo);
      break;
    case "Honda":
      let honda = modelos.slice(6, 8);
      showSelect(honda, modelo);
    default:
      break;
  }
});

const formInputs = () => {
  const formLocalStorage = JSON.parse(localStorage.getItem("form")) || [];

  let name = form.nombre.value;
  let rut = form.rut.value;
  let patente = form.patente.value;
  let marca = form.marca.value;
  let modelo = form.modelo.value;
  let color = form.color.value;

  if (!name.match(/^[a-zA-Z\s]*$/)) return alert("Nombre debe ser valido");
  else if (name.trim().length === 0) return alert("Nombre debe ser valido");
  else if (!rut.match(/^[0-9]+$/))
    return alert("Rut solo debe contener numeros");
  else if (rut.length < 8) return alert("Rut debe ser valido");
  else if (patente.length !== 6) return alert("Patente debe ser completado");
  else if (!marca || !modelo || !color)
    return alert("Debe llenar todo el formulario para continuar");

  const formComplete = [
    {
      name: name,
      rut: rut.replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4"),
      patente: patente.toUpperCase().trim(),
      marca: marca,
      modelo: modelo,
      color: color,
    },
  ];

  formLocalStorage.push(formComplete);

  localStorage.setItem("form", JSON.stringify(formLocalStorage));

  form.reset();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
