const container = document.querySelector('.container-partidos');
const partidoBtn = document.querySelector('.addPartido');
const modal = document.querySelector('.modalFormPartido');
const closeModal = modal.querySelector('.close');
const submitBtn = document.querySelector('#btnSubmit');
import { Partido } from '../models/partido.js';

//Open and close modal
function modalControl(){
  partidoBtn.addEventListener('click', () => {
    modal.style.display = "block";
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = "none";
  });  

}

function createCard(partido){
  const section = document.createElement('section');
  section.className = 'cardPartido';
  section.innerHTML = `
    <section class="equipoA">
      <p>${partido.equipo_a}</p>
      <section class="estats-equipo">
        <section class="index-results">
          <p>Goles:</p>
          <p>Puntos:</p>
        </section>
        <section class="results">
          <p class="goles">${partido.goles_a}</p>
          <p class="puntos">${partido.puntos_a}</p>
        </section>
      </section>
    </section>

    <section class="equipoB">
      <p>${partido.equipo_b}</p>
      <section class="estats-equipo">
        <section class="index-results">
          <p>Goles:</p>
          <p>Puntos:</p>
        </section>
        <section class="results">
          <p class="goles">${partido.goles_b}</p>
          <p class="puntos">${partido.puntos_b}</p>
        </section>
      </section>
    </section>

    <section class="dataPartido">
      <p class="fecha-partido">${partido.date}</p>
      <p class="etapa-partido">${partido.etapa}</p>
    </section>
  `;

  return section;
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  const equipo_a = document.querySelector('#equipo_a');
  const goles_a = document.querySelector('#goles_a');
  const puntos_a = document.querySelector('#puntos_a');
  const equipo_b = document.querySelector('#equipo_b');
  const goles_b = document.querySelector('#goles_b');
  const puntos_b = document.querySelector('#puntos_b');
  const date = document.querySelector('#date');
  const etapa = document.querySelector('#etapa');

  const nuevoPartido = new Partido({
    equipo_a: equipo_a.value,
    goles_a: goles_a.value,
    puntos_a: puntos_a.value,
    equipo_b: equipo_b.value,
    puntos_b: puntos_b.value, 
    goles_b: goles_b.value,
    date: date.value,
    etapa: etapa.value
  });

  modal.style.display = "none";

  const card = createCard(nuevoPartido);
  container.append(card);
});

modalControl();