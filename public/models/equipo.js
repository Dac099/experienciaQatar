export class Equipo {
  constructor({
    name,
    p_jugados,
    p_ganados,
    p_perdidos,
    g_totales,
    g_contra,
    puntos
  }){
    this.name = name;
    this.p_jugados = p_jugados;
    this.p_ganados = p_ganados;
    this.p_perdidos = p_perdidos;
    this.g_totales = g_totales;
    this.g_contra = g_contra;
    this.puntos = puntos;
  }
}

