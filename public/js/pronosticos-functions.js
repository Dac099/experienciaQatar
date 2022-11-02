import { Apuesta } from '../models/tabla-apuesta.js';

export function createPartidosCards(partidos, correoUser){
  const cards = [];

  partidos.forEach((partido) => {
    let data = {};

    checkForBets(partido, correoUser)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
    // let data = (bet.goles_a == 0 && bet.goles_b == 0) ? partido : bet; 

    const nuevoPronostico = new Apuesta(data, correoUser);
    cards.push(nuevoPronostico.createTable());
  });

  return cards;
}

async function checkForBets(partido, correo){
  const req = await fetch('/user/save-apuesta',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fecha: partido.fecha,
      equipo_a: partido.equipo_a,
      equipo_b: partido.equipo_b,
      goles_a: partido.goles_a,
      goles_b: partido.goles_b,
      etapa: partido.etapa,
      correo_user: correo
    })
  });
  const data = await req.json();

  return data;
}