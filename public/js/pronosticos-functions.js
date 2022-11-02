import { Apuesta } from '../models/tabla-apuesta.js';

export function createPartidosCards(partidos, apuestas ,correoUser){
  const cards = [];

  partidos.forEach((partido) => {
    const apuesta = getApuestaByPartido(partido, apuestas);
    
    if(apuesta != null){
      const nuevoPronostico = new Apuesta(apuesta, correoUser);
      cards.push(nuevoPronostico.createTable());
    }

    if(apuesta == null){
      const nuevoPronostico = new Apuesta(partido, correoUser);
      cards.push(nuevoPronostico.createTable());
    }
  });
  return cards;
}

function getApuestaByPartido(partido, array_apuestas){
  let apuestaEncontrada = {};

  if(array_apuestas.length == []) return null;

  array_apuestas.forEach(apuesta => {
    if(apuesta.equipo_a == partido.equipo_a && apuesta.equipo_b == partido.equipo_b){
      if(apuesta.fecha == partido.fecha && apuesta.etapa == partido.etapa){
        apuestaEncontrada = {...apuesta}
      }
    }
  });

  return apuestaEncontrada;
}