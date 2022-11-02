const container_grupos = document.getElementById('container-grupos');
const container_octavos = document.getElementById('container-octavos');
const container_cuartos = document.getElementById('container-cuartos');
const container_semifinal = document.getElementById('container-semifinal');
const container_final = document.getElementById('container-final');
const correoUser = document.getElementsByTagName('body').item(0);

//Buttons
const btnGrupos = document.getElementById('postGrupos');
const btnOctavos = document.getElementById('postOctavos');
const btnCuartos = document.getElementById('postCuartos');
const btnSemifinal = document.getElementById('postSemi');
const btnFinal = document.getElementById('postFinal');

import { createPartidosCards }  from './pronosticos-functions.js';

let today = new Date();

//Si la fecha es mayor o igual al 20 de noviembre y menor a 3 de diciembre: fetch(grupos)
if(today < new Date('2022/12/03')){
  getPartidos('/get-partidos/grupos')
    .then(data => {
      const cards = createPartidosCards(data, correoUser.id);
      console.log(cards.length);

      cards.forEach(card => {
        container_grupos.append(card);
      })
    })
    .catch(err => console.log(err));
}

//Si la fecha es mayor o igual al 3 de diciembre y menor a  9 de diciembre: fetch(octavos)
if(today >= new Date('2022/12/03') && today < new Date('2022/12/09')){
  console.log('Date');
  getPartidos('/get-partidos/octavos')
    .then(data => {
      const cards = createPartidosCards(data, correoUser.id);

      cards.forEach(card => {
        container_octavos.append(card);
      })
    })
    .catch(err => console.log(err));
  }

//Si la fecha es mayor o igual al 9 de diciembre y menor a 13 de diciembre: fetch(semifinales)
if(today >= new Date('2022/12/09') && today < new Date('2022/12/13')){
  console.log('Date');
  getPartidos('/get-partidos/cuartos')
    .then(data => {
      const cards = createPartidosCards(data, correoUser.id);

      cards.forEach(card => {
        container_cuartos.append(card);
      })
    })
    .catch(err => console.log(err));
}

//Si la fecha es mayor o igual al 17 de diciembre y menor al 18 de diciembre: fetch(finales)
if(today >= new Date('2022/12/17') && today < new Date('2022/12/18')){
  console.log('Date');
  getPartidos('/get-partidos/semi')
    .then(data => {
      const cards = createPartidosCards(data, correoUser.id);

      cards.forEach(card => {
        container_semifinal.append(card);
      })
    })
    .catch(err => console.log(err));
}

async function getPartidos(url){
  const fetchData = await fetch(url);
  const data = await fetchData.json();

  return data;
}