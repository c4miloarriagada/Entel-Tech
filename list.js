let database = JSON.parse(localStorage.getItem("form")) || [];
const tbodyEl = document.querySelector("tbody");
const total = document.getElementById("total");
let totalPage = 0;

const loadTable = (database) => {
  database = database.slice(0, 10);
  let html = "";
  for (const row of database) {
    html += `
        <tr>
        <td>${row[0].name}</td>
        <td>${row[0].rut}</td>
        <td>${row[0].patente}</td>
        <td>${row[0].marca}</td>
        <td>${row[0].modelo}</td>
        <td>${row[0].color}</td>
        <td><img class='icon' onClick='deleteRow(${totalPage})' id='icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKlJREFUSEvtlcERQDAQRZ9KlIBOlEIFlKQUOqASJjM4hJ0fIje5ZTbZ9//uJJuReGWJ86MANdABpSFkBlpgsIQqgEuQC5cjUL0FrPtFS4iKyxKpBCp+ARwXYnt/OvatJwccyqV1z6J5/nXzvgb4CtX+5Ic6UAmjS/QDLu/qaUn+HsivKbpEivAYEDJofOh0N/msl+xGZQ8USvoeX4DmbnSqkRmY3z6WHLABUDk4GfuOp84AAAAASUVORK5CYII="/></td> 
        </tr>
        `;
    totalPage++;
  }

  tbodyEl.innerHTML = html;
};

loadTable(database);

let text = `Mostrando registros del 1 al ${totalPage} de un total de ${database.length} registros`;
total.innerHTML = text;

const deleteRow = (id) => {
  delete database[id];
  database = database.filter((e) => e !== null);
  localStorage.setItem("form", JSON.stringify(database));
  window.location.reload();
};
