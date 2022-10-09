import { Equipo } from "../models/equipo.js";

//Modal Form control
const modal = document.querySelector('.modalForm');
const close =  modal.querySelector('.close');
const btnAdd = document.querySelector('.addCard');

function closeModal(){
  btnAdd.addEventListener('click', () => {
    modal.style.display = "block";
  });

  close.addEventListener('click', () => {
    modal.style.display = "none";
  });

  window.addEventListener('click', (e) => {
    if(e.target === modal){
      modal.style.display = "none";
    }
  });

}

closeModal();

//Create card form Form
const submitBtn = document.querySelector('#submitEquipo');
const container = document.querySelector('.container');

function createCard(equipo){
  const card = document.createElement('section');
  card.innerHTML = `
  <p class="equipo">${equipo.name}</p>
  <div class="estats">
    <div class="index">
      <p>Partidos jugados:</p>
      <p>Partidos perdidos:</p>
      <p>Partidos ganados:</p>
      <p>Goles totales:</p>
      <p>Goles contra:</p>
      <p>Puntos totales:</p>
    </div>
    <div class="values">
      <p class="partidos-jugados">${equipo.p_jugados}</p>
      <p class="partidos-perdidos">${equipo.p_perdidos}</p>
      <p class="partidos-ganados">${equipo.p_ganados}</p>
      <p class="goles-totales">${equipo.g_totales}</p>
      <p class="goles-contra">${equipo.g_contra}</p>
      <p class="puntos-totales">${equipo.puntos}</p>
    </div>
  </div>
  `;

  return card;
}


// Get the data
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  //Form inputs
  const name = document.querySelector('#name');
  const p_jugados = modal.querySelector('#p_jugados');
  const p_perdidos = modal.querySelector('#p_perdidos');
  const p_ganados = modal.querySelector('#p_perdidos');
  const g_totales = modal.querySelector('#g_totales');
  const g_contra = modal.querySelector('#g_contra');
  const puntos = modal.querySelector('#puntos');

  const nuevoEquipo = new Equipo({
    name: name.value,
    p_ganados: p_ganados.value,
    p_jugados: p_jugados.value,
    p_perdidos: p_perdidos.value,
    g_totales: g_totales.value,
    g_contra: g_contra.value,
    puntos: puntos.value
  });
  
  modal.style.display = "none";

  const card = createCard(nuevoEquipo);
  container.appendChild(card);
});
