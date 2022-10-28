const partidos_container = document.querySelector('.partidos-container');
const partidos_container_title = partidos_container.previousSibling;

let today = new Date();
const grupos_date = new Date("2022/11/20");
const octavos_date = new Date("2022/12/03");
const cuartos_date = new Date("2022/12/09");
const semifinales_date = new Date("2022/12/13");
const finales_date = new Date("2022/12/18");
partidos_container_title.innerHTML = "Partidos de grupos";


getPositionValues();

//20 de noviembre : grupos
if(Date.parse(today) <= Date.parse(grupos_date)){
  getPartidos('getPartidos/?etapa=Grupos');
}
//3 de Diciembre: octavos
if(Date.parse(today) >= Date.parse(octavos_date)){
  partidos_container_title.innerHTML = "Partidos de octavos";
  getPartidos('getPartidos/?etapa=Octavos');
}
//9 de Diciembre: cuartos
if(Date.parse(today) >= Date.parse(cuartos_date)){
  partidos_container_title.innerHTML = "Partidos de cuartos";
  getPartidos('getPartidos/?etapa=Cuartos');
}
//13 de Diciembre: semifinales
if(Date.parse(today) >= Date.parse(semifinales_date)){
  partidos_container_title.innerHTML = "Partidos de semifinales";
  getPartidos('getPartidos/?etapa=Semifinal');
}

//18 de Diciembre: Final
if(Date.parse(today) >= Date.parse(finales_date)){
  partidos_container_title.innerHTML = "Partidos de finales";
  getPartidos('getPartidos/?etapa=Final');
}

function createMatchesCards(matches, matches_container){
  matches.forEach(match => {
    const table = document.createElement('table');
    table.className = 'card-table-match';
    table.innerHTML = `
      <tr>
        <th class="table-head match-id"></th>
        <th class="table-head">${match.equipo_a}</th>
        <th class="table-head">${match.equipo_b}</th>
      </tr>
      <tr>
        <th class="table-head">Puntos</th>
        <td>${match.puntos_a}</td>
        <td>${match.puntos_b}</td>
      </tr>
      <tr>
        <th class="table-head">Goles</th>
        <td>${match.goles_a}</td>
        <td>${match.goles_b}</td>
      </tr>
      <tr>
        <th class="table-head">Fecha</th>
        <td colspan="2">${match.fecha}</td>
      </tr>
      <tr>
        <th class="table-head">Etapa</th>
        <td colspan="2">${match.etapa}</td>
      </tr>
    `;
    table.id = match.id;
    matches_container.append(table);
  });
}

async function getPositionValues(){
  const inputs = document.getElementsByTagName('input');
  const res = await fetch('/admin/get-positions');
  const values = await res.json();

  const inputs_array = Array.from(inputs);

  inputs_array.forEach(element => {
    element.value = values[element.id];
  });
}

async function getPartidos(url){
  const response = await fetch(url);
  const data = await response.json();

  createMatchesCards(data, partidos_container);
}