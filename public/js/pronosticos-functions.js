import { Apuesta } from '../models/tabla-apuesta.js';

export function createPartidosCards(partidos, correoUser){
  const cards = [];

  partidos.forEach(partido => {
    const nuevoPronostico = new Apuesta(partido, correoUser);
    cards.push(nuevoPronostico.createTable());
  });

  return cards;
}