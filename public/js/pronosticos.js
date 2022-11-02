const container_grupos = document.getElementById('container-grupos');
const container_octavos = document.getElementById('container-octavos');
const container_cuartos = document.getElementById('container-cuartos');
const container_semifinal = document.getElementById('container-semifinal');
const container_final = document.getElementById('container-final');
const correoUser = document.getElementsByTagName('body').item(0);

import { createPartidosCards }  from './pronosticos-functions.js';

let today = new Date();

//Si la fecha es menor a 3 de diciembre: fetch(grupos)
if(today < new Date('2022/12/03')){
  createCards(container_grupos, '/get-partidos/grupos', correoUser.id);
}

//Si la fecha es mayor o igual al 3 de diciembre y menor a  9 de diciembre: fetch(octavos)
if(today >= new Date('2022/12/03') && today < new Date('2022/12/09')){
  createCards(container_octavos, '/get-partidos/octavos', correoUser.id);
}
//Si la fecha es mayor o igual al 9 de diciembre y menor a 13 de diciembre: fetch(cuartos)
if(today >= new Date('2022/12/09') && today < new Date('2022/12/13')){
  createCards(container_cuartos, '/get-partidos/cuartos', correoUser.id);
}

//Si la fecha es mayor igual a 13 y menor igual a 14: fetch(semifinales)
if(today >= new Date('2022/12/13') && today < new Date('2022/12/14')){
  createCards(container_semifinal, '/get-partidos/semi', correoUser.id);
}


//Si la fecha es mayor o igual al 17 de diciembre y menor al 18 de diciembre: fetch(finales)
if(today >= new Date('2022/12/17') && today < new Date('2022/12/18')){
  createCards(container_final, '/get-partidos/final', correoUser.id);
}

async function getPartidos(partidosUrl){
  try {
    const fetch_partidos = await fetch(partidosUrl);
    const partidos_data = await fetch_partidos.json();

    return partidos_data;
  } catch (error) {
    console.log(error);
  }
}

async function getApuestas(apuestasUrl){
  try {
    const fetch_apuestas = await fetch(apuestasUrl);
    const apuestas_data = await fetch_apuestas.json();

    return apuestas_data;
  } catch (error) {
    console.log(error);
  }
}

async function createCards(container, partidos_url, correo){
  try {
    const partidos = await getPartidos(partidos_url);
    const apuestas = await getApuestas(`/get-apuestas/${correoUser.id}`);

    const cards = createPartidosCards(partidos, apuestas, correo);

    container.append(...cards);
  } catch (error) {
    console.log(error);
  }
}