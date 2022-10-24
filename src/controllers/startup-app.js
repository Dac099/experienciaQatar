const { Equipo } = require('../models/equipo-model.js');

//Crear equipos y cargar los equipos que necesite la aplicacion
async function CreateTeams(){
  try {
    await Equipo.create({
      nombre: "Alemania",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Arabia Saudita",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Argentina",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Australia",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Bélgica",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Brasil",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Camerún",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Canadá",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Qatar",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Corea del Sur",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Costa Rica",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Croacia",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Dinamarca",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Ecuador",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "España",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Estados Unidos",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Francia",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Gales",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Ghana",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Inglaterra",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Irán",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Japón",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Marruecos",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "México",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Paises Bajos",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Polonia",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Portugal",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Senegal",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Serbia",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Suiza",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Túnez",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
    await Equipo.create({
      nombre: "Uruguay",
      partidos_jugados: 0,
      partidos_ganados: 0,
      goles_totales: 0,
      goles_contra: 0,
      puntos: 0,
      etapa: "Grupos"
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { CreateTeams };