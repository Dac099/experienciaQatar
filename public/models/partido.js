export class Partido{
  constructor({
    equipo_a,
    goles_a,
    puntos_a,
    equipo_b,
    goles_b,
    puntos_b,
    date,
    etapa
  }){
    this.equipo_a = equipo_a;
    this.goles_a = goles_a;
    this.puntos_a = puntos_a;
    this.equipo_b = equipo_b;
    this.goles_b = goles_b;
    this.puntos_b = puntos_b;
    this.date = date;
    this.etapa = etapa;
  }
}